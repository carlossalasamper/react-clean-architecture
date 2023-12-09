import { injectable, provided } from "inversify-sugar";
import { makeAutoObservable } from "mobx";
import { ToastService } from "@/core/presentation/services/ToastService";
import GetPostsStoreState from "../../types/GetPostsStoreState";
import GetPostsUseCase from "@/post/application/useCases/GetPostsUseCase";
import GetPostsPayload from "@/post/application/types/GetPostsPayload";

@injectable()
export class GetPostsStore implements GetPostsStoreState {
  isLoading = false;
  results = [] as GetPostsStoreState["results"];
  count = 0;
  filters = {};
  pagination = {
    page: 1,
    pageSize: 25,
  };

  constructor(
    @provided(ToastService) private readonly toastService: ToastService,
    @provided(GetPostsUseCase)
    private readonly getPostsUseCase: GetPostsUseCase
  ) {
    makeAutoObservable(this);
  }

  get pageCount() {
    return Math.ceil(this.count / this.pagination.pageSize);
  }

  get isEmpty(): boolean {
    return this.results.length === 0;
  }

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  setResults = (results: GetPostsStoreState["results"]) => {
    this.results = results;
  };

  setCount = (count: GetPostsStoreState["count"]) => {
    this.count = count;
  };

  mergeFilters = (payload: Partial<GetPostsStoreState["filters"]>) => {
    Object.assign(this.filters, payload);
  };

  mergePagination = (
    payload: Partial<GetPostsStoreState["pagination"]>
  ): void => {
    Object.assign(this.pagination, payload);
  };

  async getPosts() {
    const payload: GetPostsPayload = {
      ...this.filters,
      ...this.pagination,
    };

    this.setIsLoading(true);

    return this.getPostsUseCase
      .execute(payload)
      .then((response) => {
        this.setResults(response.results);
        this.setCount(response.count);
      })
      .catch((error) => {
        this.toastService.error(error.message);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}

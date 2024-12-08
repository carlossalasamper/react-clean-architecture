import { injectable, inject } from "inversiland";
import {
  IPostRepository,
  IPostRepositoryToken,
} from "@/post/domain/specifications/IPostRepository";

@injectable()
export default class FindPostUseCase {
  constructor(
    @inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(id: number) {
    return this.postRepository.find(id);
  }
}

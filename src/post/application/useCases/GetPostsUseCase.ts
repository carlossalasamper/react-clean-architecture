import {
  IPostRepository,
  IPostRepositoryToken,
} from "@/post/domain/specifications/IPostRepository";
import GetPostsPayload from "@/post/application/types/GetPostsPayload";
import { injectable, inject } from "inversiland";
import { UseCase } from "@/core/application/UseCase";
import GetPostsResponse from "../types/GetPostsResponse";

@injectable()
export default class GetPostsUseCase
  implements UseCase<GetPostsPayload, Promise<GetPostsResponse>>
{
  constructor(
    @inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(data: GetPostsPayload) {
    return this.postRepository.get(data);
  }
}

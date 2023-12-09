import PostEntity from "../entities/PostEntity";
import GetPostsPayload from "../../application/types/GetPostsPayload";
import GetPostsResponse from "@/post/application/types/GetPostsResponse";

export const IPostRepositoryToken = Symbol();

export interface IPostRepository {
  find: (id: number) => Promise<PostEntity>;
  get: (data: GetPostsPayload) => Promise<GetPostsResponse>;
}

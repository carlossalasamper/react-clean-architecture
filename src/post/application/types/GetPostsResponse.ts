import PostEntity from "@/post/domain/entities/PostEntity";

export default interface GetPostsResponse {
  results: PostEntity[];
  count: number;
}

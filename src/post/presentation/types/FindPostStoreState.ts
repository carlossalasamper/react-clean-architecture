import PostEntity from "@/post/domain/entities/PostEntity";

export default interface FindPostStoreState {
  isLoading: boolean;
  post: PostEntity | null;
}

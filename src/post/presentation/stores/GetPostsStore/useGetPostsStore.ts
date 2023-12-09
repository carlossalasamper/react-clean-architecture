import { useContextStore } from "@/core/presentation/hooks/useContextStore";
import { GetPostsStore } from "./GetPostsStore";
import { GetPostsStoreContext } from "./GetPostsStoreContext";

export const useGetPostsStore = (): GetPostsStore => {
  const store = useContextStore(GetPostsStoreContext);

  return store;
};

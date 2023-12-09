import { FindPostStore } from "./FindPostStore";
import { FindPostStoreContext } from "./FindPostStoreContext";
import { useContextStore } from "@/core/presentation/hooks/useContextStore";

export const useFindPostStore = (): FindPostStore => {
  const store = useContextStore(FindPostStoreContext);

  return store;
};

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { withProviders } from "@/core/presentation/utils/withProviders";
import { FindPostStoreProvider } from "../stores/FindPostStore/FindPostStoreProvider";
import { useFindPostStore } from "../stores/FindPostStore/useFindPostStore";

const PostPage = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation(["post"]);
  const findPostStore = useFindPostStore();
  const { post, isLoading } = findPostStore;

  useEffect(() => {
    if (id) {
      findPostStore.findPost(parseInt(id));
    }
  }, [findPostStore, id]);

  return isLoading ? (
    <p>{t("post:pages.PostPage.loading")}</p>
  ) : (
    <div className="p-4 border-b border-gray-300">
      <span className="text-lg font-bold mb-2">{post?.title}</span>
      <span className="text-base">{post?.body}</span>
    </div>
  );
});

export default withProviders(FindPostStoreProvider)(PostPage);

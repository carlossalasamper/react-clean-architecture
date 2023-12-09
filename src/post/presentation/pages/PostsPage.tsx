import { useEffect } from "react";
import { observer } from "mobx-react";
import PostItem from "../components/PostItem";
import { withProviders } from "@/core/presentation/utils/withProviders";
import { useTranslation } from "react-i18next";
import { GetPostsStoreProvider } from "../stores/GetPostsStore/GetPostsStoreProvider";
import { useGetPostsStore } from "../stores/GetPostsStore/useGetPostsStore";

const PostsPage = observer(() => {
  const { t } = useTranslation(["post"]);
  const getPostsStore = useGetPostsStore();
  const { results, isLoading } = getPostsStore;

  useEffect(() => {
    getPostsStore.getPosts();
  }, [getPostsStore]);

  return (
    <div>
      {isLoading ? (
        <p>{t("post:pages.PostsPage.loading")}</p>
      ) : (
        <div className="overflow-y-scroll h-full">
          {results.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
});

export default withProviders(GetPostsStoreProvider)(PostsPage);

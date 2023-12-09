import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import PostsPage from "@/post/presentation/pages/PostsPage";
import PostPage from "@/post/presentation/pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />,
  },
  {
    path: "/posts/:id",
    element: <PostPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

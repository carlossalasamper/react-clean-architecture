import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",

    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

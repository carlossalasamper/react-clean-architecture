import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import AppOverlay from "./components/AppOverlay";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/router";

function App() {
  return (
    <>
      <Helmet titleTemplate="%s - React Clean Architecture" />

      <AppOverlay />

      <RouterProvider router={router} />
    </>
  );
}

export default App;

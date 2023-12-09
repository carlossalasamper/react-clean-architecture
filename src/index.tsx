import React from "react";
import ReactDOM from "react-dom/client";

import "./core/presentation/styles/index.css";
import "./core/presentation/i18n/index";
import AppModule from "./AppModule";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { InversifySugar } from "inversify-sugar";
import App from "./core/presentation/App";

InversifySugar.options.debug = import.meta.env.DEV;
InversifySugar.options.defaultScope = "Singleton";
InversifySugar.run(AppModule);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

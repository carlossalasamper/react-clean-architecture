import React from "react";
import ReactDOM from "react-dom/client";

import "./core/presentation/styles/index.css";
import "./core/presentation/i18n/index";
import AppModule from "./AppModule";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { Inversiland } from "inversiland";
import App from "./core/presentation/App";

Inversiland.options.logLevel = import.meta.env.DEV ? "debug" : "info";
Inversiland.options.defaultScope = "Singleton";
Inversiland.run(AppModule);

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

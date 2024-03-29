import { React } from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./Store/Progress.js";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import { setupStoreSubscriber } from "./Store/storeSubscriber.js";

setupStoreSubscriber(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./Store/Progress.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import PageError from "./components/Error/PageError.jsx";
import Meals from "./components/Meals.jsx";
import About from "./components/About/About.jsx";
import RestaurantJob from "./components/Restaurant-jobs/RestaurantJobs.jsx";
import OurStory from "./components/OurStory/OurStory.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      { index: true, element: <App /> },
      {
        path: "meals",
        element: <Meals />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/restaurant-jobs",
        element: <RestaurantJob />,
      },
      {
        path: "/our-story",
        element: <OurStory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

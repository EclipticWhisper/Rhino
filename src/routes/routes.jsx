import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import PageError from "../components/Error/PageError.jsx";
import App from "../App.jsx";
import Meals from "../components/Meals.jsx";
import About from "../components/About/About.jsx";
import RestaurantJob from "../components/Restaurant-jobs/RestaurantJobs.jsx";
import OurStory from "../components/OurStory/OurStory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      { index: true, element: <App /> },
      { path: "meals", element: <Meals /> },
      { path: "about", element: <About /> },
      { path: "restaurant-jobs", element: <RestaurantJob /> },
      { path: "our-story", element: <OurStory /> },
    ],
  },
]);

export default router;

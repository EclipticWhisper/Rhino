import { createBrowserRouter } from "react-router-dom";
import Root from "../Root.jsx";
import PageError from "../components/Error/PageError.jsx";
import HomePage from "../pages/HomePage.jsx";
import Meals from "../components/Meals.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import JobsPage from "../pages/JobsPage.jsx";
import StoryPage from "../pages/StoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "meals", element: <Meals /> },
      { path: "about", element: <AboutPage /> },
      { path: "restaurant-jobs", element: <JobsPage /> },
      { path: "our-story", element: <StoryPage /> },
    ],
  },
]);

export default router;

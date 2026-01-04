import { useState } from "react";
import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";
import { buildApiUrl } from "../config/api";

const requestConfig = { method: "GET" };
const ITEMS_PER_PAGE = 6;
const MEALS_URL = buildApiUrl("/meals");

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(MEALS_URL, requestConfig, []);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  if (isLoading) {
    return <h1 className="center">Fetching meals...</h1>;
  }

  if (error) {
    return <Error title="Failed to fetch meals." msg={error} />;
  }

  if (!loadedMeals || loadedMeals.length === 0) {
    return <h2 className="center">No meals available right now. Check back soon!</h2>;
  }

  const displayedMeals = loadedMeals.slice(0, visibleCount);
  const hasMore = visibleCount < loadedMeals.length;

  return (
    <section aria-labelledby="meals-heading">
      <h2 id="meals-heading" className="center">Our Meals</h2>
      <ul id="meals">
        {displayedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
      {hasMore && (
        <div className="center" style={{ marginTop: "2rem" }}>
          <button
            onClick={handleLoadMore}
            className="load-more-btn"
          >
            See More Meals
          </button>
        </div>
      )}
    </section>
  );
}

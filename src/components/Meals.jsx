import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";

// Centralize API base so it can be overridden via Vite env
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";
const requestConfig = { method: "GET" };

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(`${API_BASE}/meals`, requestConfig, []);

  if (isLoading) {
    return <h1 className="center">Fetching meals...</h1>;
  }

  if (error) {
    return <Error title="Failed to fetch meals." msg={error} />;
  }

  if (!loadedMeals || loadedMeals.length === 0) {
    return <h2 className="center">No meals available right now. Check back soon!</h2>;
  }

  return (
    <section aria-labelledby="meals-heading">
      <h2 id="meals-heading" className="center">Our Meals</h2>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
}

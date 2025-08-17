import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <h1 className="center">Fetching Meals...</h1>;
  }
  if (error) {
    return <Error title="Failed to fetch meals." msg={error} />;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

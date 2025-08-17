import { currencyFormatter } from "../Utils/CurrencyFormatter";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/CartRedux.js";
export default function MealItem({ meal }) {
  const dispatch = useDispatch();

  function addItemToCart() {
    dispatch(cartActions.addItem(meal));
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-description"> {meal.description}</p>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={addItemToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

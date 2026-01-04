import { currencyFormatter } from "../Utils/CurrencyFormatter";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/CartRedux.js";
import { buildAssetUrl } from "../config/api";

export default function MealItem({ meal }) {
  const dispatch = useDispatch();

  function addItemToCart() {
    dispatch(cartActions.addItem(meal));
  }

  return (
    <li className="meal-item">
      <article>
        <div className="meal-image-wrapper">
          <img
            src={buildAssetUrl(meal.image)}
            alt={meal.name}
            loading="lazy"
          />
        </div>
        <div className="meal-content">
          <h3 className="meal-name">{meal.name}</h3>
          <p className="meal-description">{meal.description}</p>
          <div className="meal-footer">
            <span className="meal-price">
              {currencyFormatter.format(meal.price)}
            </span>
            <Button onClick={addItemToCart} className="meal-btn">
              Add to Cart
            </Button>
          </div>
        </div>
      </article>
    </li>
  );
}

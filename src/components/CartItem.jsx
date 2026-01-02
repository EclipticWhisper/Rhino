import { currencyFormatter } from "../Utils/CurrencyFormatter.js";

export default function CartItem({
  name,
  price,
  quantity,
  onDecrease,
  onIncrease,
}) {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <h3 className="cart-item-name">{name}</h3>
        <span className="cart-item-price">{currencyFormatter.format(price)}</span>
      </div>
      <div className="cart-item-actions">
        <button onClick={onDecrease} className="qty-btn qty-decrease" aria-label="Decrease quantity">
          −
        </button>
        <span className="cart-item-qty">{quantity}</span>
        <button onClick={onIncrease} className="qty-btn qty-increase" aria-label="Increase quantity">
          +
        </button>
      </div>
    </li>
  );
}

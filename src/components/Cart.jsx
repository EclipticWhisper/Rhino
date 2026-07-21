import { useMemo } from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../Utils/CurrencyFormatter.js";
import Button from "./UI/Button.jsx";
import { useSelector, useDispatch } from "react-redux";
import { progressActions } from "../Store/Progress.js";
import { cartActions } from "../Store/CartRedux.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.Items);
  const progress = useSelector((state) => state.progress.progress);

  const cartTotalPrice = useMemo(
    () => cartItems.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0),
    [cartItems]
  );

  function handleCloseCart() {
    dispatch(progressActions.closeCart());
  }

  function handleShowCart() {
    dispatch(progressActions.showCheckout());
  }

  function handleIncrease(item) {
    dispatch(cartActions.addItem(item));
  }

  function handleDecrease(id) {
    dispatch(cartActions.removeItem(id));
  }

  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onDecrease={() => handleDecrease(item.id)}
            onIncrease={() => handleIncrease(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartItems.length > 0 && (
          <Button onClick={handleShowCart}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

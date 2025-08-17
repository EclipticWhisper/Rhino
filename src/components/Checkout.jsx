import Modal from "./UI/Modal";
import { currencyFormatter } from "../Utils/CurrencyFormatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { progressActions } from "../Store/Progress";
import useHttp from "../Hooks/useHttp";
import { cartActions } from "../Store/CartRedux";

const configRequest = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.Items);
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress.progress);

  const cartTotalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const {
    error,
    isLoading: isSending,
    data,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", configRequest);

  function handleClose() {
    dispatch(progressActions.closeCheckout());
  }

  function handleFinish() {
    dispatch(progressActions.closeCheckout());
    dispatch(cartActions.clearCart());
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerEntries = Object.fromEntries(fd.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items: cartItems,
          customer: customerEntries,
        },
      })
    );
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data....</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order has been submitted successfully.</p>
        <p>We will get back to you with an email within one minute.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay!</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotalPrice)} </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="text" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}

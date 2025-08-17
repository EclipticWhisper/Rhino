import { useDispatch } from "react-redux";
import { progressActions } from "../Store/Progress.js";
import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import { useSelector } from "react-redux";
import NavLinks from "./UI/NavLinks.jsx";
import HamburgerComponent from "./UI/Hamburger.jsx";
export default function Header() {
  const cartCtx = useSelector((state) => state.cart.Items);
  const dispatch = useDispatch();
  function handleShowCart() {
    dispatch(progressActions.showCart());
  }

  const totalCartItems = cartCtx.reduce((totalnumberOfItems, item) => {
    return totalnumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Rhino_Daizo</h1>
      </div>
      <NavLinks />
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
      <HamburgerComponent />
    </header>
  );
}

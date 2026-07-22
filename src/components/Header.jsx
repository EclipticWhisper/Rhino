import { useDispatch, useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { progressActions } from "../Store/Progress.js";
import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import NavLinks from "./UI/NavLinks.jsx";
import HamburgerComponent from "./UI/Hamburger.jsx";
import ThemeToggle from "./UI/ThemeToggle.jsx";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.Items);

  const totalCartItems = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const handleShowCart = useCallback(() => {
    dispatch(progressActions.showCart());
  }, [dispatch]);

  return (
    <header id="main-header" role="banner">
      <div id="title">
        <img src={logoImg} alt="Rhino_Daizo Restaurant Logo" />
      </div>
      <nav className="nav-desktop" aria-label="Main navigation">
        <NavLinks />
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Button
          textOnly={true}
          onClick={handleShowCart}
          className="cart-button"
          aria-label={`Shopping cart with ${totalCartItems} items`}
          title={`You have ${totalCartItems} item(s) in your cart`}
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalCartItems}</span>
        </Button>
      </div>
      <HamburgerComponent />
    </header>
  );
}

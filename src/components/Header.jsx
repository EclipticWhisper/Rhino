import { useDispatch, useSelector } from "react-redux";
import { progressActions } from "../Store/Progress.js";
import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import NavLinks from "./UI/NavLinks.jsx";
import HamburgerComponent from "./UI/Hamburger.jsx";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.Items);

  // Calculate total items in cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Handle cart display
  const handleShowCart = () => {
    dispatch(progressActions.showCart());
  };

  return (
    <header id="main-header" role="banner">
      {/* Logo Section */}
      <div id="title">
        <img src={logoImg} alt="Rhino Daizo Restaurant Logo" />
        {/* <h1>Rhino_Daizo</h1> */}
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop" aria-label="Main navigation">
        <NavLinks />
      </nav>

      {/* Cart Button */}
      <div className="header-actions">
        <Button 
          textOnly={true} 
          onClick={handleShowCart}
          className="cart-button"
          aria-label={`Shopping cart with ${totalCartItems} items`}
          title={`You have ${totalCartItems} item(s) in your cart`}
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-count">({totalCartItems})</span>
        </Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <HamburgerComponent />
    </header>
  );
}

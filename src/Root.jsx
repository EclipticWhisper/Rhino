import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

export default function Root() {
  const progress = useSelector((state) => state.progress.progress);

  return (
    <>
      <Header />
      <Outlet /> {/* This will render App, Meals, About, etc. */}
      {progress === "cart" && <Cart />}
      {progress === "checkout" && <Checkout />}
      <Footer />
    </>
  );
}

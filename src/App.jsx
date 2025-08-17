import { useSelector } from "react-redux";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Meals from "./components/Meals";
import HeroSection from "./components/Herosection.jsx";
import About from "./components/About/About.jsx";

function App() {
  const progress = useSelector((state) => state.progress.progress);

  return (
    <>
      <HeroSection />
      <Meals />
      {progress === "cart" && <Cart />}
      {progress === "checkout" && <Checkout />}
    </>
  );
}

export default App;

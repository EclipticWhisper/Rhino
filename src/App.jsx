import { useSelector } from "react-redux";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Meals from "./components/Meals";
import HeroSection from "./components/Herosection.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  const progress = useSelector((state) => state.progress.progress);

  return (
    <>
      <HeroSection />
      <Meals />
      {progress === "cart" && <Cart />}
      {progress === "checkout" && <Checkout />}
      <Footer />
    </>
  );
}

export default App;

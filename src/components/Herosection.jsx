import "./css/Hero.css";
import Button from "./UI/Button.jsx";
import heroImg from "../assets/Hero-image.png";

export default function HeroSection() {
  const handleScrollToMeals = () => {
    document.getElementById("meals")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <div className="hero-left">
          <h2 id="hero-heading" className="hero-title">
            Crave It? Get It Fast — Delicious Fast Food Delivered to Your Doorstep!
          </h2>
          <p className="hero-desc">
            Savor bold flavors, hand-crafted meals, and lightning-fast delivery. Your next favorite bite is only a tap away.
          </p>
          <div className="hero-actions">
            <Button onClick={handleScrollToMeals}>Order Now</Button>
            <Button textOnly={true} onClick={handleScrollToMeals}>
              Browse Menu
            </Button>
          </div>
        </div>
        <div className="hero-right" aria-hidden="true">
          <img src={heroImg} alt="Fresh fast food assortment" />
        </div>
      </div>
    </section>
  );
}

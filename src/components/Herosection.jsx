import "./css/Hero.css";
import Button from "./UI/Button.jsx";
import heroImg from "../assets/Hero-image.png";

export default function HeroSection() {
  const handleScrollToMeals = () => {
    document.getElementById("meals")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">🍔 Welcome to Rhino Daizo</div>
          
          <h2 id="hero-heading" className="hero-title">
            Delicious Fast Food <br />
            Delivered to Your Doorstep!
          </h2>
          
          <p className="hero-description">
            Savor bold flavors, hand-crafted meals, and lightning-fast delivery. 
            Your next favorite bite is only a tap away.
          </p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">Fast Delivery</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">🔥</span>
              <span className="feature-text">Hot & Fresh</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">⭐</span>
              <span className="feature-text">Top Rated</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Button onClick={handleScrollToMeals}>
              Order Now
            </Button>
            <Button textOnly={true} onClick={handleScrollToMeals}>
              Browse Menu
            </Button>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-bg"></div>
          <img src={heroImg} alt="Fresh fast food assortment" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

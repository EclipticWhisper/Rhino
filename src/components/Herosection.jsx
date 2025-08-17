import "./css/hero.css";
import TextType from "./UI/TextType";
import heroImg from "../assets/Hero-image.png";
export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <TextType
            as="h2"
            text={[
              "Crave It? Get It Fast — Delicious Fast Food Delivered to Your Doorstep!",
              "Hot & Fresh Meals at Your Fingertips — Delicious Fast Food Delivered to Your Family-Members!",
              "Order Now and Enjoy — Delicious Fast Food Delivered to Your Doorstep!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

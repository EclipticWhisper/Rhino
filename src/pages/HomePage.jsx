import HeroSection from "../components/Herosection.jsx";
import Meals from "../components/Meals.jsx";
import About from "../components/About/About.jsx";
import Contact from "../components/Contact/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Meals />
      <About />
      <Contact />
    </>
  );
}

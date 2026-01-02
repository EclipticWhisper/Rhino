import footerImg from "../../assets/Footer.png";
import "../css/Footer.css";
import { FooterLinks } from "./FooterLinks";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={footerImg} alt="Rhino_Daizo Logo" />
          </div>
          <p className="footer-tagline">Taste. Quality. Passion.</p>
        </div>

        {/* Links Section */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <h3>Quick Links</h3>
          <ul>
            {FooterLinks.map((footer) => (
              <li key={footer.id}>
                <Link to={footer.path}>{footer.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <a href="tel:+923197183512" className="phone-link">
            📞 +92-319-7183-512
          </a>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/rhinodaizo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/rhinodaizo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 Rhino_Daizo. Built with 🔥 by Pakistan Dev.</p>
      </div>
    </footer>
  );
}

import footerImg from "../../assets/Footer.png";
import "../css/Footer.css";
import { FooterLinks } from "./FooterLinks";
import { Link } from "react-router-dom";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={footerImg} alt="Rhino_Daizo Logo" />
          </div>
          <p className="footer-tagline">Taste. Quality. Passion.</p>
        </div>
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
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/rhinodaizo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Rhino_Daizo. Built with 🔥 by Pakistan Dev.</p>
      </div>
    </footer>
  );
}

import footerImg from "../../assets/Footer.png";
import "../css/Footer.css";
import { FooterLinks } from "./FooterLinks";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-img">
          <img src={footerImg} alt="Logo image" />
        </div>

        <div className="footer-links">
          <p>Information</p>
          <ul>
            {FooterLinks.map((footer) => (
              <li key={footer.id}>
                <Link to={footer.path}>{footer.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact">
          <p>Contact Us</p>
          <a href="tel:+923197183512">+92-3197183512</a>
          <div className="icons">
            <a
              href="https://www.facebook.com/yourPage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/yourUsername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Ⓒ CopyRight Ahmii - The Pakistan-Dev</p>
      </div>
    </>
  );
}

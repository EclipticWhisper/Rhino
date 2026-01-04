import { Link } from "react-router-dom";
import Header from "../Header.jsx";
import "../css/Error.css";

export default function PageError() {
  return (
    <>
      <Header />
      <div className="error-page">
        <div className="error-content">
          <div className="error-code">404</div>
          <h1>Oops! This page got lost on delivery</h1>
          <p className="error-message">
            The page you're looking for doesn't exist. It might have been moved, deleted, or eaten by hungry customers.
          </p>
          <div className="error-actions">
            <Link to="/" className="error-btn error-btn--primary">
              Back to Home
            </Link>
            <Link to="/meals" className="error-btn error-btn--secondary">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

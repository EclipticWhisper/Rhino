
import "../css/About.css";
export default function About() {
  return (
    <>
      <div className="main-container">
        <div className="card">
          <div className="thefront">
            <h1>Our Values</h1>
          </div>
          <div className="theback">
            <p>
              As we are aware of the fact that this Global Pandemic has taken us
              hundreds of years back, and not just this; anxiety, stress and
              sorrow have been widely spread as a result of it.
            </p>
            <p>
              In these difficult times, Rhino_Daizo wants to promote happiness
              to all. Rhino-Daizo doesn't only provide happiness to its
              customers but society as a whole. Especially the underprivileged.
            </p>
          </div>
        </div>
      </div>
      <hr className="ruler" />
      <div className="main-container">
        <div className="card">
          <div className="thefront">
            <h1>SERVICE</h1>
          </div>
          <div className="theback">
            <p>
              We realize that our continued growth and success is tied to the
              happiness and satisfaction of our customers.
            </p>
            <p>
              Despite having a massive nationwide network of branches, we pay
              attention to every small detail that matters. Whenever our
              customers need help, we strive to provide them with the best and
              most timely service.
            </p>
          </div>
        </div>
      </div>

      <hr className="ruler" />
      <div className="main-container">
        <div className="card">
          <div className="thefront">
            <h1>QUALITY</h1>
          </div>
          <div className="theback">
            <p>Our premium quality food is at the core of our success.</p>
            <p>
              Along with this, we make sure are exemplary food safety standards
              meet the customer's expectations.
            </p>
            <p>
              We believe this is an essential part of our service in order to
              retain the trust of our customers.
            </p>
          </div>
        </div>
      </div>

      <hr className="ruler" />
    </>
  );
}

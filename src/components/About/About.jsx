import "../css/About.css";

const pillars = [
  {
    id: "values",
    title: "Our Values",
    content: [
      "During challenging times, we believe in bringing joy and positivity to our community.",
      "Rhino_Daizo stands for more than great food—we champion happiness across all levels of society, especially those in need.",
    ],
  },
  {
    id: "service",
    title: "Service",
    content: [
      "Our growth rests on customer satisfaction. We listen, care, and respond with urgency.",
      "With 30+ outlets nationwide, every order gets the same meticulous attention to detail. Your happiness is our mission.",
    ],
  },
  {
    id: "quality",
    title: "Quality",
    content: [
      "Premium ingredients and expert preparation form the foundation of everything we serve.",
      "We maintain uncompromising food safety standards because trust is earned through consistency and care.",
    ],
  },
];

export default function About() {
  return (
    <section className="about" aria-label="About Rhino_Daizo">
      <div className="about-intro">
        <h1>Who We Are</h1>
        <p>Built on passion, driven by flavor, guided by values.</p>
      </div>

      <div className="about-pillars">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="pillar-card" aria-label={pillar.title}>
            <div className="card-inner">
              <div className="card-front">
                <h2>{pillar.title}</h2>
              </div>
              <div className="card-back">
                {pillar.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

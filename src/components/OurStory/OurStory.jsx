import "../css/Story.css";

const milestones = [
  {
    year: "2014",
    title: "One grill, one dream",
    copy:
      "We opened a single takeaway on Khayaban-e-Rahat in Karachi with a simple goal: serve smash burgers that taste like obsession.",
  },
  {
    year: "2016",
    title: "Smash pioneers",
    copy:
      "Introducing the American smash technique to our market put saucy, seared, and addictive burgers on every local must-try list.",
  },
  {
    year: "2020",
    title: "Flavor in flight",
    copy:
      "Relentless experimenting kept our menu fresh—new builds, bolder fries, and sauces that turned regulars into loyalists.",
  },
  {
    year: "2024",
    title: "Nationwide staple",
    copy:
      "32 outlets across 9 cities later, Rhino_Daizo is a household name and a reliable fix for burger cravings everywhere.",
  },
  {
    year: "Next",
    title: "Global ambition",
    copy:
      "We are gearing up to take the Rhino_Daizo experience global and become the next great international burger franchise.",
  },
];

export default function OurStory() {
  return (
    <section className="story" aria-labelledby="story-title">
      <div className="story-hero">
        <p className="story-eyebrow">Our story</p>
        <h1 id="story-title" className="story-title">
          Building a legacy takes time, consistency, and heart
        </h1>
        <p className="story-lead">
          From a single Karachi grill to a nationwide favorite, we have grown by
          obsessing over flavor, speed, and the kind of service that keeps people
          coming back.
        </p>
      </div>

      <div className="story-grid">
        <article className="story-card story-highlight">
          <h2>What drives us</h2>
          <ul>
            <li>Bold flavor, smashed fresh on a scorching grill</li>
            <li>Experimentation that keeps the menu evolving</li>
            <li>Service that feels personal, fast, and reliable</li>
          </ul>
        </article>

        {milestones.map((item) => (
          <article key={item.year} className="story-card">
            <div className="story-year">{item.year}</div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

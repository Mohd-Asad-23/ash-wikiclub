import Link from "next/link";
import { programs } from "../../data/programs";

export default function ProgramsPage() {
  const programList = Object.values(programs);

  return (
    <main>
      <section className="hero-grid section">
        <div className="container">
          <p className="eyebrow">Wiki Club Tech UU • Programs</p>
          <h1 className="programs-title">Programs built for learning and contribution.</h1>
          <p className="muted programs-lead">
            Explore WikiClub Tech UU programs that connect students with Wikimedia,
            open source, mentors and collaborative projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="program-list">
            {programList.map((program) => (
              <article key={program.slug} className="glass program-card program-feature">
                <div>
                  <p className="eyebrow">Program</p>
                  <h2>{program.title}</h2>
                  <p className="muted program-description">{program.tagline}</p>

                  <div className="program-meta">
                    <span className="glass">⏱ {program.duration}</span>
                    <span className="glass">◉ {program.format}</span>
                  </div>
                </div>

                <Link href={`/programs/${program.slug}`} className="primary-button">
                  View program →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container muted">WikiClub Tech UU • Programs</div>
      </footer>
    </main>
  );
}

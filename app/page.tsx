import Link from "next/link";
import { programs } from "@/data/programs";

export default function Home() {
  return (
    <main>
      <section className="hero-grid section">
        <div className="container">
          <p className="eyebrow">Wiki Club Programs</p>
          <h1 style={{fontSize:"clamp(3rem,8vw,6.5rem)",lineHeight:.95,margin:"18px 0"}}>Learn. Contribute.<br />Grow together.</h1>
          <p className="muted" style={{fontSize:"1.15rem",maxWidth:680}}>A reusable home for community programs such as Chai with Wiki and Road to Wiki.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:28}}>
            {Object.values(programs).map((program) => (
              <Link key={program.slug} href={`/programs/${program.slug}`} className="glass" style={{padding:"13px 18px",borderRadius:999}}>{program.title} →</Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Reusable structure</p>
          <h2 style={{fontSize:"2.5rem",margin:"12px 0 32px"}}>One template. Every program.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
            {["About Program","Mentors & Partners","Cohorts & Stories","Achievements","Gallery","Call to Action","FAQs"].map((item) => (
              <div key={item} className="glass" style={{padding:24,borderRadius:20}}>
                <h3 style={{marginTop:0}}>{item}</h3>
                <p className="muted">Reusable content block ready to customize.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

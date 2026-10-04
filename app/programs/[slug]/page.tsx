import { notFound } from "next/navigation";
import { programs } from "@/data/programs";

export function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs[slug];
  if (!program) notFound();

  return (
    <main>
      <section className="hero-grid section">
        <div className="container">
          <p className="eyebrow">Wiki Club • Program</p>
          <h1 style={{fontSize:"clamp(3.2rem,8vw,7rem)",lineHeight:.92,margin:"18px 0"}}>{program.title}</h1>
          <p className="muted" style={{fontSize:"1.3rem",maxWidth:760}}>{program.tagline}</p>
          <div style={{display:"flex",gap:12,marginTop:30,flexWrap:"wrap"}}>
            <a href={program.applyUrl} style={{background:"var(--accent)",color:"#101010",padding:"14px 20px",borderRadius:999,fontWeight:800}}>{program.applyLabel} ↗</a>
            <a href="#about" className="glass" style={{padding:"14px 20px",borderRadius:999}}>Explore program ↓</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <p className="eyebrow">01 • About Program</p>
          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:40}}>
            <div>
              <h2 style={{fontSize:"2.6rem"}}>What is {program.title}?</h2>
              <p className="muted" style={{fontSize:"1.1rem",lineHeight:1.8}}>{program.about}</p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:24}}>
                <span className="glass" style={{padding:"10px 14px",borderRadius:999}}>⏱ {program.duration}</span>
                <span className="glass" style={{padding:"10px 14px",borderRadius:999}}>◉ {program.format}</span>
              </div>
            </div>
            <div className="glass" style={{padding:28,borderRadius:24}}>
              <h3>Goals</h3>
              <ul className="muted" style={{lineHeight:2}}>{program.goals.map(g=><li key={g}>{g}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:14}}>
          {program.stats.map(s=><div key={s.label} className="glass" style={{padding:24,borderRadius:20}}><div style={{fontSize:"2.2rem",fontWeight:900}}>{s.value}</div><div className="muted">{s.label}</div></div>)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">02 • Mentors</p>
          <h2 style={{fontSize:"2.6rem"}}>Learn from people who build.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:18,marginTop:30}}>
            {program.mentors.map(m=><article key={m.name+m.role} className="glass" style={{padding:20,borderRadius:24}}>
              <img src={m.image} alt={m.name} style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:18}} />
              <h3>{m.name}</h3><p style={{color:"var(--accent)",fontWeight:700}}>{m.role}</p><p className="muted">{m.bio}</p>
            </article>)}
          </div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:30}}>
            {program.partners.map(p=><div key={p.name} className="glass" style={{padding:"14px 22px",borderRadius:14,fontWeight:800}}>{p.logo} <span className="muted">{p.name}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">03 • Cohorts</p>
          <h2 style={{fontSize:"2.6rem"}}>People, progress and stories.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:18,marginTop:30}}>
            {program.cohorts.map(c=><article key={c.name} className="glass" style={{padding:26,borderRadius:24}}>
              <p className="eyebrow">{c.name}</p><h3>{c.highlight}</h3><p className="muted">{c.contributor}</p><p style={{lineHeight:1.7}}>{c.testimonial}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">04 • Achievements</p>
          <h2 style={{fontSize:"2.6rem"}}>Impact worth celebrating.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14,marginTop:30}}>
            {program.achievements.map(a=><div key={a} className="glass" style={{padding:22,borderRadius:18}}>✓ {a}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">05 • Gallery</p>
          <h2 style={{fontSize:"2.6rem"}}>Inside the program.</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:14,marginTop:30}}>
            {program.gallery.map(g=><div key={g.title} className="glass" style={{overflow:"hidden",borderRadius:20}}>
              <img src={g.image} alt={g.title} style={{width:"100%",aspectRatio:"4/3",objectFit:"cover"}} />
              <div style={{padding:16}}><small className="eyebrow">{g.type}</small><h3 style={{marginBottom:0}}>{g.title}</h3></div>
            </div>)}
          </div>
        </div>
      </section>

      <section id="apply" className="section">
        <div className="container">
          <div className="glass" style={{padding:"clamp(30px,7vw,70px)",borderRadius:30,textAlign:"center"}}>
            <p className="eyebrow">06 • Call to Action</p>
            <h2 style={{fontSize:"clamp(2.5rem,6vw,5rem)",margin:"14px 0"}}>Your road to the next contribution starts here.</h2>
            <p className="muted">Apply, mentor the next cohort, or contact the Wiki Club team.</p>
            <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",marginTop:24}}>
              <a href={program.applyUrl} style={{background:"var(--accent)",color:"#101010",padding:"14px 22px",borderRadius:999,fontWeight:800}}>{program.applyLabel}</a>
              <a href="mailto:hello@example.com?subject=Become a mentor" className="glass" style={{padding:"14px 22px",borderRadius:999}}>Become a mentor</a>
              <a href="mailto:hello@example.com?subject=Program enquiry" className="glass" style={{padding:"14px 22px",borderRadius:999}}>Contact us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">07 • FAQs</p>
          <h2 style={{fontSize:"2.6rem"}}>Frequently asked questions.</h2>
          <div style={{display:"grid",gap:12,marginTop:30}}>
            {program.faqs.map(f=><details key={f.question} className="glass" style={{padding:20,borderRadius:16}}>
              <summary style={{cursor:"pointer",fontWeight:800}}>{f.question}</summary><p className="muted" style={{lineHeight:1.7}}>{f.answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <footer style={{borderTop:"1px solid var(--line)",padding:"30px 0"}}><div className="container muted">Wiki Club • {program.title} • Built as a reusable program template.</div></footer>
    </main>
  );
}

import { about } from "../data";
import useReveal from "./useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title"><span>01.</span> About Me</h2>
        <div className="about">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about__stats">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

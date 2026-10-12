import { education } from "../data";
import useReveal from "./useReveal";

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title"><span>03.</span> Education</h2>
        <div className="timeline">
          {education.map((e, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__dot" />
              <div className="card">
                <span className="timeline__period">{e.period}</span>
                <h3>{e.title}</h3>
                <p className="muted">{e.place}</p>
                {e.note && <p className="timeline__note">{e.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

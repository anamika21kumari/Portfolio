import { skills } from "../data";
import useReveal from "./useReveal";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title"><span>02.</span> Skills</h2>
        <div className="grid grid--3">
          {skills.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((it) => (
                  <span className="chip" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { projects } from "../data";
import { GitHubIcon, ExternalIcon, CloseIcon } from "./Icons";
import useReveal from "./useReveal";

function ProjectModal({ project, onClose }) {
  // Esc dabane par band ho + background scroll lock
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <h3 className="modal__title">{project.title}</h3>
        <p className="modal__desc">{project.description}</p>

        <h4>Key Features</h4>
        <ul className="modal__list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h4>Tech Stack</h4>
        <div className="chips">
          {project.tech.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>

        <div className="modal__actions">
          {project.github && (
            <a className="btn btn--primary" href={project.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={18} /> Source Code
            </a>
          )}
          {project.live && (
            <a className="btn btn--ghost" href={project.live} target="_blank" rel="noreferrer">
              Live Demo <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section section--alt">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title"><span>04.</span> Projects</h2>
        <div className="grid grid--2">
          {projects.map((p) => (
            <button
              className="card card--project"
              key={p.id}
              onClick={() => setActive(p)}
            >
              <h3>{p.title}</h3>
              <p className="muted">{p.short}</p>
              <div className="chips">
                {p.tech.slice(0, 4).map((t) => (
                  <span className="chip chip--sm" key={t}>{t}</span>
                ))}
              </div>
              <span className="card__more">View details →</span>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

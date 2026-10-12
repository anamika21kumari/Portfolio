import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import useReveal from "./useReveal";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="section">
      <div className="container reveal contact" ref={ref}>
        <h2 className="section__title section__title--center"><span>05.</span> Get In Touch</h2>
       
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          <MailIcon size={18} /> Say Hello
        </a>
        <div className="contact__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={24} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={24} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon size={24} /></a>
        </div>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </footer>
    </section>
  );
}

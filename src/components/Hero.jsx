import { useEffect, useState } from "react";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon } from "./Icons";

// Typing effect: roles ek ek karke type aur delete hote hain
function useTyping(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? speed / 2 : speed;

    if (!deleting && text === word) delay = pause;

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI(i + 1);
      }
      setText(
        deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
      );
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <p className="hero__hello">👋 Hello, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__role">
          <span>{typed}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href={profile.resume} className="btn btn--ghost" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={22} /> <span>GitHub</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={22} /> <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

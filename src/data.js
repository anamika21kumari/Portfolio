
export const profile = {
  name: "Anamika kumari",
  roles: [
    "Java Full Stack Developer",
    "React Developer",
    "Spring Boot Learner",
  ],
  intro:
    "I am a BCA graduate with keen interest in development and problem-solving.I love Building website Using Reactjs and Spring boot ",
  github: "https://github.com/anamika21kumari",
  linkedin: "https://linkedin.com/in/anamika-kumari-902736281",
  email: "anabellaanu@gmail.com",
  resume: "#", // resume PDF ko public/ folder me rakho aur "/resume.pdf" likho
};

export const about = {
  paragraphs: [
    "Hi, I'm a BCA graduate and aspiring Full-Stack Developer passionate about building interactive, user-friendly, and practical web applications. I work with technologies like HTML, CSS, JavaScript, React.js, Java, Spring Boot, and MySQL to turn ideas into functional applications.",

"I enjoy learning new technologies, solving problems, and building projects that combine clean UI design with useful functionality. I'm continuously improving my development skills and looking for opportunities to contribute to real-world projects while growing as a developer.",
  ],
  stats: [
    
    { value: "React", label: "Frontend" },
    { value: "Spring Boot", label: "Backend" },
  ],
};

export const skills = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Database & Tools",
    items: ["MySQL", "JPA / Hibernate", "Git & GitHub", "Postman", "VS Code"],
  },
];

export const education = [
  {
    title: "BCA",
    place: "Sheat College of Engineering ,Varanasi",
    period: "2023 – 2026",
    note: "CGPA: 8.1 / 10",
  },
  {
    title: "Java Full Stack Course",
    place: "Qspiders Noida",
    period: "2026(Feb)  – Present",
    note: "Java, Spring Boot, React, MySQL",
  },
  {
    title: "Class XII",
    place: "Kendriya Vidyalaya No.1 Delhi Cantt",
    period: "2020 – 2022",
    note: "80%",
  },
   {
    title: "Class X",
    place: "Kendriya Vidyalaya No.1 Army Cantt,Jodhpur",
    period: "2019 – 2020",
    note: "90%",
  }
];

export const projects = [
  

  {
    id: "pdfqa",
    title: "PDF Summary & Q&A",
    short: "Upload pdf ,ask for summary or q&a",
    description:
      "PDF website where you can upload pdf and ask for summary or q&a. It uses PDFBox to extract text from pdf and then uses Gemini API to generate summary and answer questions.",
    features: [
      "PDF upload & text extraction (PDFBox)",
      "AI-generated summary",
      "Ask questions about the document",
      "Clean React interface",
    ],
    tech: ["React", "Spring Boot", "PDFBox", "Gemini API"],
    github: "https://github.com/anamika21kumari/pdf-qna-ai-sysytem",
    live: "http://pdf-qna-ai-sysytem.vercel.app/",
  },
  {
    id: "Ecom-website",
    title: "Ecommerce Website",
    short: "Eco-with React and spring boot",
    description:
      " Practice Project",

    tech: ["Java", "Spring Boot", "React", "MySQL", "Postman"],
    github: "https://github.com/anamika21kumari/Eco-app-frontend",
   
  },
];

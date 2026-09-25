import { FormEvent, useState } from 'react';
import {
  ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, CodeXml,
  Download, ExternalLink, FileText, Github, Linkedin, Mail, Menu, MessageSquare,
  Monitor, Send, Sparkles, Terminal, X,
} from 'lucide-react';
import './index.css';

const BASE = import.meta.env.BASE_URL;
const CONTACT_EMAIL = 'riyasingh80037@gmail.com';
const GITHUB_URL = 'https://github.com/Riya-30Singh';
const LINKEDIN_URL = 'https://www.linkedin.com/in/riya-singh-7434b1298';

type Project = {
  number: string;
  name: string;
  type: string;
  github?: string;
  description: string;
  tech: string[];
  features: string[];
  details: Record<string, string>;
};

const skillGroups = [
  { label: 'Programming', icon: Terminal, items: ['Java', 'C', 'C++'] },
  { label: 'Web development', icon: Monitor, items: ['HTML', 'CSS', 'JavaScript'] },
  { label: 'Database', icon: CodeXml, items: ['SQL', 'DBMS'] },
  { label: 'Computer science', icon: Sparkles, items: ['Data Structures', 'OOP', 'Problem Solving'] },
  { label: 'Tools', icon: BriefcaseBusiness, items: ['Git', 'GitHub', 'VS Code', 'MS Excel', 'PowerPoint', 'Word'] },
];

const projects: Project[] = [
  {
    number: '01', name: 'Smart Task Management System', type: 'Web application',
    github: 'https://github.com/Riya-30Singh/SmartTask-Management',
    description: 'A responsive task management workspace for creating, organizing, searching and tracking work by status and priority.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    features: ['Add and manage tasks', 'Priority, status and due dates', 'Search and dashboard statistics', 'Theme switching and persistence'],
    details: {
      Problem: 'Make everyday task planning easy to scan and maintain without requiring an account.',
      Approach: 'Designed a focused dashboard with clear task states, lightweight filtering and browser persistence.',
      Challenges: 'Keeping task edits, search results and dashboard counts synchronized across sessions.',
      Solution: 'Used structured task objects with LocalStorage persistence and derived dashboard values from the current collection.',
      Learning: 'Built confidence in state-driven UI, data persistence and responsive interaction design.',
    },
  },
  {
    number: '02', name: 'Quiz Master', type: 'Interactive application',
    github: 'https://github.com/Riya-30Singh/Quiz-Master',
    description: 'An interactive quiz experience with categories, difficulty levels, timed questions and a detailed result dashboard.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    features: ['Categories and difficulty selection', 'Countdown timer and navigation', 'Progress, score and accuracy', 'Answer review and theme switching'],
    details: {
      Problem: 'Create a quiz flow that feels engaging while giving learners useful feedback after each attempt.',
      Approach: 'Separated quiz setup, question flow and result states so each step stays easy to understand.',
      Challenges: 'Managing timer behavior and preserving a reliable answer history as users navigate questions.',
      Solution: 'Tracked the active question and answer state centrally, then calculated results from the completed response set.',
      Learning: 'Practiced event-driven JavaScript, edge-case handling and designing feedback around user progress.',
    },
  },
  {
    number: '03', name: 'Student Record Management System', type: 'Console application',
    description: 'A C++ console application demonstrating object-oriented programming, structured data handling and CRUD operations.',
    tech: ['C++', 'OOP', 'CRUD'],
    features: ['Add and view records', 'Search and update students', 'Delete records', 'Structured data management'],
    details: {
      Problem: 'Provide a simple, reliable way to maintain student records through a console interface.',
      Approach: 'Modeled student data and menu actions as clear operations with validation at each input point.',
      Challenges: 'Keeping record operations predictable while handling repeated menu interactions and user input.',
      Solution: 'Organized CRUD behavior around reusable functions and a consistent in-memory data structure.',
      Learning: 'Strengthened OOP fundamentals, program structure and the discipline of validating user input.',
    },
  },
  {
    number: '04', name: 'Portfolio Website', type: 'Personal site',
    description: 'A responsive personal portfolio designed to present technical skills, projects, education and professional direction.',
    tech: ['HTML', 'CSS'],
    features: ['Responsive layout', 'Project-first presentation', 'Accessible navigation', 'Recruiter-focused content'],
    details: {
      Problem: 'Turn a collection of learning milestones into a clear, credible professional identity.',
      Approach: 'Prioritized authentic project evidence, readable structure and quick paths to code and contact details.',
      Challenges: 'Balancing visual polish with honest, concise content that works across screen sizes.',
      Solution: 'Used semantic sections, a consistent visual system and modular content patterns for future updates.',
      Learning: 'Learned how information architecture and responsive design shape a professional first impression.',
    },
  },
];

const education = [
  { period: '2025 — Present', title: 'Master of Computer Applications', school: 'MCA studies', detail: 'Building deeper foundations in software development and computer science.' },
  { period: '2025', title: 'Bachelor of Computer Applications', school: 'World College of Technology and Management, MDU', detail: 'CGPA: 7.8' },
  { period: 'CBSE', title: 'Class XII', school: 'Senior secondary education', detail: '86%' },
  { period: 'CBSE', title: 'Class X', school: 'Secondary education', detail: '79%' },
];

const credentials = [
  { label: 'Internship certificate', issuer: 'InAmigos Foundation', file: 'credentials/inamigos-internship-certificate.pdf' },
  { label: 'Appreciation certificate', issuer: 'InAmigos Foundation', file: 'credentials/inamigos-appreciation-certificate.pdf' },
  { label: 'Letter of recommendation', issuer: 'InAmigos Foundation', file: 'credentials/inamigos-letter-of-recommendation.pdf' },
  { label: 'Offer letter', issuer: 'Azisly.ai Impact Sprint', file: 'credentials/azisly-offer-letter.pdf' },
  { label: 'Completion certificate', issuer: 'Azisly.ai Impact Sprint', file: 'credentials/azisly-completion-certificate.pdf' },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function PlaceholderLink({ children, slug }: { children: string; slug: string }) {
  return <button className="placeholder-link" type="button" data-testid={`placeholder-${slug}-link`} onClick={() => undefined} aria-label={`${children} link placeholder`}>
    {children} <span>Replace link</span>
  </button>;
}

function SocialLinks({ location }: { location: 'hero' | 'contact' }) {
  return (
    <>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer" data-testid={`${location}-github-link`} aria-label="Open GitHub">
        <Github size={location === 'hero' ? 14 : 17} />{location === 'contact' ? <span><small>GitHub</small>Riya-30Singh</span> : ' GitHub'}
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" data-testid={`${location}-linkedin-link`} aria-label="Open LinkedIn">
        <Linkedin size={location === 'hero' ? 14 : 17} />{location === 'contact' ? <span><small>LinkedIn</small>Riya Singh</span> : ' LinkedIn'}
      </a>
    </>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="project-card" data-testid={`card-project-${project.number}`}>
      <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      <button className="feature-toggle" type="button" data-testid={`button-features-${project.number}`} onClick={() => setExpanded(!expanded)}>
        <span>{expanded ? 'Hide features' : 'Key features'}</span><ChevronDown size={15} className={expanded ? 'rotated' : ''} />
      </button>
      {expanded && <ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul>}
      <div className="project-actions">
        <button className="text-button" type="button" data-testid={`button-case-study-${project.number}`} onClick={() => onOpen(project)}>View case study <ArrowUpRight size={13} /></button>
        {project.github ? <a className="text-button" href={project.github} target="_blank" rel="noreferrer" data-testid={`link-project-github-${project.number}`}>GitHub <ExternalLink size={12} /></a> : <PlaceholderLink slug={`project-${project.number}-github`}>GitHub</PlaceholderLink>}
        <PlaceholderLink slug={`project-${project.number}-demo`}>Live demo</PlaceholderLink>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" data-testid="button-close-case-study" aria-label="Close case study" onClick={onClose}><X size={20} /></button>
        <span className="eyebrow">Case study · {project.number}</span>
        <h2 id="case-study-title">{project.name}</h2>
        <p className="modal-intro">{project.description}</p>
        <div className="case-grid">{Object.entries(project.details).map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}</div>
        <div className="project-actions" style={{ marginTop: 26 }}>
          {project.github ? <a className="text-button" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={12} /></a> : <PlaceholderLink slug={`modal-${project.number}-github`}>GitHub</PlaceholderLink>}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [sent, setSent] = useState(false);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${String(data.get('name') || '')}`;
    const body = `${String(data.get('message') || '')}\n\nReply to: ${String(data.get('email') || '')}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const nav = ['about', 'skills', 'projects', 'education', 'experience', 'contact'];
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" data-testid="link-brand"><span className="brand-mark">RS</span><span>Riya Singh</span></a>
        <button className="menu-button" type="button" data-testid="button-mobile-menu" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
          {nav.map((item) => <a href={`#${item}`} key={item} data-testid={`link-nav-${item}`} onClick={() => setMobileOpen(false)}>{item}</a>)}
          <a className="nav-icon" href={GITHUB_URL} target="_blank" rel="noreferrer" data-testid="link-nav-github" aria-label="GitHub"><Github size={14} /></a>
          <a className="nav-icon" href={LINKEDIN_URL} target="_blank" rel="noreferrer" data-testid="link-nav-linkedin" aria-label="LinkedIn"><Linkedin size={14} /></a>
          <a className="nav-resume" href={`${BASE}resume.pdf`} target="_blank" rel="noreferrer" data-testid="link-nav-resume">Resume <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div>
            <div className="availability"><span />Open to software development opportunities</div>
            <div className="hero-kicker">MCA student · aspiring software developer</div>
            <h1 id="hero-title">Hi, I’m <em>Riya</em><br />Singh.</h1>
            <p className="hero-lede">Building practical solutions with Java, SQL, JavaScript and modern web technologies.</p>
            <p className="hero-intro">I enjoy solving problems, learning continuously and turning ideas into functional software that is clear, useful and thoughtfully built.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects" data-testid="link-hero-projects">View my projects <ArrowUpRight size={14} /></a>
              <a className="secondary-button" href={`${BASE}resume.pdf`} target="_blank" rel="noreferrer" data-testid="link-hero-resume"><Download size={14} />Download resume</a>
            </div>
            <div className="social-row"><SocialLinks location="hero" /><a href={`mailto:${CONTACT_EMAIL}`} data-testid="link-hero-email"><Mail size={14} /> Email</a></div>
          </div>
          <div className="hero-visual" aria-label="Code illustration">
            <div className="visual-grid" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>riya.java</small></div>
              <pre><i>class</i> Riya {'{'}{'\n'}  <b>String</b> focus = <mark>"build"</mark>;{'\n'}  <b>String</b> stack = <mark>"learn"</mark>;{'\n\n'}  <i>void</i> createImpact() {'{'}{'\n'}    solveProblems();{'\n'}    shipProjects();{'\n'}  {'}'}{'\n'}{'}'}</pre>
            </div>
            <div className="visual-caption"><span>01 / 04</span><span>Turning curiosity into code</span></div>
          </div>
        </section>

        <section className="content-section section-pad" id="about">
          <span className="section-index">01</span>
          <SectionHeading eyebrow="A little about me" title="Foundations first. Curiosity always." description="A grounded start in software development, with room to keep growing." />
          <div className="about-grid">
            <div className="about-copy">
              <p>I’m an MCA student with a BCA background, developing strong foundations in Java, SQL, Data Structures, OOP and DBMS. I’m especially interested in understanding how software works beneath the interface and how thoughtful engineering can make everyday tasks simpler.</p>
              <p>Through practical projects and continuous learning, I’m building the habits that matter: breaking problems down, writing maintainable code, testing ideas and improving with every iteration.</p>
            </div>
            <div className="snapshot">
              <div className="snapshot-title">Quick snapshot <span /></div>
              {[['Education', 'MCA · 2025–Present'], ['Primary language', 'Java'], ['Database', 'SQL'], ['Frontend', 'HTML · CSS · JavaScript'], ['Version control', 'Git & GitHub'], ['Career level', 'Fresher']].map(([label, value]) => <div className="snapshot-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="content-section skills-section section-pad" id="skills">
          <span className="section-index">02</span>
          <SectionHeading eyebrow="Technical toolkit" title="Tools for the work ahead." description="An honest, growing toolkit built around strong fundamentals." />
          <div className="skills-grid">{skillGroups.map(({ label, icon: Icon, items }) => <article className="skill-card" key={label}><Icon size={19} className="skill-icon" /><h3>{label}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="content-section section-pad" id="projects">
          <span className="section-index">03</span>
          <SectionHeading eyebrow="Selected work" title="Proof, not promises." description="The projects where I’ve practiced turning requirements into working experiences." />
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} onOpen={setActiveProject} />)}</div>
          <div className="github-banner section-pad">
            <div><span className="eyebrow">Open source trail</span><h2>Code. Learn. Build. Repeat.</h2><p>See the repositories behind my learning journey and ongoing experiments.</p></div>
            <a className="primary-button" href={GITHUB_URL} target="_blank" rel="noreferrer" data-testid="link-github-banner">Visit GitHub <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="content-section section-pad" id="education">
          <span className="section-index">04</span>
          <SectionHeading eyebrow="Education" title="Learning in motion." description="The academic path behind the practical work." />
          <div className="timeline">{education.map((item, index) => <div className="timeline-item" key={`${item.title}-${item.period}`}><span className="timeline-marker">0{index + 1}</span><span className="timeline-date">{item.period}</span><div><h3>{item.title}</h3><p>{item.school}</p><strong>{item.detail}</strong></div></div>)}</div>
        </section>

        <section className="content-section section-pad" id="experience">
          <span className="section-index">05</span>
          <div className="experience-card">
            <SectionHeading eyebrow="Internship / Experience" title="Learning by making." description="Practical exposure through live project training, web development and project-led learning." />
            <div className="exposure-list">
              <article className="internship-entry">
                <div className="experience-entry-heading">
                  <span>01</span>
                  <div>
                    <h3>InAmigos Foundation × Azisly.ai</h3>
                    <p className="experience-meta">Intern · 15 days live project training</p>
                  </div>
                </div>
                <p><b>Work</b><br />Contributed to web development and an NGO awareness website, with a focus on clear content, useful page structure and a responsive experience.</p>
                <div className="experience-skills">
                  <span>HTML</span><span>CSS</span><span>Responsive design</span><span>UI improvement</span>
                </div>
                <div className="credential-list">
                  <div className="credential-heading"><span>Credentials</span><p>Certificates, recommendation and offer documents</p></div>
                  <div className="credential-actions">
                    {credentials.map((credential) => (
                      <a className="credential-button" href={`${BASE}${credential.file}`} target="_blank" rel="noreferrer" key={credential.file} data-testid={`link-credential-${credential.label.toLowerCase().replaceAll(' ', '-')}`}>
                        <FileText size={13} /><span><b>{credential.label}</b><small>{credential.issuer}</small></span><ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
              <div><span>02</span><p><b>Independent project work</b><br />Built responsive web and console applications while strengthening problem solving and implementation habits.</p></div>
              <div><span>03</span><p><b>Continuous learning</b><br />Exploring Java, databases, data structures and the practices that make software dependable.</p></div>
              <div className="editable-note"><FileText size={13} />This section is ready to grow with the next opportunity.</div>
            </div>
          </div>
        </section>

        <section className="content-section section-pad" id="contact">
          <span className="section-index">06</span>
          <div className="contact-grid">
            <div>
              <SectionHeading eyebrow="Let’s build something" title="A conversation could be the start of something useful." description="I’m currently open to entry-level software development opportunities, internships and projects where I can learn, contribute and grow." />
              <div className="contact-details">
                <a href={`mailto:${CONTACT_EMAIL}`} data-testid="contact-email-link"><Mail size={17} /><span><small>Email</small>{CONTACT_EMAIL}</span></a>
                <SocialLinks location="contact" />
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact} data-testid="contact-form">
              <div className="form-heading"><MessageSquare size={15} />Send a note</div>
              <label>Name<input name="name" placeholder="Your name" required data-testid="contact-name-input" /></label>
              <label>Email<input name="email" type="email" placeholder="you@example.com" required data-testid="contact-email-input" /></label>
              <label>Message<textarea name="message" placeholder="Tell me a little about the opportunity..." required data-testid="contact-message-input" /></label>
              <button className="primary-button" type="submit" data-testid="contact-submit-button"><Send size={14} />Send message</button>
              {sent && <p className="form-note" data-testid="contact-form-note">Your email app should open with the message ready to send.</p>}
            </form>
          </div>
        </section>

        <section className="resume-cta section-pad">
          <h2>Keep the conversation going.<br />Want to know more about my experience?</h2>
          <div className="resume-actions"><a className="secondary-button" href={`${BASE}resume.pdf`} target="_blank" rel="noreferrer" data-testid="link-resume-cta"><FileText size={14} />Resume <ArrowUpRight size={13} /></a><a className="primary-button" href={`mailto:${CONTACT_EMAIL}`} data-testid="link-contact-cta">Get in touch <ArrowUpRight size={14} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2025 Riya Singh</span><span>Designed with intention · Built for the next opportunity</span><a href="#top" data-testid="link-back-to-top">Back to top ↑</a></footer>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}

export default App;
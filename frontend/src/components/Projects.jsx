import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work and learning projects.</p>
        <div className="grid project-grid">
          {projects.map((project) => (
            <article key={project.id} className="card project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-tags">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

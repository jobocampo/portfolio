import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real-world data science and spatial analysis work.
        </p>
        <div className="grid project-grid">
          {projects.map((project) => (
            <article key={project.id} className="card project-card">
              {project.image && (
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-image-overlay" />
                </div>
              )}
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-tags">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

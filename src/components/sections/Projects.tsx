import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types/portfolio.types';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, ShieldCheck, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import './Projects.scss';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Featured Projects">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Selected Work"
          title="Engineered for real users, high concurrency, and measurable impact."
          description="A selection of high-impact engineering projects across consumer travel platforms, enterprise incident systems, and real-time mapping."
        />

        <div className="projects-section__grid">
          {projectsData.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="project-card__top">
                <div className="project-card__meta">
                  <span className="project-card__index">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="project-card__domain">{project.domain}</span>
                </div>

                <div className="project-card__badges">
                  {project.badge && (
                    <Badge variant="accent" size="sm" icon={<Sparkles size={13} />}>
                      {project.badge}
                    </Badge>
                  )}
                  {project.confidentialityNote && (
                    <span
                      className="project-card__nda-pill"
                      title="Under NDA — sensitive client identifiers and endpoints protected"
                    >
                      <ShieldCheck size={13} aria-hidden="true" />
                      <span>Client NDA Protected</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">
                  <button
                    type="button"
                    className="project-card__title-btn"
                    onClick={() => setActiveProject(project)}
                  >
                    {project.title}
                  </button>
                </h3>

                <p className="project-card__desc">{project.shortDescription}</p>

                {/* Problem vs Solution Split Box */}
                <div className="project-card__breakdown">
                  <div className="project-card__breakdown-col">
                    <span className="project-card__col-label">The Problem</span>
                    <p className="project-card__col-text">{project.problemStatement}</p>
                  </div>
                  <div className="project-card__breakdown-col">
                    <span className="project-card__col-label">Technical Solution</span>
                    <p className="project-card__col-text">{project.solution}</p>
                  </div>
                </div>

                {/* Verified Impact Bullets */}
                {project.impactMetrics.length > 0 && (
                  <div className="project-card__metrics-box">
                    <span className="project-card__metrics-title">Verified Production Impact:</span>
                    <ul className="project-card__metrics-list">
                      {project.impactMetrics.map((metric, mIdx) => (
                        <li key={mIdx} className="project-card__metric-item">
                          <CheckCircle2 size={15} className="project-card__metric-icon" aria-hidden="true" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="project-card__tech" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="project-card__footer">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveProject(project)}
                  icon={<Layers size={15} />}
                >
                  Architecture Breakdown
                </Button>

                {project.liveUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    href={project.liveUrl}
                    icon={<ArrowUpRight size={15} />}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit App
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

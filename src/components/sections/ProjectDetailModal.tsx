import React, { useEffect } from 'react';
import type { ProjectItem } from '../../types/portfolio.types';
import { Badge } from '../common/Badge';
import { X, ShieldCheck, CheckCircle2, ExternalLink, Layers, Cpu, Award } from 'lucide-react';
import './ProjectDetailModal.scss';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="project-modal__backdrop" onClick={onClose} />

      <div className="project-modal__content">
        <div className="project-modal__header">
          <div className="project-modal__meta">
            <span className="project-modal__domain">{project.domain}</span>
            {project.badge && (
              <Badge variant="accent" size="sm">
                {project.badge}
              </Badge>
            )}
          </div>

          <button
            type="button"
            className="project-modal__close-btn"
            onClick={onClose}
            aria-label="Close project details modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="project-modal__body">
          <h2 id="modal-title" className="project-modal__title">
            {project.title}
          </h2>

          <div className="project-modal__role-tag">
            <span>{project.role}</span>
            {project.period && <span className="project-modal__period">· {project.period}</span>}
          </div>

          {/* Confidentiality Notice if applicable */}
          {project.confidentialityNote && (
            <div className="project-modal__notice" role="note">
              <ShieldCheck size={18} className="project-modal__notice-icon" aria-hidden="true" />
              <p>{project.confidentialityNote}</p>
            </div>
          )}

          {/* Problem Statement */}
          <div className="project-modal__section">
            <h3 className="project-modal__section-title">
              <Layers size={18} aria-hidden="true" />
              The Challenge &amp; Problem Statement
            </h3>
            <p className="project-modal__section-text">{project.problemStatement}</p>
          </div>

          {/* Solution & Engineering Architecture */}
          <div className="project-modal__section">
            <h3 className="project-modal__section-title">
              <Cpu size={18} aria-hidden="true" />
              Solution &amp; Technical Architecture
            </h3>
            <p className="project-modal__section-text">{project.solution}</p>
          </div>

          {/* Key Contributions */}
          <div className="project-modal__section">
            <h3 className="project-modal__section-title">
              <CheckCircle2 size={18} aria-hidden="true" />
              Key Engineering Contributions
            </h3>
            <ul className="project-modal__list">
              {project.keyContributions.map((item, idx) => (
                <li key={idx} className="project-modal__list-item">
                  <CheckCircle2 size={16} className="project-modal__bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Verified Impact */}
          {project.impactMetrics.length > 0 && (
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">
                <Award size={18} aria-hidden="true" />
                Measurable Production Impact
              </h3>
              <div className="project-modal__metrics-list">
                {project.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="project-modal__metric-item">
                    <span className="project-modal__metric-dot" aria-hidden="true" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="project-modal__section">
            <h3 className="project-modal__section-title">Technologies &amp; Tools</h3>
            <div className="project-modal__tags">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* External links if available */}
          {project.liveUrl && (
            <div className="project-modal__actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal__external-btn"
              >
                <span>Visit Application</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

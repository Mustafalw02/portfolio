import React, { useEffect } from 'react';
import { personalInfo } from '../../config/portfolio';
import { experienceData } from '../../data/experience';
import { skillsData } from '../../data/skills';
import { educationData } from '../../data/education';
import { LinkedinIcon } from '../common/SocialIcons';
import { X, Printer, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import './ResumeModal.scss';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="resume-modal__backdrop" onClick={onClose} />

      <div className="resume-modal__container">
        {/* Top Control Bar */}
        <div className="resume-modal__toolbar">
          <span className="resume-modal__status-tag">Verified Resume View</span>

          <div className="resume-modal__actions">
            <button
              type="button"
              className="resume-modal__btn"
              onClick={handlePrint}
              aria-label="Print resume document"
            >
              <Printer size={16} aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              className="resume-modal__close-btn"
              onClick={onClose}
              aria-label="Close resume view"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Paper Document */}
        <div className="resume-doc" id="printable-resume">
          {/* Header */}
          <header className="resume-doc__header">
            <h1 id="resume-title" className="resume-doc__name">
              {personalInfo.name}
            </h1>
            <p className="resume-doc__headline">
              Frontend Engineer | React · TypeScript · Performance &amp; Accessibility
            </p>

            <div className="resume-doc__meta">
              <span className="resume-doc__meta-item">
                <MapPin size={13} aria-hidden="true" />
                {personalInfo.location}
              </span>
              <span className="resume-doc__separator">•</span>
              <a href={`mailto:${personalInfo.email}`} className="resume-doc__meta-link">
                <Mail size={13} aria-hidden="true" />
                {personalInfo.email}
              </a>
              {personalInfo.phone && (
                <>
                  <span className="resume-doc__separator">•</span>
                  <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`} className="resume-doc__meta-link">
                    <Phone size={13} aria-hidden="true" />
                    {personalInfo.phone}
                  </a>
                </>
              )}
              <span className="resume-doc__separator">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-doc__meta-link"
              >
                <LinkedinIcon size={13} aria-hidden="true" />
                linkedin.com/in/mustafa-lightwala
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__section-title">Professional Summary</h2>
            <p className="resume-doc__summary-text">{personalInfo.summary}</p>
          </section>

          {/* Technical Skills */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__section-title">Technical Skills</h2>
            <div className="resume-doc__skills-grid">
              {skillsData.map((category) => (
                <div key={category.title} className="resume-doc__skill-row">
                  <span className="resume-doc__skill-cat">{category.title}:</span>
                  <span className="resume-doc__skill-items">
                    {category.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__section-title">Professional Experience</h2>
            <div className="resume-doc__experience-list">
              {experienceData.map((exp) => (
                <article key={exp.id} className="resume-doc__job">
                  <div className="resume-doc__job-header">
                    <div>
                      <h3 className="resume-doc__company-name">{exp.company}</h3>
                      <span className="resume-doc__location">{exp.location}</span>
                    </div>
                    <span className="resume-doc__job-period">{exp.period}</span>
                  </div>

                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} className="resume-doc__role">
                      <div className="resume-doc__role-title-row">
                        <h4 className="resume-doc__role-title">{role.title}</h4>
                        <span className="resume-doc__role-period">{role.period}</span>
                      </div>

                      <ul className="resume-doc__bullets">
                        {role.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="resume-doc__bullet-item">
                            <CheckCircle2 size={13} className="resume-doc__bullet-icon" aria-hidden="true" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-doc__section">
            <h2 className="resume-doc__section-title">Education</h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="resume-doc__edu-row">
                <div>
                  <h3 className="resume-doc__edu-degree">{edu.degree} — {edu.field}</h3>
                  <span className="resume-doc__edu-inst">{edu.institution}, {edu.location}</span>
                </div>
                <span className="resume-doc__edu-period">{edu.period}</span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

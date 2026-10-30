import React, { useState } from 'react';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import './Experience.scss';

export const Experience: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(experienceData[0].id);

  const activeExp = experienceData.find((exp) => exp.id === selectedCompanyId) || experienceData[0];

  return (
    <section id="experience" className="section-wrapper section-wrapper--alt experience-section" aria-label="Professional Experience">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Career Journey"
          title="5+ years of delivering high-impact frontend architecture."
          description="A timeline of engineering roles across enterprise modernization, consumer travel, and cognitive automation platforms."
        />

        <div className="experience-section__layout">
          {/* Company Selector Tab List */}
          <div
            className="experience-section__tabs"
            role="tablist"
            aria-label="Companies and employment history"
          >
            {experienceData.map((exp) => {
              const isSelected = exp.id === selectedCompanyId;
              return (
                <button
                  key={exp.id}
                  id={`tab-${exp.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${exp.id}`}
                  className={`experience-section__tab ${
                    isSelected ? 'experience-section__tab--active' : ''
                  }`}
                  onClick={() => setSelectedCompanyId(exp.id)}
                >
                  <div className="experience-section__tab-content">
                    <span className="experience-section__tab-company">{exp.company}</span>
                    <span className="experience-section__tab-period">{exp.period}</span>
                  </div>
                  {exp.isCurrent && (
                    <span className="experience-section__tab-badge">Current</span>
                  )}
                  <ChevronRight size={16} className="experience-section__tab-arrow" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Active Company Detail Panel */}
          <div
            id={`panel-${activeExp.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeExp.id}`}
            className="experience-section__panel"
          >
            <div className="experience-section__panel-header">
              <div className="experience-section__header-main">
                <div className="experience-section__company-title">
                  <Briefcase size={22} className="experience-section__icon" aria-hidden="true" />
                  <h3 className="experience-section__company-name">{activeExp.company}</h3>
                  {activeExp.isCurrent && (
                    <Badge variant="success" size="sm">
                      Current Role
                    </Badge>
                  )}
                </div>

                <div className="experience-section__meta">
                  <span className="experience-section__meta-item">
                    <Calendar size={15} aria-hidden="true" />
                    {activeExp.period}
                  </span>
                  <span className="experience-section__meta-item">
                    <MapPin size={15} aria-hidden="true" />
                    {activeExp.location}
                  </span>
                </div>
              </div>

              <p className="experience-section__summary">{activeExp.summary}</p>
            </div>

            {/* Roles within this company */}
            <div className="experience-section__roles">
              {activeExp.roles.map((role, rIdx) => (
                <div key={rIdx} className="experience-section__role-card">
                  <div className="experience-section__role-header">
                    <h4 className="experience-section__role-title">{role.title}</h4>
                    <span className="experience-section__role-period">{role.period}</span>
                  </div>

                  <ul className="experience-section__highlights" aria-label="Key contributions">
                    {role.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="experience-section__highlight-item">
                        <CheckCircle2 size={16} className="experience-section__bullet" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technologies used in this tenure */}
            <div className="experience-section__tech">
              <span className="experience-section__tech-label">Technologies &amp; Practices:</span>
              <div className="experience-section__tech-tags">
                {activeExp.technologies.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

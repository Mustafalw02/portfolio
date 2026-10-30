import React, { useState } from 'react';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Star, CheckCircle } from 'lucide-react';
import './Skills.scss';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | 'all'>('all');

  const filteredCategories =
    activeCategoryIndex === 'all'
      ? skillsData
      : [skillsData[activeCategoryIndex]];

  return (
    <section id="skills" className="section-wrapper section-wrapper--alt skills-section" aria-label="Technical Skills and Tooling">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Technical Stack"
          title="Curated technical strengths grounded in production systems."
          description="Technologies and engineering disciplines verified through real-world implementation, structured by domain and practical depth."
        />

        {/* Category Filter Pills */}
        <div className="skills-section__filter-bar" role="tablist" aria-label="Skill categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryIndex === 'all'}
            className={`skills-section__filter-btn ${
              activeCategoryIndex === 'all' ? 'skills-section__filter-btn--active' : ''
            }`}
            onClick={() => setActiveCategoryIndex('all')}
          >
            All Disciplines
          </button>
          {skillsData.map((category, idx) => (
            <button
              key={category.title}
              type="button"
              role="tab"
              aria-selected={activeCategoryIndex === idx}
              className={`skills-section__filter-btn ${
                activeCategoryIndex === idx ? 'skills-section__filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategoryIndex(idx)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Legend for Depth Level */}
        <div className="skills-section__legend">
          <div className="skills-section__legend-item">
            <span className="skills-section__legend-bullet skills-section__legend-bullet--core" />
            <span><strong>Core Expertise:</strong> Primary toolset in daily production architecture</span>
          </div>
          <div className="skills-section__legend-item">
            <span className="skills-section__legend-bullet skills-section__legend-bullet--advanced" />
            <span><strong>Advanced:</strong> Production-level proficiency and optimization</span>
          </div>
          <div className="skills-section__legend-item">
            <span className="skills-section__legend-bullet skills-section__legend-bullet--working" />
            <span><strong>Working Knowledge:</strong> Applied in cross-functional or migration projects</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="skills-section__grid">
          {filteredCategories.map((cat) => (
            <div key={cat.title} className="skills-card">
              <div className="skills-card__header">
                <h3 className="skills-card__title">{cat.title}</h3>
                <p className="skills-card__description">{cat.description}</p>
              </div>

              <div className="skills-card__list">
                {cat.skills.map((skill) => {
                  const isCore = skill.level === 'Core';
                  const isAdvanced = skill.level === 'Advanced';

                  return (
                    <div
                      key={skill.name}
                      className={`skill-item skill-item--${skill.level.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="skill-item__header">
                        <span className="skill-item__name">
                          {isCore && <Star size={13} className="skill-item__icon skill-item__icon--core" aria-hidden="true" />}
                          {isAdvanced && <CheckCircle size={13} className="skill-item__icon skill-item__icon--advanced" aria-hidden="true" />}
                          {skill.name}
                        </span>

                        <Badge
                          variant={isCore ? 'accent' : isAdvanced ? 'default' : 'outline'}
                          size="sm"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

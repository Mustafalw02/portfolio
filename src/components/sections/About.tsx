import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Zap, Eye, Layers, LineChart, Code2, GraduationCap } from 'lucide-react';
import { educationData } from '../../data/education';
import './About.scss';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Mustafa Lightwala">
      <div className="container">
        <SectionHeading
          eyebrow="01 / Background"
          title="Engineering resilient frontend systems with measurable business outcomes."
          description="A look into my engineering philosophy, technical specializations, and how I approach complex web applications."
        />

        <div className="about-section__grid">
          {/* Main Narrative */}
          <div className="about-section__bio">
            <p className="about-section__lead">
              I am a Frontend Engineer with over 5 years of production experience crafting accessible,
              high-performance web applications across enterprise and consumer domains. My work centers on
              React and TypeScript, with deep specialization in performance profiling, Core Web Vitals, and
              WCAG accessibility compliance.
            </p>
            <p>
              Throughout my career at EPAM Systems, Globant, and Infosys, I have engineered flight booking flows
              serving high-volume consumer traffic, enterprise ticketing PWAs with real-time vendor collaboration,
              and machine learning-assisted document processing dashboards. Rather than treating frontend as purely
              visual markup, I architect interfaces around disciplined state boundaries, memoized selectors, and
              reusable component libraries.
            </p>
            <p>
              I believe great frontend engineering happens at the intersection of UX craftsmanship and rigorous data.
              Whether instrumenting Adobe Analytics to discover where users hesitate or running controlled Split.io
              A/B rollouts, my decisions are grounded in real user feedback and verifiable outcomes.
            </p>

            {/* Verified Education Block */}
            <div className="about-section__education">
              <div className="about-section__edu-header">
                <GraduationCap size={18} aria-hidden="true" />
                <span>Education</span>
              </div>
              {educationData.map((edu, idx) => (
                <div key={idx} className="about-section__edu-item">
                  <div className="about-section__edu-main">
                    <h3 className="about-section__edu-degree">{edu.degree}</h3>
                    <p className="about-section__edu-field">{edu.field}</p>
                    <p className="about-section__edu-inst">{edu.institution} · {edu.location}</p>
                  </div>
                  <span className="about-section__edu-period">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Architectural Pillars */}
          <div className="about-section__pillars">
            <h3 className="about-section__pillars-title">
              <Code2 size={20} aria-hidden="true" />
              Core Engineering Pillars
            </h3>

            <div className="about-section__cards">
              <Card padding="md" className="about-section__pillar-card">
                <div className="about-section__pillar-icon">
                  <Zap size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="about-section__pillar-heading">Performance by Default</h4>
                  <p className="about-section__pillar-desc">
                    Disciplined state normalization, surgical re-render pruning, and continuous Core Web Vitals optimization
                    to ensure interfaces respond instantly.
                  </p>
                </div>
              </Card>

              <Card padding="md" className="about-section__pillar-card">
                <div className="about-section__pillar-icon">
                  <Eye size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="about-section__pillar-heading">Universal Accessibility (WCAG 2.1/2.2)</h4>
                  <p className="about-section__pillar-desc">
                    Accessibility is foundational, not an afterthought. Semantic landmarks, ARIA synchronization,
                    focus trapping, and strict keyboard navigability.
                  </p>
                </div>
              </Card>

              <Card padding="md" className="about-section__pillar-card">
                <div className="about-section__pillar-icon">
                  <Layers size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="about-section__pillar-heading">Scalable Design Systems</h4>
                  <p className="about-section__pillar-desc">
                    Authoring modular React and tokenized SCSS component suites that accelerate feature turnaround
                    while upholding visual and structural consistency.
                  </p>
                </div>
              </Card>

              <Card padding="md" className="about-section__pillar-card">
                <div className="about-section__pillar-icon">
                  <LineChart size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="about-section__pillar-heading">Data &amp; Hypothesis Driven</h4>
                  <p className="about-section__pillar-desc">
                    Pairing user analytics (Adobe Analytics) with feature flag experimentation (Split.io) to validate UX
                    refinements before full production deployment.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

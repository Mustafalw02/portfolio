import React from 'react';
import { personalInfo, verifiedMetrics } from '../../config/portfolio';
import { Button } from '../common/Button';
import { ArrowDown, Mail, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import './Hero.scss';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-section__inner">
        {/* Availability / Location Top Pill */}
        <div className="hero-section__badge-row">
          <div className="hero-section__status-pill" role="status">
            <span className="hero-section__status-dot" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </div>

          <div className="hero-section__location-pill">
            <MapPin size={14} aria-hidden="true" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Editorial Headline Lockup */}
        <div className="hero-section__content">
          <span className="hero-section__salutation">Senior Frontend Engineer</span>
          <h1 className="hero-section__title">
            Mustafa Lightwala
          </h1>
          <p className="hero-section__lead">
            Building accessible, high-performance web applications through rigorous React architecture,
            render optimization, and data-informed frontend engineering.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero-section__actions">
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            onClick={scrollToProjects}
            icon={<ArrowDown size={18} />}
          >
            Explore Featured Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="#contact"
            onClick={scrollToContact}
            icon={<Mail size={18} />}
          >
            Get in Touch
          </Button>

          {onOpenResumeModal && (
            <Button
              variant="subtle"
              size="lg"
              onClick={onOpenResumeModal}
              icon={<ArrowUpRight size={18} />}
            >
              View Full Resume
            </Button>
          )}
        </div>

        {/* Verified Real Metric Highlights Row */}
        <div className="hero-section__metrics">
          <div className="hero-section__metrics-header">
            <Sparkles size={16} aria-hidden="true" />
            <span>Verified Engineering Impact from Production Roles</span>
          </div>

          <div className="hero-section__metrics-grid">
            {verifiedMetrics.map((metric, idx) => (
              <div key={idx} className="hero-section__metric-card">
                <span className="hero-section__metric-value">{metric.value}</span>
                <span className="hero-section__metric-label">{metric.label}</span>
                <p className="hero-section__metric-detail">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

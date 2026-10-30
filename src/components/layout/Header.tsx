import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../config/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import avatarImg from '../../assets/avatar.jpg';
import './Header.scss';

interface HeaderProps {
  onOpenResumeModal?: () => void;
}

const navLinks = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'experience', 'projects', 'skills', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <a href="#hero" className="site-header__brand" aria-label={`${personalInfo.name} - Home`}>
            <img
              src={avatarImg}
              alt={personalInfo.name}
              className="site-header__avatar"
              width={40}
              height={40}
              loading="eager"
            />
            <div className="site-header__brand-text">
              <span className="site-header__name">{personalInfo.name}</span>
              <span className="site-header__role">{personalInfo.role}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="site-header__nav" aria-label="Primary Navigation">
            <ul className="site-header__menu">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="site-header__menu-item">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`site-header__link ${isActive ? 'site-header__link--active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="site-header__actions">
            {onOpenResumeModal && (
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="site-header__resume-btn"
                aria-label="View Resume Details"
              >
                Resume
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            )}

            <a href="#contact" className="site-header__contact-btn">
              Connect
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="site-header__toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav__backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav__panel">
          <div className="mobile-nav__header">
            <div className="mobile-nav__brand">
              <img
                src={avatarImg}
                alt={personalInfo.name}
                className="site-header__avatar"
                width={38}
                height={38}
              />
              <span className="mobile-nav__name">{personalInfo.name}</span>
            </div>
            <button
              type="button"
              className="mobile-nav__close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav__list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="mobile-nav__item">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-nav__footer">
            {onOpenResumeModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="mobile-nav__resume-btn"
              >
                View Full Resume
                <ArrowUpRight size={16} />
              </button>
            )}
            <div className="mobile-nav__contact-info">
              <p className="mobile-nav__location">{personalInfo.location}</p>
              <a href={`mailto:${personalInfo.email}`} className="mobile-nav__email">
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

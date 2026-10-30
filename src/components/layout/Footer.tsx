import React from 'react';
import { personalInfo } from '../../config/portfolio';
import { LinkedinIcon } from '../common/SocialIcons';
import { Mail, ArrowUp } from 'lucide-react';
import avatarImg from '../../assets/avatar.jpg';
import './Footer.scss';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <img
              src={avatarImg}
              alt={personalInfo.name}
              className="site-footer__avatar"
              width={38}
              height={38}
            />
            <div>
              <p className="site-footer__name">{personalInfo.name}</p>
              <p className="site-footer__tagline">{personalInfo.role} · Pune, India</p>
            </div>
          </div>

          <div className="site-footer__links">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__link"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="site-footer__link"
              aria-label={`Email ${personalInfo.name}`}
            >
              <Mail size={18} aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {CURRENT_YEAR} {personalInfo.name}. Designed &amp; engineered with React &amp; TypeScript.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="site-footer__top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

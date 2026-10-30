import React from 'react';
import './Button.scss';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  ariaLabel?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
  className = '',
  ariaLabel,
  download,
  target,
  rel,
}) => {
  const combinedClass = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn__icon btn__icon--left">{icon}</span>}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon btn__icon--right">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        aria-label={ariaLabel}
        download={download}
        target={target || (isExternal && !href.startsWith('mailto:') ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

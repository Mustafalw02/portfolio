import React from 'react';
import './Badge.scss';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'neutral' | 'success' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
}) => {
  return (
    <span className={`badge badge--${variant} badge--${size}`}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__label">{children}</span>
    </span>
  );
};

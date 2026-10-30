import React from 'react';
import './Card.scss';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'section';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
  as: Component = 'div',
  onClick,
}) => {
  const classes = [
    'custom-card',
    `custom-card--padding-${padding}`,
    hoverable ? 'custom-card--hoverable' : '',
    onClick ? 'custom-card--clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} onClick={onClick}>
      {children}
    </Component>
  );
};

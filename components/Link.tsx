
import React from 'react';
import { useNavigation } from '../NavigationContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children, onClick, target, ...props }) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If target is _blank, we let the default browser behavior handle it
    if (target === '_blank') {
      return;
    }

    if (onClick) {
      onClick(e);
    }
    
    // Check for internal relative links
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith('#')) {
      const currentPath = window.location.pathname;
      if (currentPath === '/') {
        // Just let the default browser behavior scroll
      } else {
        e.preventDefault();
        navigate('/');
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} target={target} {...props}>
      {children}
    </a>
  );
};

export default Link;

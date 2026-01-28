
import React from 'react';
import { useNavigation } from '../NavigationContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    // Check for internal relative links
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith('#')) {
      // For hash links, check if we are on the home page
      const currentPath = window.location.pathname;
      if (currentPath === '/') {
        // Just let the default browser behavior scroll
      } else {
        // Navigate home first then scroll? 
        // Simpler for this implementation: navigate to '/'
        e.preventDefault();
        navigate('/');
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;

import React from 'react';
import { ServiceItem, NavItem } from './types';

// Icons using SVG directly
export const Icons = {
  Chart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Clipboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  Truck: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Message: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Mic: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  ),
  Video: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Play: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Desktop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Smartphone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#studio' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Program Management',
    description: 'Expert oversight and strategic planning to ensure your projects are delivered on time, within scope, and within budget.',
    icon: <Icons.Chart />,
  },
  {
    id: 's2',
    title: 'Administrative Support',
    description: 'Comprehensive office solutions including records management, scheduling, data entry, and executive assistance.',
    icon: <Icons.Clipboard />,
  },
  {
    id: 's3',
    title: 'Human Resources',
    description: 'Strategic HR consulting, talent acquisition, employee relations, and compliance management for a high-performing workforce.',
    icon: <Icons.Users />,
  },
  {
    id: 's4',
    title: 'Logistics & Supply Chain',
    description: 'Efficient management of the flow of goods and services, ensuring optimal performance and cost-effectiveness.',
    icon: <Icons.Truck />,
  },
  {
    id: 's5',
    title: 'Business Consulting',
    description: 'Tailored advice and strategies to help businesses improve performance, scale operations, and overcome challenges.',
    icon: <Icons.Briefcase />,
  },
  {
    id: 's6',
    title: 'Security & Compliance',
    description: 'Ensuring your organization meets all regulatory requirements and maintains the highest standards of security.',
    icon: <Icons.Shield />,
  },
  {
    id: 's7',
    title: 'Cyber Security Training',
    description: 'Specialized training programs to increase staff awareness, identify vulnerabilities, and protect against cyber threats.',
    icon: <Icons.Lock />,
  },
  {
    id: 's8',
    title: 'Software Design',
    description: 'Custom software architecture and design solutions tailored to streamline your business processes and enhance user experience.',
    icon: <Icons.Desktop />,
  },
  {
    id: 's9',
    title: 'App Development',
    description: 'Full-cycle mobile and web application development, from concept to deployment, building scalable and engaging digital products.',
    icon: <Icons.Smartphone />,
  },
];

export const PARTNERS = [
  { id: 1, name: 'Partner 1', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+1&font=montserrat' },
  { id: 2, name: 'Partner 2', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+2&font=montserrat' },
  { id: 3, name: 'Partner 3', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+3&font=montserrat' },
  { id: 4, name: 'Partner 4', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+4&font=montserrat' },
  { id: 5, name: 'Partner 5', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+5&font=montserrat' },
  { id: 6, name: 'Partner 6', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+6&font=montserrat' },
];

export const COMPANY_INFO = {
  name: "Azariah Management Group",
  tagline: "Empowering Growth. Delivering Excellence.",
  address: "Upper Marlboro, MD 20772, USA",
  email: "info@azariahmg.com",
  phone: "+1 (240) 813-0308",
  logoUrl: "https://placehold.co/300x80/0F2C59/white?text=AZARIAH+MG&font=montserrat", // Placeholder logo
  aboutText: `Azariah Management Group (AMG) is a premier management consulting firm dedicated to providing exceptional support services to federal and commercial clients. With a commitment to integrity, innovation, and excellence, we partner with organizations to optimize performance and achieve sustainable growth.

  Founded on the principles of service and leadership, AMG brings together a team of seasoned professionals with deep expertise in program management, human capital, and administrative support. We understand the unique challenges our clients face and deliver tailored solutions that drive measurable results.`,
};

export const STUDIO_INFO = {
  title: "AMG Creative Studio",
  subtitle: "Bring Your Vision to Life",
  description: "Our state-of-the-art production facility offers professional video production, photography, and digital content creation services. Whether you need corporate training videos, promotional content, or studio rentals, AMG Studio delivers broadcast-quality results.",
};

export const PODCAST_INFO = {
  title: "The Azariah Perspective",
  subtitle: "Leadership. Innovation. Growth.",
  description: "Join us as we explore the evolving landscape of business management, government contracting, and organizational leadership. We feature industry experts and thought leaders sharing insights that drive success.",
};
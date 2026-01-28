
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
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Handshake: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  LightBulb: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674a1 1 0 00.922-.606l2.024-4.857a1 1 0 00-.922-1.385H17.5a1 1 0 01-1-1V7a4 4 0 10-8 0v2a1 1 0 01-1 1H4.31a1 1 0 00-.922 1.385l2.024 4.857a1 1 0 00.922.606z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h4" />
    </svg>
  ),
  Speaker: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
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
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
    title: 'Corporate Social Responsibility Consulting',
    description: 'Strategic guidance for companies looking to make a meaningful social impact through sustainable and ethical business practices.',
    icon: <Icons.Handshake />,
  },
  {
    id: 's2',
    title: 'Nonprofit Strategy & Capacity Building',
    description: 'Strengthening the foundations of social organizations to scale their mission and enhance organizational efficiency.',
    icon: <Icons.Chart />,
  },
  {
    id: 's3',
    title: 'Government & Public Sector Consulting',
    description: 'Expert oversight and strategic planning for public institutions, focusing on compliance, performance, and public value.',
    icon: <Icons.Users />,
  },
  {
    id: 's4',
    title: 'Innovation & AI Strategy Consulting',
    description: 'Integrating cutting-edge technology and artificial intelligence to drive business growth and operational transformation.',
    icon: <Icons.Sparkles />,
  },
  {
    id: 's5',
    title: 'Community Impact & Development',
    description: 'Targeted strategies for local and global community enhancement, fostering sustainable growth and social equity.',
    icon: <Icons.Globe />,
  },
  {
    id: 's6',
    title: 'Creative Storytelling for Social Impact',
    description: 'Utilizing professional media and digital content to amplify missions and drive engagement for social causes.',
    icon: <Icons.Speaker />,
  },
  {
    id: 's7',
    title: 'International Market Entry & Diaspora Innovation',
    description: 'Facilitating global expansion and leveraging international networks to foster innovation across borders.',
    icon: <Icons.LightBulb />,
  },
];

export const PARTNERS = [
  { id: 1, name: 'Ai Force', logo: 'https://placehold.co/200x80/white/0F2C59?text=Ai+FORCE&font=montserrat' },
  { id: 2, name: 'Partner 2', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+2&font=montserrat' },
  { id: 3, name: 'Partner 3', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+3&font=montserrat' },
  { id: 4, name: 'Partner 4', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+4&font=montserrat' },
  { id: 5, name: 'Partner 5', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+5&font=montserrat' },
  { id: 6, name: 'Partner 6', logo: 'https://placehold.co/200x80/white/0F2C59?text=Partner+6&font=montserrat' },
];

export const COMPANY_INFO = {
  name: "Azariah Management Group",
  tagline: "Consulting • Innovation • Media",
  address: "Upper Marlboro, MD 20772, USA",
  email: "info@azariahmg.com",
  phone: "+1 (240) 813-0308",
  logoUrl: "https://static.wixstatic.com/media/a3c155_2b724620025141e0892095906201657c~mv2.png",
  aboutText: `Azariah Management Group (AMG) is an integrated ecosystem designed for high-impact results. By combining expert management consulting with cutting-edge innovation and professional media capabilities, we serve as a strategic force-multiplier for CEOs, Government Directors, and Social Impact Leaders. 

  Our mission is to empower organizations through Corporate Social Responsibility, Nonprofit Capacity Building, and AI-driven strategies that ensure sustainable growth and measurable social value in a rapidly evolving global landscape.`,
};

export const STUDIO_INFO = {
  title: "Creative Storytelling for Social Impact",
  subtitle: "Bring Your Vision to Life",
  description: "Our state-of-the-art AMG Studio provides the media infrastructure needed to amplify your social mission. From broadcast-quality podcasting to cinematic video production, we turn social impact strategy into compelling visual narratives.",
};

export const PODCAST_INFO = {
  title: "The Azariah Perspective",
  subtitle: "Leadership. Innovation. Impact.",
  description: "Join our community of visionaries as we explore the intersection of technology, social responsibility, and international innovation. We interview the leaders shaping the next generation of global impact.",
};

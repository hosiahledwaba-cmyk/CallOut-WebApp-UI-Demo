import { LucideIcon } from 'lucide-react';

// --- SHARED DOMAIN DOMAINS ---

export enum AppRoute {
  // Web (Public)
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  SIGNUP_ORG = 'SIGNUP_ORG',
  
  // Dashboard (Private)
  DASHBOARD_FEED = 'DASHBOARD_FEED',
  DASHBOARD_CREATE = 'DASHBOARD_CREATE',
  DASHBOARD_RESOURCES = 'DASHBOARD_RESOURCES',
  DASHBOARD_COMMUNITIES = 'DASHBOARD_COMMUNITIES',
  DASHBOARD_PROFILE = 'DASHBOARD_PROFILE',
}

// --- MOCK DATA SCHEMAS ---

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'user' | 'organization';
  verified?: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  tags: string[];
  warning?: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  verified: boolean;
}

export interface Community {
  id: string;
  name: string;
  members: number;
  description: string;
  isModerated: boolean;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
  route: AppRoute;
}

// --- WEB CONTENT SCHEMAS ---

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WebContent {
  hero: HeroContent;
  features: FeatureItem[];
  stats: StatItem[];
  trust: string[]; // List of org names
}
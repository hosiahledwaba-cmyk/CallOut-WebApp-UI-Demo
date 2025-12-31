import { LucideIcon } from 'lucide-react';

export enum AppRoute {
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  SIGNUP_ORG = 'SIGNUP_ORG',
  DASHBOARD_FEED = 'DASHBOARD_FEED',
  DASHBOARD_CREATE = 'DASHBOARD_CREATE',
  DASHBOARD_RESOURCES = 'DASHBOARD_RESOURCES',
  DASHBOARD_COMMUNITIES = 'DASHBOARD_COMMUNITIES',
  DASHBOARD_PROFILE = 'DASHBOARD_PROFILE',
}

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
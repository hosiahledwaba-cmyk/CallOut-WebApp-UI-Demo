import { Post, Resource, Community, User } from './types';

export const CURRENT_USER_ORG: User = {
  id: 'org-123',
  name: 'SafeHarbor Initiative',
  avatar: 'https://picsum.photos/200/200',
  role: 'organization',
  verified: true,
};

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: {
      id: 'user-1',
      name: 'Anonymous',
      avatar: 'https://picsum.photos/100/100',
      role: 'user',
    },
    content: 'Just wanted to share that the local support group in Downtown helped me immensely today. If you are hesitating to go, please do. You are not alone.',
    timestamp: '2 hours ago',
    likes: 45,
    tags: ['Support', 'Community'],
    comments: [
      { id: 'c1', author: 'SafeHarbor Initiative', content: 'We are so glad to hear this. Thank you for sharing.', timestamp: '1 hour ago' },
    ]
  },
  {
    id: '2',
    author: {
      id: 'org-2',
      name: 'Legal Aid Collective',
      avatar: 'https://picsum.photos/101/101',
      role: 'organization',
      verified: true,
    },
    content: 'We have updated our legal guide for domestic violence survivors. It now includes new protective order templates. Link in our resources tab.',
    timestamp: '5 hours ago',
    likes: 120,
    tags: ['Legal', 'Resources'],
    comments: []
  },
  {
    id: '3',
    author: {
      id: 'user-3',
      name: 'Anonymous',
      avatar: 'https://picsum.photos/102/102',
      role: 'user',
    },
    content: 'Does anyone know if the night shelter on 5th is currently accepting new intakes? Urgent.',
    timestamp: '10 mins ago',
    likes: 12,
    tags: ['Urgent', 'Question'],
    warning: 'Urgent Help Needed',
    comments: []
  }
];

export const MOCK_RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: '24/7 Crisis Hotline',
    category: 'Emergency',
    description: 'Immediate confidential support for anyone experiencing abuse.',
    link: 'tel:555-0123',
    verified: true,
  },
  {
    id: 'r2',
    title: 'Legal Rights Handbook 2024',
    category: 'Legal',
    description: 'A comprehensive guide to your rights in domestic disputes.',
    link: '#',
    verified: true,
  },
  {
    id: 'r3',
    title: 'Safe Housing Network',
    category: 'Housing',
    description: 'Directory of temporary safe housing locations.',
    link: '#',
    verified: true,
  }
];

export const MOCK_COMMUNITIES: Community[] = [
  {
    id: 'c1',
    name: 'Survivors Support Circle',
    members: 1240,
    description: 'A safe space for survivors to share stories and heal.',
    isModerated: true,
  },
  {
    id: 'c2',
    name: 'Legal Advice Q&A',
    members: 850,
    description: 'Ask questions to verified legal professionals.',
    isModerated: true,
  },
  {
    id: 'c3',
    name: 'Neighborhood Watch - North District',
    members: 320,
    description: 'Community safety alerts and updates.',
    isModerated: false,
  }
];
// Shared domain types for RML. These mirror the Zod schemas in ./schema.ts
// and are the single source of truth used by both the public site and admin.

export type Role =
  | 'director'
  | 'research-fellow'
  | 'research-associate'
  | 'researcher'
  | 'research-assistant-full-time'
  | 'research-assistant-part-time'
  | 'non-resident-fellow'
  | 'research-affiliate';

export const ROLE_GROUPS: { group: string; roles: Role[] }[] = [
  { group: 'Director', roles: ['director'] },
  { group: 'Research Fellows', roles: ['research-fellow'] },
  { group: 'Research Associates', roles: ['research-associate'] },
  { group: 'Researchers', roles: ['researcher'] },
  { group: 'Research Assistants (Full-Time)', roles: ['research-assistant-full-time'] },
  { group: 'Research Assistants (Part-Time)', roles: ['research-assistant-part-time'] },
];

export const FELLOWS_ROLES: Role[] = ['non-resident-fellow'];
export const AFFILIATES_ROLES: Role[] = ['research-affiliate'];

export const ROLE_LABELS: Record<Role, string> = {
  director: 'Director',
  'research-fellow': 'Research Fellow',
  'research-associate': 'Research Associate',
  researcher: 'Researcher',
  'research-assistant-full-time': 'Research Assistant (Full-Time)',
  'research-assistant-part-time': 'Research Assistant (Part-Time)',
  'non-resident-fellow': 'Non-Resident Fellow',
  'research-affiliate': 'Research Affiliate',
};

export interface Person {
  id: string;
  slug: string;
  name: string;
  role: Role;
  title: string;
  affiliation: string;
  secondaryAffiliation?: string;
  photoUrl: string;
  profileUrl?: string;
  bio?: string;
  order: number;
  featured: boolean;
  status: 'draft' | 'published';
}

export type PublicationType = 'book' | 'journal-article' | 'policy-paper' | 'chapter';

export const PUBLICATION_TYPE_LABELS: Record<PublicationType, string> = {
  book: 'Book',
  'journal-article': 'Journal Article',
  'policy-paper': 'Policy Paper',
  chapter: 'Book Chapter',
};

export interface Publication {
  id: string;
  slug: string;
  title: string;
  type: PublicationType;
  coverImageUrl: string;
  description: string;
  authors: string[];
  year: number;
  externalUrl: string;
  status: 'draft' | 'published';
}

export interface EventPanelist {
  id: string;
  name: string;
  photoUrl?: string;
  bio: string;
  profileUrl?: string;
  isModerator?: boolean;
}

export interface EventTimezone {
  label: string;
  time: string;
}

export interface EventSocialLink {
  platform: string;
  url: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  theme: string;
  description: string;
  coverImageUrl: string;
  status: 'upcoming' | 'past';
  eventFormat: 'in-person' | 'virtual' | 'hybrid';
  startDateTimeUtc: string;
  timezoneLabels: EventTimezone[];
  organizer: string;
  collaborators?: string;
  panelists: EventPanelist[];
  registrationUrl?: string;
  recordingUrl?: string;
  socialLinks?: EventSocialLink[];
}

export interface JobOpening {
  id: string;
  title: string;
  summary: string;
  richDescription: string;
  applyUrl?: string;
  applyEmail?: string;
  deadline?: string;
  status: 'open' | 'closed';
  featuredOnHome: boolean;
}

export interface ResearchTheme {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  coverImageUrl: string;
  relatedPublicationIds?: string[];
  relatedPersonIds?: string[];
}

export interface WhatWeDoItem {
  icon: string;
  label: string;
  text: string;
}

export interface HomeContent {
  heroHeading: string;
  heroSubhead: string;
  heroImageUrl: string;
  missionText: string;
  whatWeDoItems: WhatWeDoItem[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface AboutContent {
  heroImageUrl: string;
  introText: string;
  missionText: string;
  whatWeDoItems: WhatWeDoItem[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProgrammePageContent {
  slug: 'internship' | 'visiting-fellowship';
  heroImageUrl: string;
  overviewText: string;
  eligibilityItems: string[];
  howToApplySteps: string[];
  ctaLabel: string;
  ctaUrl: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ContactContent {
  contactEmail: string;
  institutionalLine: string;
  formEnabled: boolean;
}

export interface SiteSettings {
  logoUrl: string;
  faviconUrl: string;
  primaryColor: string;
  accentColor: string;
  navLabels: Record<string, string>;
  socialLinks: { platform: string; url: string }[];
  contactEmail: string;
  footerText: string;
}

export type PageContentKey = 'home' | 'about' | 'internship' | 'visiting-fellowship' | 'contact';

export interface MediaItem {
  id: string;
  url: string;
  filename: string;
  altText: string;
  width?: number;
  height?: number;
}

// Admin users (mock auth, not Supabase auth)
export type AdminRole = 'admin' | 'editor' | 'viewer';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  password: string; // mock only — never do this in production
}

export interface ActivityLogEntry {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

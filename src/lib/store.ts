// Mock content store backed by localStorage. Mirrors the schemas in ./types.ts.
// The public client (./client.ts) reads from here. The admin mutations write here.
// Swap this file for a real API client later without touching components.

import type {
  Person,
  Publication,
  Event,
  JobOpening,
  ResearchTheme,
  HomeContent,
  AboutContent,
  ProgrammePageContent,
  ContactContent,
  SiteSettings,
  MediaItem,
  AdminUser,
  ActivityLogEntry,
} from './types';
import {
  seedPeople,
  seedPublications,
  seedEvents,
  seedJobs,
  seedResearchThemes,
  seedHomeContent,
  seedAboutContent,
  seedInternshipContent,
  seedVisitingContent,
  seedContactContent,
  seedSettings,
  seedMedia,
  seedUsers,
  seedActivity,
} from './seed';

const STORAGE_KEY = 'rml_db_v1';

export interface RmlDb {
  people: Person[];
  publications: Publication[];
  events: Event[];
  jobs: JobOpening[];
  researchThemes: ResearchTheme[];
  homeContent: HomeContent;
  aboutContent: AboutContent;
  internshipContent: ProgrammePageContent;
  visitingFellowshipContent: ProgrammePageContent;
  contactContent: ContactContent;
  settings: SiteSettings;
  media: MediaItem[];
  users: AdminUser[];
  activity: ActivityLogEntry[];
}

function buildSeedDb(): RmlDb {
  return {
    people: seedPeople,
    publications: seedPublications,
    events: seedEvents,
    jobs: seedJobs,
    researchThemes: seedResearchThemes,
    homeContent: seedHomeContent,
    aboutContent: seedAboutContent,
    internshipContent: seedInternshipContent,
    visitingFellowshipContent: seedVisitingContent,
    contactContent: seedContactContent,
    settings: seedSettings,
    media: seedMedia,
    users: seedUsers,
    activity: seedActivity,
  };
}

export function loadDb(): RmlDb {
  if (typeof window === 'undefined') return buildSeedDb();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = buildSeedDb();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(raw) as RmlDb;
  } catch {
    return buildSeedDb();
  }
}

export function saveDb(db: RmlDb): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

export function resetDb(): RmlDb {
  const seeded = buildSeedDb();
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  }
  return seeded;
}

export const DB_STORAGE_KEY = STORAGE_KEY;

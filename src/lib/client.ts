// Typed content-client service layer. Components and hooks call ONLY these
// functions, never the store directly. Swap this file's implementation for a
// real backend (REST/Supabase/CMS) later — component code stays unchanged.

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
  PageContentKey,
} from './types';
import { loadDb, saveDb, type RmlDb } from './store';
import { uid } from './utils';

// Simulate network latency for realism
const delay = (ms = 120) => new Promise((r) => setTimeout(r, ms));

function withDb<T>(fn: (db: RmlDb) => T): Promise<T> {
  return delay().then(() => {
    const db = loadDb();
    return fn(db);
  });
}

function mutate<T>(fn: (db: RmlDb) => T): Promise<T> {
  return delay().then(() => {
    const db = loadDb();
    const result = fn(db);
    saveDb(db);
    return result;
  });
}

function logActivity(db: RmlDb, user: string, action: string, target: string) {
  db.activity.unshift({
    id: uid('a'),
    user,
    action,
    target,
    timestamp: new Date().toISOString(),
  });
  db.activity = db.activity.slice(0, 50);
}

// ---------- People ----------
export async function getPeople(): Promise<Person[]> {
  return withDb((db) =>
    [...db.people].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
  );
}

export async function getPublishedPeople(): Promise<Person[]> {
  return withDb((db) =>
    db.people
      .filter((p) => p.status === 'published')
      .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
  );
}

export async function getPersonBySlug(slug: string): Promise<Person | null> {
  return withDb((db) => db.people.find((p) => p.slug === slug) ?? null);
}

export async function createPerson(
  data: Omit<Person, 'id'>,
  user = 'Admin'
): Promise<Person> {
  return mutate((db) => {
    const person: Person = { ...data, id: uid('p') };
    db.people.push(person);
    logActivity(db, user, 'created', `Team member: ${person.name}`);
    return person;
  });
}

export async function updatePerson(
  id: string,
  data: Partial<Person>,
  user = 'Admin'
): Promise<Person> {
  return mutate((db) => {
    const idx = db.people.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error('Person not found');
    db.people[idx] = { ...db.people[idx], ...data, id };
    logActivity(db, user, 'updated', `Team member: ${db.people[idx].name}`);
    return db.people[idx];
  });
}

export async function deletePerson(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const p = db.people.find((x) => x.id === id);
    db.people = db.people.filter((x) => x.id !== id);
    if (p) logActivity(db, user, 'deleted', `Team member: ${p.name}`);
  });
}

// ---------- Publications ----------
export async function getPublications(): Promise<Publication[]> {
  return withDb((db) => [...db.publications].sort((a, b) => b.year - a.year));
}

export async function getPublishedPublications(): Promise<Publication[]> {
  return withDb((db) =>
    db.publications
      .filter((p) => p.status === 'published')
      .sort((a, b) => b.year - a.year)
  );
}

export async function getPublicationBySlug(slug: string): Promise<Publication | null> {
  return withDb((db) => db.publications.find((p) => p.slug === slug) ?? null);
}

export async function createPublication(
  data: Omit<Publication, 'id'>,
  user = 'Admin'
): Promise<Publication> {
  return mutate((db) => {
    const pub: Publication = { ...data, id: uid('pub') };
    db.publications.push(pub);
    logActivity(db, user, 'created', `Publication: ${pub.title}`);
    return pub;
  });
}

export async function updatePublication(
  id: string,
  data: Partial<Publication>,
  user = 'Admin'
): Promise<Publication> {
  return mutate((db) => {
    const idx = db.publications.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error('Publication not found');
    db.publications[idx] = { ...db.publications[idx], ...data, id };
    logActivity(db, user, 'updated', `Publication: ${db.publications[idx].title}`);
    return db.publications[idx];
  });
}

export async function deletePublication(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const p = db.publications.find((x) => x.id === id);
    db.publications = db.publications.filter((x) => x.id !== id);
    if (p) logActivity(db, user, 'deleted', `Publication: ${p.title}`);
  });
}

// ---------- Events ----------
export async function getEvents(): Promise<Event[]> {
  return withDb((db) =>
    [...db.events].sort(
      (a, b) => new Date(b.startDateTimeUtc).getTime() - new Date(a.startDateTimeUtc).getTime()
    )
  );
}

export async function getUpcomingEvents(): Promise<Event[]> {
  return withDb((db) =>
    db.events
      .filter((e) => e.status === 'upcoming')
      .sort(
        (a, b) =>
          new Date(a.startDateTimeUtc).getTime() - new Date(b.startDateTimeUtc).getTime()
      )
  );
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return withDb((db) => db.events.find((e) => e.slug === slug) ?? null);
}

export async function createEvent(data: Omit<Event, 'id'>, user = 'Admin'): Promise<Event> {
  return mutate((db) => {
    const ev: Event = { ...data, id: uid('ev') };
    db.events.push(ev);
    logActivity(db, user, 'created', `Event: ${ev.title}`);
    return ev;
  });
}

export async function updateEvent(
  id: string,
  data: Partial<Event>,
  user = 'Admin'
): Promise<Event> {
  return mutate((db) => {
    const idx = db.events.findIndex((e) => e.id === id);
    if (idx === -1) throw new Error('Event not found');
    db.events[idx] = { ...db.events[idx], ...data, id };
    logActivity(db, user, 'updated', `Event: ${db.events[idx].title}`);
    return db.events[idx];
  });
}

export async function deleteEvent(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const e = db.events.find((x) => x.id === id);
    db.events = db.events.filter((x) => x.id !== id);
    if (e) logActivity(db, user, 'deleted', `Event: ${e.title}`);
  });
}

// ---------- Jobs ----------
export async function getJobs(): Promise<JobOpening[]> {
  return withDb((db) => [...db.jobs]);
}

export async function getOpenJobs(): Promise<JobOpening[]> {
  return withDb((db) => db.jobs.filter((j) => j.status === 'open'));
}

export async function getFeaturedJob(): Promise<JobOpening | null> {
  return withDb((db) => db.jobs.find((j) => j.featuredOnHome && j.status === 'open') ?? null);
}

export async function createJob(data: Omit<JobOpening, 'id'>, user = 'Admin'): Promise<JobOpening> {
  return mutate((db) => {
    const job: JobOpening = { ...data, id: uid('job') };
    db.jobs.push(job);
    logActivity(db, user, 'created', `Job: ${job.title}`);
    return job;
  });
}

export async function updateJob(
  id: string,
  data: Partial<JobOpening>,
  user = 'Admin'
): Promise<JobOpening> {
  return mutate((db) => {
    const idx = db.jobs.findIndex((j) => j.id === id);
    if (idx === -1) throw new Error('Job not found');
    db.jobs[idx] = { ...db.jobs[idx], ...data, id };
    logActivity(db, user, 'updated', `Job: ${db.jobs[idx].title}`);
    return db.jobs[idx];
  });
}

export async function deleteJob(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const j = db.jobs.find((x) => x.id === id);
    db.jobs = db.jobs.filter((x) => x.id !== id);
    if (j) logActivity(db, user, 'deleted', `Job: ${j.title}`);
  });
}

// ---------- Research themes ----------
export async function getResearchThemes(): Promise<ResearchTheme[]> {
  return withDb((db) => [...db.researchThemes]);
}

export async function getResearchThemeBySlug(slug: string): Promise<ResearchTheme | null> {
  return withDb((db) => db.researchThemes.find((r) => r.slug === slug) ?? null);
}

export async function createResearchTheme(
  data: Omit<ResearchTheme, 'id'>,
  user = 'Admin'
): Promise<ResearchTheme> {
  return mutate((db) => {
    const rt: ResearchTheme = { ...data, id: uid('rt') };
    db.researchThemes.push(rt);
    logActivity(db, user, 'created', `Research theme: ${rt.title}`);
    return rt;
  });
}

export async function updateResearchTheme(
  id: string,
  data: Partial<ResearchTheme>,
  user = 'Admin'
): Promise<ResearchTheme> {
  return mutate((db) => {
    const idx = db.researchThemes.findIndex((r) => r.id === id);
    if (idx === -1) throw new Error('Research theme not found');
    db.researchThemes[idx] = { ...db.researchThemes[idx], ...data, id };
    logActivity(db, user, 'updated', `Research theme: ${db.researchThemes[idx].title}`);
    return db.researchThemes[idx];
  });
}

export async function deleteResearchTheme(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const r = db.researchThemes.find((x) => x.id === id);
    db.researchThemes = db.researchThemes.filter((x) => x.id !== id);
    if (r) logActivity(db, user, 'deleted', `Research theme: ${r.title}`);
  });
}

// ---------- Page content ----------
export async function getPageContent(key: PageContentKey): Promise<unknown> {
  return withDb((db) => {
    switch (key) {
      case 'home':
        return db.homeContent;
      case 'about':
        return db.aboutContent;
      case 'internship':
        return db.internshipContent;
      case 'visiting-fellowship':
        return db.visitingFellowshipContent;
      case 'contact':
        return db.contactContent;
      default:
        throw new Error(`Unknown page content key: ${key}`);
    }
  });
}

export async function updatePageContent(
  key: PageContentKey,
  data: unknown,
  user = 'Admin'
): Promise<unknown> {
  return mutate((db) => {
    switch (key) {
      case 'home':
        db.homeContent = data as HomeContent;
        logActivity(db, user, 'updated', 'Page: Home');
        return db.homeContent;
      case 'about':
        db.aboutContent = data as AboutContent;
        logActivity(db, user, 'updated', 'Page: About');
        return db.aboutContent;
      case 'internship':
        db.internshipContent = data as ProgrammePageContent;
        logActivity(db, user, 'updated', 'Page: Internship');
        return db.internshipContent;
      case 'visiting-fellowship':
        db.visitingFellowshipContent = data as ProgrammePageContent;
        logActivity(db, user, 'updated', 'Page: Visiting Fellowship');
        return db.visitingFellowshipContent;
      case 'contact':
        db.contactContent = data as ContactContent;
        logActivity(db, user, 'updated', 'Page: Contact');
        return db.contactContent;
      default:
        throw new Error(`Unknown page content key: ${key}`);
    }
  });
}

// ---------- Settings ----------
export async function getSiteSettings(): Promise<SiteSettings> {
  return withDb((db) => db.settings);
}

export async function updateSiteSettings(
  data: Partial<SiteSettings>,
  user = 'Admin'
): Promise<SiteSettings> {
  return mutate((db) => {
    db.settings = { ...db.settings, ...data };
    logActivity(db, user, 'updated', 'Site settings');
    return db.settings;
  });
}

// ---------- Media ----------
export async function getMedia(): Promise<MediaItem[]> {
  return withDb((db) => [...db.media]);
}

export async function createMedia(data: Omit<MediaItem, 'id'>, user = 'Admin'): Promise<MediaItem> {
  return mutate((db) => {
    const item: MediaItem = { ...data, id: uid('m') };
    db.media.push(item);
    logActivity(db, user, 'uploaded', `Media: ${item.filename}`);
    return item;
  });
}

export async function updateMedia(
  id: string,
  data: Partial<MediaItem>,
  user = 'Admin'
): Promise<MediaItem> {
  return mutate((db) => {
    const idx = db.media.findIndex((m) => m.id === id);
    if (idx === -1) throw new Error('Media not found');
    db.media[idx] = { ...db.media[idx], ...data, id };
    logActivity(db, user, 'updated', `Media: ${db.media[idx].filename}`);
    return db.media[idx];
  });
}

export async function deleteMedia(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const m = db.media.find((x) => x.id === id);
    db.media = db.media.filter((x) => x.id !== id);
    if (m) logActivity(db, user, 'deleted', `Media: ${m.filename}`);
  });
}

// ---------- Users ----------
export async function getUsers(): Promise<AdminUser[]> {
  return withDb((db) => [...db.users]);
}

export async function createUser(data: Omit<AdminUser, 'id'>, user = 'Admin'): Promise<AdminUser> {
  return mutate((db) => {
    const u: AdminUser = { ...data, id: uid('u') };
    db.users.push(u);
    logActivity(db, user, 'created', `User: ${u.email}`);
    return u;
  });
}

export async function updateUser(
  id: string,
  data: Partial<AdminUser>,
  user = 'Admin'
): Promise<AdminUser> {
  return mutate((db) => {
    const idx = db.users.findIndex((u) => u.id === id);
    if (idx === -1) throw new Error('User not found');
    db.users[idx] = { ...db.users[idx], ...data, id };
    logActivity(db, user, 'updated', `User: ${db.users[idx].email}`);
    return db.users[idx];
  });
}

export async function deleteUser(id: string, user = 'Admin'): Promise<void> {
  return mutate((db) => {
    const u = db.users.find((x) => x.id === id);
    db.users = db.users.filter((x) => x.id !== id);
    if (u) logActivity(db, user, 'deleted', `User: ${u.email}`);
  });
}

export async function loginAdmin(email: string, password: string): Promise<AdminUser | null> {
  return withDb((db) => {
    const u = db.users.find(
      (x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password
    );
    return u ?? null;
  });
}

// ---------- Activity ----------
export async function getActivity(): Promise<ActivityLogEntry[]> {
  return withDb((db) => [...db.activity]);
}

import { Link } from 'react-router-dom';
import {
  Globe, Scale, Users, GraduationCap, Megaphone,
  type LucideIcon,
} from 'lucide-react';
import { Hero, Callout } from '@/components/Hero';
import { SectionHeading } from '@/components/ui/primitives';
import { useHomeContent, useFeaturedJob, useUpcomingEvents, useSiteSettings } from '@/lib/hooks';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { formatDate } from '@/lib/utils';
import { Skeleton } from '@/components/ui/primitives';

const ICONS: Record<string, LucideIcon> = {
  Globe, Scale, Users, GraduationCap, Megaphone,
};

export default function HomePage() {
  const { data: home, isLoading } = useHomeContent();
  const { data: job } = useFeaturedJob();
  const { data: events } = useUpcomingEvents();
  const { data: settings } = useSiteSettings();

  const nextEvent = events?.[0];

  if (isLoading || !home) {
    return (
      <div className="container-content py-20">
        <Skeleton className="h-96 w-full rounded-card" />
      </div>
    );
  }

  return (
    <>
      <Hero
        image={home.heroImageUrl}
        heading={home.heroHeading}
        subhead={home.heroSubhead}
        cta={{ label: 'About the RML', to: '/about' }}
      />

      {/* Mission */}
      <section className="container-content py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Our mission" title="A collective response to forced displacement" />
          </div>
          <p className="text-lg leading-8 text-ink-soft">{home.missionText}</p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="What we do"
            title="Bringing disciplines together"
            center
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.whatWeDoItems.map((item, i) => {
              const Icon = ICONS[item.icon] ?? Globe;
              return (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg">{item.label}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest callouts */}
      <section className="container-content py-16 lg:py-20">
        <SectionHeading eyebrow="Latest" title="What's happening at RML" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {job ? (
            <Callout
              eyebrow="Recruitment call"
              title={job.title}
              body={job.summary}
              to="/join"
              ctaLabel="View position"
              icon={<Users className="h-4 w-4" />}
            />
          ) : (
            <Callout
              eyebrow="Join us"
              title="Join the RML Team"
              body="RML is always looking for collaborators and researchers. See current openings."
              to="/join"
              ctaLabel="See openings"
              icon={<Users className="h-4 w-4" />}
            />
          )}
          {nextEvent ? (
            <Callout
              eyebrow="Next event"
              title={nextEvent.title}
              body={`${formatDate(nextEvent.startDateTimeUtc)} \u00b7 ${nextEvent.theme}`}
              to={`/events/${nextEvent.slug}`}
              ctaLabel="Register / details"
              icon={<Megaphone className="h-4 w-4" />}
            />
          ) : (
            <Callout
              eyebrow="Events"
              title="Browse past events"
              body="Catch up on RML seminars, panels, and commemorations with recordings."
              to="/events"
              ctaLabel="See all events"
              icon={<Megaphone className="h-4 w-4" />}
            />
          )}
        </div>
      </section>

      {/* Social strip */}
      {settings?.socialLinks && settings.socialLinks.length > 0 && (
        <section className="bg-primary py-14 text-white">
          <div className="container-content flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl text-white">Follow the conversation</h2>
            <p className="max-w-xl text-white/70">
              RML broadcasts events and shares research across our social platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {settings.socialLinks.map((s) => (
                <a
                  key={s.platform + s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition-colors hover:border-accent hover:bg-accent"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="container-content py-16 lg:py-20">
        <div className="overflow-hidden rounded-card bg-canvas">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-2xl sm:text-3xl">Join our research collective</h2>
              <p className="mt-3 text-ink-soft">
                Scholars, practitioners, and students working on forced displacement and migration
                are welcome to collaborate with RML.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                to="/join"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
              >
                See openings
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

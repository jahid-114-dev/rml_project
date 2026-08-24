import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/lib/auth';
import { PublicLayout } from '@/app/PublicLayout';
import HomePage from '@/pages/public/HomePage';
import AboutPage from '@/pages/public/AboutPage';
import { TeamListPage, PersonDetailPage } from '@/pages/public/TeamPages';
import { ResearchPage, ResearchDetailPage } from '@/pages/public/ResearchPages';
import { PublicationsPage, PublicationDetailPage } from '@/pages/public/PublicationPages';
import { EventsPage, EventDetailPage } from '@/pages/public/EventPages';
import { ProgrammePage } from '@/pages/public/ProgrammePage';
import JoinPage from '@/pages/public/JoinPage';
import ContactPage from '@/pages/public/ContactPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const NotFound = () => (
  <div className="container-content py-32 text-center">
    <h1 className="text-3xl">Page not found</h1>
    <p className="mt-3 text-ink-muted">The page you are looking for does not exist.</p>
    <a href="/" className="mt-6 inline-block text-accent underline">Back to home</a>
  </div>
);

const router = createHashRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/team', element: <TeamListPage /> },
      { path: '/team/non-resident-fellows', element: <TeamListPage /> },
      { path: '/team/affiliates', element: <TeamListPage /> },
      { path: '/team/:slug', element: <PersonDetailPage /> },
      { path: '/research', element: <ResearchPage /> },
      { path: '/research/:slug', element: <ResearchDetailPage /> },
      { path: '/publications', element: <PublicationsPage /> },
      { path: '/publications/:slug', element: <PublicationDetailPage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/events/:slug', element: <EventDetailPage /> },
      { path: '/programmes/internship', element: <ProgrammePage /> },
      { path: '/programmes/visiting-fellowship', element: <ProgrammePage /> },
      { path: '/join', element: <JoinPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

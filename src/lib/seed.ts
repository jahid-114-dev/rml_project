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

// Stock portrait + cover URLs (Pexels, license-free, hot-linkable)
const PORTRAIT = (seed: string) =>
  `https://images.pexels.com/photos/${seed}/pexels-photo-${seed}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;

const COVER = (seed: string) =>
  `https://images.pexels.com/photos/${seed}/pexels-photo-${seed}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const seedPeople: Person[] = [
  {
    id: 'p-director',
    slug: 'nasir-uddin',
    name: 'Nasir Uddin',
    role: 'director',
    title: 'Professor',
    affiliation: 'Department of Anthropology, University of Chittagong',
    secondaryAffiliation: 'Director, Refugee and Migration Lab',
    photoUrl: PORTRAIT('1043471'),
    profileUrl: 'https://cu.ac.bd/public_profile/index.php?ein=3884',
    bio: 'Professor Nasir Uddin is the founding Director of the Refugee and Migration Lab. His research spans forced displacement, statelessness, and the Rohingya crisis, with fieldwork across Bangladesh borderlands.',
    order: 0,
    featured: true,
    status: 'published',
  },
  {
    id: 'p-fellow-1',
    slug: 'tesseltje-de-lange',
    name: 'Tesseltje de Lange',
    role: 'research-fellow',
    title: 'Professor',
    affiliation: 'Sociology of Law and Migration Law, Radboud Universiteit',
    photoUrl: PORTRAIT('1239291'),
    profileUrl: 'https://www.ru.nl/en/people/lange-t-de',
    bio: 'Professor de Lange works on the legal sociology of migration and refugee protection in European contexts.',
    order: 0,
    featured: true,
    status: 'published',
  },
  {
    id: 'p-fellow-2',
    slug: 'nergis-canefe',
    name: 'Nergis Canefe',
    role: 'research-fellow',
    title: 'Professor',
    affiliation: 'Department of Politics & Center for Refugee Studies, York University',
    photoUrl: PORTRAIT('415829'),
    profileUrl: 'https://profiles.laps.yorku.ca/profiles/ncanefe/',
    bio: 'Professor Canefe researches political theory, exile, and refugee studies with a focus on displaced communities and transitional justice.',
    order: 1,
    featured: true,
    status: 'published',
  },
  {
    id: 'p-associate-1',
    slug: 'amir-mohammad-nasrullah',
    name: 'Amir Mohammad Nasrullah',
    role: 'research-associate',
    title: 'Professor',
    affiliation: 'Department of Public Administration, University of Chittagong',
    photoUrl: PORTRAIT('2182970'),
    profileUrl: 'https://cu.ac.bd/public_profile/index.php?ein=4160',
    bio: 'Professor Nasrullah studies public administration and governance in migration and refugee policy contexts.',
    order: 0,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-associate-2',
    slug: 'dina-siddiqi',
    name: 'Dina M. Siddiqi',
    role: 'research-associate',
    title: 'Clinical Professor',
    affiliation: 'Global Liberal Studies, New York University',
    photoUrl: PORTRAIT('762020'),
    profileUrl: 'https://liberalstudies.nyu.edu/about/faculty-listing/dina-siddiqi.html',
    bio: 'Cultural anthropologist working on gender, labor, and Muslim communities in South Asia and the diaspora.',
    order: 1,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-researcher-1',
    slug: 'fareha-islam',
    name: 'Fareha Islam',
    role: 'researcher',
    title: 'PhD Candidate',
    affiliation: 'Department of Anthropology, University of Chittagong',
    photoUrl: PORTRAIT('3763188'),
    profileUrl: '',
    bio: 'Fareha Islam researches gendered experiences of displacement among Rohingya women in Cox\u2019s Bazar camps.',
    order: 0,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-raft-1',
    slug: 'rakib-hasan',
    name: 'Rakib Hasan',
    role: 'research-assistant-full-time',
    title: 'MA',
    affiliation: 'Department of Anthropology, University of Chittagong',
    photoUrl: PORTRAIT('1681010'),
    profileUrl: '',
    bio: 'Rakib supports fieldwork coordination and data collection for RML\u2019s Rohingya longitudinal study.',
    order: 0,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-rapt-1',
    slug: 'nusrat-jahan',
    name: 'Nusrat Jahan',
    role: 'research-assistant-part-time',
    title: 'MA Student',
    affiliation: 'Department of Sociology, University of Chittagong',
    photoUrl: PORTRAIT('3777931'),
    profileUrl: '',
    bio: 'Nusrat assists with literature reviews and event programming at RML.',
    order: 0,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-nrf-1',
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'non-resident-fellow',
    title: 'Associate Professor',
    affiliation: 'School of Law, University of British Columbia',
    photoUrl: PORTRAIT('733872'),
    profileUrl: 'https://example.com/sarah-chen',
    bio: 'Associate Professor Chen studies international refugee law and resettlement policy in North America.',
    order: 0,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-nrf-2',
    slug: 'omar-faruk',
    name: 'Omar Faruk',
    role: 'non-resident-fellow',
    title: 'Senior Researcher',
    affiliation: 'Migration Policy Institute, Brussels',
    photoUrl: PORTRAIT('834863'),
    profileUrl: 'https://example.com/omar-faruk',
    bio: 'Omar Faruk researches EU asylum policy and the externalization of migration control.',
    order: 1,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-aff-1',
    slug: 'amina-yusuf',
    name: 'Amina Yusuf',
    role: 'research-affiliate',
    title: 'PhD Candidate',
    affiliation: 'Centre for Migration Studies, University of Ghana',
    photoUrl: PORTRAIT('5905902'),
    profileUrl: 'https://example.com/amina-yusuf',
    bio: 'Amina\u2019s doctoral work examines West African return migration and reintegration.',
    order: 0,
    featured: false,
    status: 'published',
  },
  {
    id: 'p-aff-2',
    slug: 'leo-martinez',
    name: 'Leo Martinez',
    role: 'research-affiliate',
    title: 'PhD Candidate',
    affiliation: 'Institute of Geography, University of Edinburgh',
    photoUrl: PORTRAIT('1220794'),
    profileUrl: 'https://example.com/leo-martinez',
    bio: 'Leo researches climate-induced displacement and environmental mobility in Central America.',
    order: 1,
    featured: false,
    status: 'published',
  },
];

export const seedPublications: Publication[] = [
  {
    id: 'pub-1',
    slug: 'rohingya-crisis-and-the-limits-of-protection',
    title: 'The Rohingya Crisis and the Limits of Protection',
    type: 'book',
    coverImageUrl: COVER('2834731'),
    description:
      'This volume examines the protracted Rohingya refugee crisis through interdisciplinary lenses, interrogating the limits of international protection frameworks and centering the voices of displaced communities. Drawing on extended ethnographic fieldwork in the camps of Cox\u2019s Bazar, the contributors offer fresh approaches to dignity, citizenship, and justice.',
    authors: ['Nasir Uddin', 'Tesseltje de Lange'],
    year: 2024,
    externalUrl: 'https://doi.org/10.1007/978-3-030-00000-0',
    status: 'published',
  },
  {
    id: 'pub-2',
    slug: 'borders-belonging-and-the-right-to-remain',
    title: 'Borders, Belonging, and the Right to Remain',
    type: 'journal-article',
    coverImageUrl: COVER('2693200'),
    description:
      'A comparative article on how displaced communities negotiate belonging in protracted exile. The analysis draws on cases from Bangladesh, Lebanon, and Uganda to theorize \u201cthe right to remain\u201d as a framework that extends beyond state-centric asylum.',
    authors: ['Nergis Canefe', 'Dina M. Siddiqi'],
    year: 2023,
    externalUrl: 'https://doi.org/10.1080/1369183X.2023.0000000',
    status: 'published',
  },
  {
    id: 'pub-3',
    slug: 'climate-mobility-and-justice',
    title: 'Climate Mobility and Justice: A Policy Framework',
    type: 'policy-paper',
    coverImageUrl: COVER('2280549'),
    description:
      'A policy paper proposing a justice-oriented framework for governing climate-induced cross-border mobility. It argues for complementary protection pathways, predictable burden-sharing, and the meaningful inclusion of affected communities in policy design.',
    authors: ['Leo Martinez', 'Sarah Chen'],
    year: 2025,
    externalUrl: 'https://rml.example.org/papers/climate-mobility',
    status: 'published',
  },
  {
    id: 'pub-4',
    slug: 'gendered-displacement-in-south-asia',
    title: 'Gendered Displacement in South Asia',
    type: 'chapter',
    coverImageUrl: COVER('6123456'),
    description:
      'A book chapter analyzing how gender shapes the experience and narration of displacement among Rohingya and Partition-affected communities in South Asia, drawing on feminist ethnography and oral history.',
    authors: ['Fareha Islam'],
    year: 2024,
    externalUrl: 'https://doi.org/10.4324/9781000000000',
    status: 'published',
  },
];

export const seedEvents: Event[] = [
  {
    id: 'ev-1',
    slug: 'world-refugee-day-2026-panel',
    title: 'World Refugee Day 2026 Panel Discussion',
    theme: 'Refugee Rights and Entitlement in Today\u2019s World',
    description:
      'To mark World Refugee Day 2026 and the 75th anniversary of the 1951 Refugee Convention, RML convenes a panel of leading scholars to deepen understanding of the refugee crisis, amplify refugee voices, and explore practical solutions to support displaced communities. The discussion is broadcast live across RML\u2019s social platforms.',
    coverImageUrl: COVER('2681342'),
    status: 'upcoming',
    eventFormat: 'hybrid',
    startDateTimeUtc: '2026-06-20T14:00:00Z',
    timezoneLabels: [
      { label: 'New York (EDT)', time: '10:00 AM' },
      { label: 'London (BST)', time: '3:00 PM' },
      { label: 'Bangladesh (BST)', time: '8:00 PM' },
    ],
    organizer: 'Refugee and Migration Lab (RML)',
    collaborators: 'Center for Refugee Studies, York University',
    panelists: [
      {
        id: 'pan-1',
        name: 'Tesseltje de Lange',
        photoUrl: PORTRAIT('1239291'),
        bio: 'Professor of Sociology of Law and Migration Law, Radboud Universiteit.',
        profileUrl: 'https://www.ru.nl/en/people/lange-t-de',
      },
      {
        id: 'pan-2',
        name: 'Nergis Canefe',
        photoUrl: PORTRAIT('415829'),
        bio: 'Professor, Department of Politics & Center for Refugee Studies, York University.',
        profileUrl: 'https://profiles.laps.yorku.ca/profiles/ncanefe/',
      },
      {
        id: 'pan-3',
        name: 'Amir Mohammad Nasrullah',
        photoUrl: PORTRAIT('2182970'),
        bio: 'Professor, Department of Public Administration, University of Chittagong.',
        profileUrl: 'https://cu.ac.bd/public_profile/index.php?ein=4160',
      },
      {
        id: 'pan-4',
        name: 'Dina M. Siddiqi',
        photoUrl: PORTRAIT('762020'),
        bio: 'Cultural Anthropologist and Clinical Professor, NYU.',
        profileUrl: 'https://liberalstudies.nyu.edu/about/faculty-listing/dina-siddiqi.html',
      },
      {
        id: 'pan-5',
        name: 'Nasir Uddin',
        photoUrl: PORTRAIT('1043471'),
        bio: 'Professor and Director, Refugee and Migration Lab (RML), University of Chittagong.',
        profileUrl: 'https://cu.ac.bd/public_profile/index.php?ein=3884',
        isModerator: true,
      },
    ],
    registrationUrl: 'https://rml.example.org/register/wrd-2026',
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/refugee.migration.lab' },
      { platform: 'YouTube', url: 'https://youtube.com/@rml' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/rml' },
    ],
  },
  {
    id: 'ev-2',
    slug: '8th-rohingya-genocide-remembrance-day-2025',
    title: 'The 8th Rohingya Genocide Remembrance Day 2025',
    theme: 'Commemoration and Testimony',
    description:
      'A commemorative gathering marking the 8th Rohingya Genocide Remembrance Day, featuring testimony from survivors, reflections from researchers, and a panel on memory, justice, and the ongoing search for durable solutions.',
    coverImageUrl: COVER('2670919'),
    status: 'past',
    eventFormat: 'hybrid',
    startDateTimeUtc: '2025-08-29T13:00:00Z',
    timezoneLabels: [
      { label: 'New York (EDT)', time: '9:00 AM' },
      { label: 'London (BST)', time: '2:00 PM' },
      { label: 'Bangladesh (BST)', time: '7:00 PM' },
    ],
    organizer: 'Refugee and Migration Lab (RML)',
    panelists: [
      {
        id: 'pan-6',
        name: 'Nasir Uddin',
        photoUrl: PORTRAIT('1043471'),
        bio: 'Director, RML.',
        profileUrl: 'https://cu.ac.bd/public_profile/index.php?ein=3884',
        isModerator: true,
      },
      {
        id: 'pan-7',
        name: 'Fareha Islam',
        photoUrl: PORTRAIT('3763188'),
        bio: 'PhD Candidate, University of Chittagong.',
      },
    ],
    recordingUrl: 'https://youtube.com/watch?v=rohingya-remembrance-2025',
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/refugee.migration.lab' },
      { platform: 'YouTube', url: 'https://youtube.com/@rml' },
    ],
  },
  {
    id: 'ev-3',
    slug: 'seminar-externalization-of-asylum',
    title: 'Seminar: The Externalization of Asylum',
    theme: 'Migration Governance',
    description:
      'A research seminar examining how states increasingly outsource asylum responsibilities to transit and origin countries, and what this means for refugee protection. Drawing on fieldwork from the EU-Turkey deal and the Rwanda arrangement, the speaker traces the human costs of remote border control.',
    coverImageUrl: COVER('5471175'),
    status: 'past',
    eventFormat: 'virtual',
    startDateTimeUtc: '2025-05-12T15:00:00Z',
    timezoneLabels: [
      { label: 'New York (EDT)', time: '11:00 AM' },
      { label: 'London (BST)', time: '4:00 PM' },
      { label: 'Bangladesh (BST)', time: '9:00 PM' },
    ],
    organizer: 'Refugee and Migration Lab (RML)',
    panelists: [
      {
        id: 'pan-8',
        name: 'Omar Faruk',
        photoUrl: PORTRAIT('834863'),
        bio: 'Senior Researcher, Migration Policy Institute, Brussels.',
        profileUrl: 'https://example.com/omar-faruk',
        isModerator: true,
      },
    ],
    recordingUrl: 'https://youtube.com/watch?v=externalization-seminar',
  },
];

export const seedJobs: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Research Assistants (Two Positions)',
    summary:
      'RML is hiring two research assistants for an ongoing research project on the Rohingya crisis and forced displacement. Join a dynamic, interdisciplinary team of scholars from around the world.',
    richDescription:
      '<p>The Refugee and Migration Lab (RML) is hiring <strong>two research assistants</strong> for an ongoing longitudinal research project documenting the experiences of Rohingya refugees and host communities in Cox\u2019s Bazar, Bangladesh.</p><h3>Responsibilities</h3><ul><li>Support fieldwork coordination and data collection</li><li>Conduct literature reviews across anthropology, law, and migration studies</li><li>Assist with qualitative coding and transcription</li><li>Contribute to event programming and publications</li></ul><h3>Qualifications</h3><ul><li>MA or equivalent in a relevant social science discipline</li><li>Strong research and writing skills</li><li>Fluency in English; Bangla a strong asset</li><li>Fieldwork experience preferred</li></ul>',
    applyEmail: 'careers@rml.example.org',
    deadline: '2026-07-15',
    status: 'open',
    featuredOnHome: true,
  },
  {
    id: 'job-2',
    title: 'Visiting Fellow \u2014 Migration & Climate',
    summary:
      'A short-term visiting fellowship for scholars working at the intersection of climate change and human mobility.',
    richDescription:
      '<p>RML invites applications for a <strong>Visiting Fellow</strong> focused on climate-induced displacement and environmental mobility. The fellow will spend 4\u20138 weeks in residence, present their work, and contribute to RML publications.</p><p>Applications from scholars based in the Global South are especially encouraged.</p>',
    applyUrl: 'https://rml.example.org/apply/visiting-fellow',
    deadline: '2026-09-30',
    status: 'open',
    featuredOnHome: false,
  },
];

export const seedResearchThemes: ResearchTheme[] = [
  {
    id: 'rt-1',
    slug: 'rohingya-and-statelessness',
    title: 'Rohingya and Statelessness',
    summary:
      'Long-term ethnographic and policy research on the Rohingya crisis, statelessness, and durable solutions.',
    body: '<p>The Rohingya and Statelessness stream brings together ethnographers, legal scholars, and policy researchers to study the protracted condition of statelessness facing the Rohingya. Projects range from camp-based fieldwork in Cox\u2019s Bazar to comparative work on citizenship denial and its remedies.</p><p>Current sub-projects include a longitudinal study of camp life, a legal analysis of citizenship pathways, and an oral history archive of survivor testimony.</p>',
    coverImageUrl: COVER('2161467'),
    relatedPublicationIds: ['pub-1', 'pub-4'],
    relatedPersonIds: ['p-director', 'p-researcher-1', 'p-raft-1'],
  },
  {
    id: 'rt-2',
    slug: 'refugee-rights-and-international-law',
    title: 'Refugee Rights and International Law',
    summary:
      'Examining the limits and possibilities of international refugee law in an era of externalization and erosion.',
    body: '<p>This stream interrogates how international refugee law is being reshaped\u2014and eroded\u2014by externalization, deterrence, and the politicization of asylum. Contributors compare jurisdictions and propose rights-centered alternatives grounded in the lived experience of displaced people.</p>',
    coverImageUrl: COVER('5471175'),
    relatedPublicationIds: ['pub-2'],
    relatedPersonIds: ['p-fellow-1', 'p-nrf-1', 'p-nrf-2'],
  },
  {
    id: 'rt-3',
    slug: 'climate-mobility-and-justice',
    title: 'Climate Mobility and Justice',
    summary:
      'Researching cross-border displacement driven by climate change and developing justice-oriented frameworks.',
    body: '<p>The Climate Mobility and Justice stream investigates how communities navigate displacement driven by environmental change, and how governance frameworks can respond with dignity and predictability. We center affected communities as knowledge producers, not only as subjects.</p>',
    coverImageUrl: COVER('2280549'),
    relatedPublicationIds: ['pub-3'],
    relatedPersonIds: ['p-aff-2', 'p-nrf-1'],
  },
];

export const seedHomeContent: HomeContent = {
  heroHeading: 'Researching people and politics across borders',
  heroSubhead:
    'The Refugee and Migration Lab is an interdisciplinary research collective addressing forced displacement, migration, and refugee rights.',
  heroImageUrl: COVER('2681342'),
  missionText:
    'The Refugee and Migration Lab (RML) is a research collective that draws on diverse academic knowledge and expertise to address the escalating refugee crisis, dynamics of forced displacement, and evolving migration challenges. Its goal is to foster multidisciplinary dialogue that educates, informs, and, when possible, offers fresh approaches and meaningful research outcomes to reducing conflict, inequality, and injustice.',
  whatWeDoItems: [
    {
      icon: 'Globe',
      label: 'Cross-border research',
      text: 'Fieldwork-driven studies of displacement across South Asia, Europe, Africa, and the Americas.',
    },
    {
      icon: 'Scale',
      label: 'Rights and policy',
      text: 'Engaging international refugee law and policy to advance protection and durable solutions.',
    },
    {
      icon: 'Users',
      label: 'Amplifying voices',
      text: 'Centering the testimony and agency of displaced communities in every stage of research.',
    },
    {
      icon: 'GraduationCap',
      label: 'Mentoring scholars',
      text: 'Training the next generation of researchers through fellowships, internships, and collaborations.',
    },
  ],
  seoTitle: 'Refugee and Migration Lab (RML)',
  seoDescription:
    'An interdisciplinary research collective researching people and politics across borders.',
};

export const seedAboutContent: AboutContent = {
  heroImageUrl: COVER('2670919'),
  introText:
    'The Refugee and Migration Lab (RML) is a dynamic, interdisciplinary research collective dedicated to understanding and addressing the complex and evolving issues surrounding global displacement and human mobility.',
  missionText:
    'In response to the growing refugee crisis and the multifaceted challenges of migration, RML brings together scholars, practitioners, and policymakers from a wide range of academic disciplines\u2014including anthropology, sociology, political science, law, geography, gender studies, peace and conflict, public health, and environmental studies\u2014to foster rich, cross-sectoral dialogue and collaboration.',
  whatWeDoItems: [
    {
      icon: 'Globe',
      label: 'Multidisciplinary dialogue',
      text: 'We convene scholars across disciplines to address displacement from multiple angles.',
    },
    {
      icon: 'Scale',
      label: 'Rights-based research',
      text: 'We produce research that informs protection, policy, and justice for displaced people.',
    },
    {
      icon: 'Users',
      label: 'Community-centered',
      text: 'We work with affected communities as collaborators, not only as subjects.',
    },
    {
      icon: 'Megaphone',
      label: 'Public engagement',
      text: 'We translate findings into public events, publications, and accessible commentary.',
    },
  ],
};

export const seedInternshipContent: ProgrammePageContent = {
  slug: 'internship',
  heroImageUrl: COVER('3184325'),
  overviewText:
    'The RML Internship Programme offers early-career researchers and students the opportunity to contribute to ongoing research on forced displacement and migration. Interns work alongside senior scholars, gain hands-on research experience, and participate in the intellectual life of the lab.',
  eligibilityItems: [
    'Currently enrolled in or recently graduated from a graduate program in a relevant social science discipline',
    'Demonstrated interest in refugee and migration studies',
    'Strong research, writing, and communication skills',
    'Available for a minimum of 12 weeks',
  ],
  howToApplySteps: [
    'Prepare a CV and a short statement of interest (max 500 words)',
    'Identify one RML research theme your work connects to',
    'Email your application to the address below with \u201cInternship Application\u201d in the subject line',
  ],
  ctaLabel: 'Apply by email',
  ctaUrl: 'mailto:internships@rml.example.org',
};

export const seedVisitingContent: ProgrammePageContent = {
  slug: 'visiting-fellowship',
  heroImageUrl: COVER('2561501'),
  overviewText:
    'The Visiting Fellowship invites scholars and practitioners working on forced displacement and migration to spend 4\u20138 weeks in residence at RML. Fellows present their research, collaborate with the team, and contribute to RML publications.',
  eligibilityItems: [
    'Established or early-career scholars with a demonstrated research record',
    'A clearly defined project related to RML\u2019s research themes',
    'Fluency in English (working language of the lab)',
    'Availability for an in-residence or hybrid residency',
  ],
  howToApplySteps: [
    'Prepare a CV, a 2-page project proposal, and a writing sample',
    'Secure one letter of recommendation',
    'Submit your application via the fellowship portal below',
  ],
  ctaLabel: 'Submit fellowship application',
  ctaUrl: 'https://rml.example.org/apply/visiting-fellow',
};

export const seedContactContent: ContactContent = {
  contactEmail: 'contact@rml.example.org',
  institutionalLine:
    'Refugee and Migration Lab, Department of Anthropology, University of Chittagong, Chittagong, Bangladesh',
  formEnabled: true,
};

export const seedSettings: SiteSettings = {
  logoUrl: '/rml-logo.svg',
  faviconUrl: '/favicon.svg',
  primaryColor: '#1B2A4A',
  accentColor: '#C1622B',
  navLabels: {
    home: 'Home',
    about: 'About',
    team: 'Team',
    research: 'Research',
    publications: 'Publications',
    events: 'Events & News',
    join: 'Join',
    contact: 'Contact',
  },
  socialLinks: [
    { platform: 'Facebook', url: 'https://facebook.com/refugee.migration.lab' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/rml' },
    { platform: 'YouTube', url: 'https://youtube.com/@rml' },
    { platform: 'Bluesky', url: 'https://bsky.app/profile/rml.bsky.social' },
    { platform: 'X', url: 'https://x.com/rml_lab' },
    { platform: 'Instagram', url: 'https://instagram.com/rml_lab' },
    { platform: 'Threads', url: 'https://threads.net/@rml_lab' },
  ],
  contactEmail: 'contact@rml.example.org',
  footerText:
    'The Refugee and Migration Lab (RML) is an interdisciplinary research collective researching people and politics across borders.',
};

export const seedMedia: MediaItem[] = [
  {
    id: 'm-1',
    url: COVER('2681342'),
    filename: 'hero-refugee-day.jpg',
    altText: 'Crowd gathered at a refugee day commemoration',
    width: 1200,
    height: 800,
  },
  {
    id: 'm-2',
    url: COVER('2670919'),
    filename: 'rohingya-remembrance.jpg',
    altText: 'Candlelit remembrance ceremony',
    width: 1200,
    height: 800,
  },
  {
    id: 'm-3',
    url: PORTRAIT('1043471'),
    filename: 'director-portrait.jpg',
    altText: 'Portrait of Professor Nasir Uddin',
    width: 600,
    height: 600,
  },
];

export const seedUsers: AdminUser[] = [
  {
    id: 'u-admin',
    email: 'admin@rml.example.org',
    name: 'Site Admin',
    role: 'admin',
    password: 'admin123',
  },
  {
    id: 'u-editor',
    email: 'editor@rml.example.org',
    name: 'Content Editor',
    role: 'editor',
    password: 'editor123',
  },
  {
    id: 'u-viewer',
    email: 'viewer@rml.example.org',
    name: 'Read-only Viewer',
    role: 'viewer',
    password: 'viewer123',
  },
];

export const seedActivity: ActivityLogEntry[] = [
  {
    id: 'a-1',
    user: 'Content Editor',
    action: 'published',
    target: 'Event: World Refugee Day 2026 Panel Discussion',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 'a-2',
    user: 'Site Admin',
    action: 'updated',
    target: 'Page: Home',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
  {
    id: 'a-3',
    user: 'Content Editor',
    action: 'created',
    target: 'Publication: Climate Mobility and Justice',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
];

// --- IMPORTANT FOR USER ---
// Replace these URLs with the actual paths to your uploaded images.
// Example: '/assets/logo.png' if you put the file in a public/assets folder.
export const IMAGES = {
  // Placeholder for the "Phi Design" logo (User's first image)
  LOGO: '/logo-optimized.webp', 
  
  // Placeholder for the Developer at Desk (User's second image)
  HERO: '/herosection.webp'
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Servizi', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contatti', href: '#contact' },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Sviluppo Web Custom',
    description: 'Siti web su misura, veloci e reattivi, costruiti con le ultime tecnologie come React e Tailwind.',
    icon: 'code'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Interfacce utente intuitive e moderne che guidano l’utente e valorizzano il tuo brand.',
    icon: 'layout'
  },
  {
    id: 3,
    title: 'E-Commerce',
    description: 'Soluzioni di vendita online sicure e scalabili per portare il tuo business al livello successivo.',
    icon: 'shopping-cart'
  },
  {
    id: 4,
    title: 'SEO & Performance',
    description: 'Ottimizzazione per i motori di ricerca e tempi di caricamento rapidi per la massima visibilità.',
    icon: 'bar-chart'
  }
];

export const PORTFOLIO_DATA = [
  {
    id: 1,
    title: 'Termoidraulica Vema',
    category: 'Termoidraulica',
    image: '/projects/mockup4.webp',
    gallery: [
      '/projects/mockup.webp',
      '/projects/mockup2.webp',
      '/projects/mockup3.webp',
      '/projects/mockup4.webp',
      '/projects/mockup5.webp',
      '/projects/mockup6.webp',
      '/projects/mockup7.webp'
    ],
    description: 'Sito web professionale per azienda di termoidraulica con presentazione servizi e contatti.',
    technologies: ['React', 'Tailwind CSS'],
    link: 'https://www.termoidraulicavema.com/',
    comingSoon: false
  },
  {
    id: 2,
    title: 'Nuovo Progetto',
    category: 'Artista Musicale',
    image: '',
    gallery: [],
    description: '',
    technologies: [],
    link: '',
    comingSoon: true
  },
  {
    id: 3,
    title: 'Nuovo Progetto',
    category: 'Macelleria',
    image: '',
    gallery: [],
    description: '',
    technologies: [],
    link: '',
    comingSoon: true
  }
];
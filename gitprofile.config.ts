// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'digitalrehman',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, 
      header: 'Github Projects',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars', 
        limit: 8,
        exclude: {
          forks: false, 
          projects: [], 
        },
      },
      manual: {
        projects: ['Digitalrehman/spotify-clone', 'Digitalrehman/Modern-ToDo-List'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Gemini Clone',
          description:
            'This is Gemini AI Clone you can use this project for your personal work',
          imageUrl:
            'https://drehmanportfolio.netlify.app/img/gemini.PNG',
          link: 'https://gemini-clo.netlify.app/',
        },
        {
          title: 'Modern TODO List',
          description:
            'This is Modern TODO List you can use this project for your personal work and add your task for lifetime',
          imageUrl:
            'https://drehmanportfolio.netlify.app/img/moderntodo.png',
          link: 'https://moderntodolist01.netlify.app/',
        }
      ],
    },
  },
  seo: {
    title: 'Full-Stack Web Developer Portfolio - Rehman Official',
    description: "Welcome to my portfolio showcasing my skills as a full-stack web developer. Explore my projects and services, ranging from responsive web design to robust backend development. With a passion for creating efficient and user-friendly applications, I specialize in technologies like HTML5, CSS3, JavaScript, Node.js, and React. Let's connect and discuss how I can bring your ideas to life!",
    imageURL: 'https://drehmanportfolio.netlify.app/img/ProfileMe.jpg',
  },
  social: {
    linkedin: 'rehmanarainoffical',
    twitter: 'rehman_digital',
    mastodon: '',
    researchGate: '',
    facebook: 'rehmanarainofficail',
    instagram: 'rehmanarainoffical',
    reddit: '',
    threads: '',
    youtube: 'upgradeskill1',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'rehmanofficial',
    dev: 'rehmanofficial',
    stackoverflow: '22587822/abdul-rehman',
    skype: '',
    telegram: '',
    website: 'https://drehmanportfolio.netlify.app',
    phone: '3433133834',
    email: 'abdulrehmanarain1018@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  skills: [
    'JavaScript',
    'React js',
    'Node js',
    'Next js',
    'Redux',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'HTML',
    'Tailwind',
    'Bootstrap',
    'Firebase',
    'MongoDB',
    'Express JS',
    'Python',
    'Framer Motion',
    'GSAP'
  
  ],
  experiences: [
    {
      company: 'Techzone Learning',
      position: 'Full Stack Developer & Teacher',
      from: 'January 2023',
      to: 'Present',
      companyLink: 'https://www.facebook.com/techzonesfc.official/',
    }
  ],
  certifications: [
    {
      name: 'DIT',
      body: 'Symecs Center from Mirpurkhas',
      year: 'March 2021',
      link: 'https://www.facebook.com/New.Symecs/',
    },
  ],
  educations: [
    {
      institution: 'Shah Abdul Latif Collage',
      degree: 'Inter',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'University of Sindh',
      degree: 'Information Technology(IT)',
      from: '2023',
      to: 'Present',
    },
  ],
  publications: [
    {
      title: 'CLIENTS SAY',
      conferenceName: '',
      journalName: 'SEO Expert',
      authors: 'John Doe, Jane Smith',
      link: 'https://drehmanportfolio.netlify.app',
      description:
        'I had the privilege of working with a client who entrusted me to build an exceptional website. This client, my largest project to date, has been a testament to the quality and commitment I bring to every project. Together, we ve achieved a remarkable online presence, and I look forward to more successful collaboration.'
    },
    {
      title: 'CLIENTS SAY',
      conferenceName: '',
      journalName: 'Digital Marketing Expert',
      authors: 'MR Josef',
      link: 'https://drehmanportfolio.netlify.app',
      description:
         'I had the privilege of working with a client who entrusted me to build an exceptional website. This client, my largest project to date, has been a testament to the quality and commitment I bring to every project. Together, we ve achieved a remarkable online presence, and I look forward to more successful collaboration.'
    },
  ],
  
  blog: {
    source: 'dev',
    username: 'digitalrehman', 
    limit: 2,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '5032309',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/digitalrehman"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

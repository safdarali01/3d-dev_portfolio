// Exporting an array of navigation links for the website
export const navLinks = [
  {
    id: 1,
    name: 'Home', // Name displayed for the link
    href: '#home', // URL fragment for navigation
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// Exporting an array of client reviews
export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson', // Name of the reviewer
    position: 'Marketing Director at GreenLeaf', // Reviewer’s position and company
    img: 'assets/review1.png', // Path to reviewer’s image
    review: 'Working with Adrian was a fantastic experience...', // Review text
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review: 'Adrian’s expertise in web development is truly impressive...',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech',
    img: 'assets/review3.png',
    review: 'I can’t say enough good things about Adrian...',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review: 'Adrian was a pleasure to work with...',
  },
];

// Exporting an array of projects
export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform', // Project title
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform...', // Short description
    subdesc: 'Built as a unique Software-as-a-Service app with Next.js...', // Additional description
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ', // Link to the project
    texture: '/textures/project/project1.mp4', // Path to project texture/video
    logo: '/assets/project-logo1.png', // Path to project logo
    logoStyle: {
      backgroundColor: '#2A1816', // Logo background color
      border: '0.2px solid #36201D', // Logo border style
      boxShadow: '0px 0px 60px 0px #AA3C304D', // Logo shadow effect
    },
    spotlight: '/assets/spotlight1.png', // Path to spotlight image
    tags: [
      {
        id: 1,
        name: 'React.js', // Technology used
        path: '/assets/react.svg', // Path to technology logo
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  // Additional projects can follow the same structure
];

// Function to calculate sizes based on screen size
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065, // Scale factor for desk
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0], // Position for desk
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0], // Cube position
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0], // React logo position
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0], // Position for a ring element
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10], // Position for a target element
  };
};

// Exporting an array of work experiences
export const workExperiences = [
  {
    id: 1,
    name: 'Framer', // Company name
    pos: 'Lead Web Developer', // Position held
    duration: '2022 - Present', // Duration of employment
    title: "Framer serves as my go-to tool for creating interactive prototypes...", // Description of work
    icon: '/assets/framer.svg', // Path to the company logo
    animation: 'victory', // Animation type for UI
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice...",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized...",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

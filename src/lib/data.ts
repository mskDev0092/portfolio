import { Achievement, Chapter, Quest } from "./types";

export const USER_DATA = {
  typingRoles: [
    "Full Stack Engineer",
    "AI Innovator",
    "Problem Solver",
    "Digital Architect",
    "Code Alchemist",
  ],
  skills: {
    Frontend: [
      {
        title: "Frontend Development & Libraries",
        provider: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/sk_dev/front-end-development-libraries",
      },
      {
        title: "Building Responsive Forms with Flexbox",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/14c564665df322f0070a81581497b8bddcf717e4a9e649503eef981466861fc3",
      },
      {
        title: "CSS Advanced Layouts with Grid",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/741375840b20bada2ebc4d5cd78d0db78856ef234f459fa00f7d60471fd1610a",
      },
      {
        title: "React Hooks",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/3c758306167e8bfdbf604a78d715272990d2e20dc9c0d3bc06d7c66038ad8dfc",
      },
      {
        title: "React Working with APIs",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/92a63fd711c44b5ec08ee09bf46adca2d18a609d3d51a052ca0047989f48c7f3",
      },
    ],
    "Backend/DevOps": [
      {
        title: "Data Structures & Algorithms",
        provider: "freeCodeCamp",
        link: "https://freecodecamp.org/certification/Sk_Dev/javascript-algorithms-and-data-structures",
      },
      {
        title: "Backend Development and APIs",
        provider: "freeCodeCamp",
        link: "https://freecodecamp.org/certification/Sk_Dev/back-end-development-and-apis",
      },
      {
        title: "Explore Web Development with Node.js",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/0b6216960cf58da04ce1630e507515b97225a356eeaaf5fe159a3d75d9f9ab93",
      },
      {
        title: "Advanced Node.js",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/d68352fd28a60d0709ebd5b9f444d0370a01ed0b064a36e29ae2e148a41c9f5d",
      },
      {
        title: "Exploring Linux Internals",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/6b17c6666f85180a722e5a90cb1464ab5df76fe5cd36181ff37b013bb05ffa9f",
      },
      {
        title: "Linux Security and Hardening",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/2d3fc5fe8a3b2bc260649065e7abb1027880f800e4b40abb7c8993c7f1fe6ee9",
      },
      {
        title: "Docker Essential Training",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/edb74426bdc1330658ed61766e886419ae369d12428e179801f73b3de32f2023",
      },
    ],
    "AI/Generative AI": [
      {
        title: "What Is Generative AI",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/3c9d0dc7cc1cf62f0815e5aac3873f32cd8cddc499a1a637e2dc8639ff2499b2",
      },
      {
        title: "Pair Programming with AI",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/a13452994f12923054c459857b8833a1aa8c844b7d140096f036e2eed3a2b2ad",
      },
      {
        title: "Introducing Semantic Kernel",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/f81a8cda4b1e4daf5c8c0fbd1c0d3e3caddcafd5ffbd460eefccc3348b74e546",
      },
      {
        title: "Career Essentials in Generative AI",
        provider: "Microsoft + LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/4d7e06a3c4fecb4a59934c3356fc95a7c03b02aca26ba530ae5ed1717778ead4",
      },
    ],
    "Cloud/AWS": [
      {
        title: "AWS Cloud Practitioner",
        provider: "AWS Cloud Quest",
        link: "https://aws.amazon.com/certification/",
      },
    ],
    "Testing/Other": [
      {
        title: "End-to-End JavaScript Testing with Cypress.io",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/de18a17307ff4e22a0609ad4c3ab83db14c256409a527f59a6e270422b272d6d",
      },
      {
        title: "Explore App Development with the MERN Stack",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/dc9d760b7187138c94428dacaedc5b6201f95eb928c7ef24e30f4e1d04902e39",
      },
      {
        title: "FullStack JavaScript Development",
        provider: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/b0696743a4bda56e0315c578c9b907fd314a97f05167d87ff86672c2683101ed",
      },
    ],
  },
  projects: [
    {
      title: "Four Card Feature Section",
      github: "https://github.com/mskDev0092/Four-card-feature-section-master",
      live: "https://mskdev0092.github.io/Four-card-feature-section-master/",
      stack: "HTML/CSS",
      topics: "RWD - CSS Flexbox",
      from: "Frontend Mentor",
    },
    {
      title: "Base Apparel Coming Soon",
      github: "https://github.com/mskDev0092/Base-Apparel-coming-soon-page",
      live: "https://mskdev0092.github.io/Base-Apparel-coming-soon-page/",
      stack: "HTML/CSS/JS",
      topics: "Basic Form - Validation",
      from: "Frontend Mentor",
    },
    {
      title: "Intro Component Sign Up",
      github: "https://github.com/mskDev0092/Intro-component-with-sign-up",
      live: "https://mskdev0092.github.io/Intro-component-with-sign-up/",
      stack: "HTML/CSS/JS",
      topics: "Form Validation - Regex",
      from: "Frontend Mentor",
    },
    {
      title: "Single Price Grid Component",
      github: "https://github.com/mskDev0092/Single-Price-Grid-Component",
      live: "https://mskdev0092.github.io/Single-Price-Grid-Component/",
      stack: "HTML/CSS",
      topics: "CSS Flexbox Grid",
      from: "Frontend Mentor",
    },
    {
      title: "Huddle Landing Page",
      github: "https://github.com/mskDev0092/Huddle-landing-page",
      live: "https://mskdev0092.github.io/Huddle-landing-page/",
      stack: "HTML/CSS",
      topics: "Font Awesome - Google Fonts",
      from: "Frontend Mentor",
    },
    {
      title: "Pricing Component with Toggle",
      github: "https://github.com/mskDev0092/Pricing-Componant-with-toggle",
      live: "https://mskdev0092.github.io/Pricing-Componant-with-toggle/",
      stack: "HTML/CSS/JS",
      topics: "Toggle Switch - CSS Gradient",
      from: "Frontend Mentor",
    },
    {
      title: "Markdown Previewer",
      github: "https://github.com/mskDev0092/markdown-project-fcc",
      live: "",
      stack: "React",
      topics: "useState Hook",
      from: "FreeCodeCamp",
    },
    {
      title: "React Calculator App",
      github: "https://github.com/mskDev0092/react-calculator23",
      live: "",
      stack: "React",
      topics: "useReducer Hook",
      from: "FreeCodeCamp",
    },
    {
      title: "React Drum Machine",
      github: "https://github.com/mskDev0092/react-drum-machine-fcc23",
      live: "",
      stack: "React",
      topics: "useEffect - Audio API",
      from: "FreeCodeCamp",
    },
    {
      title: "React 25 + 5 Clock",
      github: "https://github.com/mskDev0092/react-v-clock",
      live: "",
      stack: "React",
      topics: "Timer - useReducer",
      from: "FreeCodeCamp",
    },
    {
      title: "Random Quote Machine",
      github: "https://github.com/mskDev0092/Random-Quote-Machine",
      live: "",
      stack: "React",
      topics: "API - useState",
      from: "FreeCodeCamp",
    },
    {
      title: "Timestamp Microservice",
      github: "https://github.com/mskDev0092/Timestamp-Microservice",
      live: "",
      stack: "Express.js",
      topics: "Middleware - JSON",
      from: "FreeCodeCamp",
    },
    {
      title: "Request Header Parser",
      github: "https://github.com/mskDev0092/Headerparser-Microservice",
      live: "",
      stack: "Express.js",
      topics: "HTTP Headers",
      from: "FreeCodeCamp",
    },
    {
      title: "URL Shortener Microservice",
      github: "https://github.com/mskDev0092/URL-Shortener-Microservice",
      live: "",
      stack: "Express.js/MongoDB",
      topics: "CRUD - MongoClient",
      from: "FreeCodeCamp",
    },
    {
      title: "Exercise Tracker",
      github: "https://github.com/mskDev0092/Exercise-Tracker-App",
      live: "",
      stack: "MERN",
      topics: "Mongoose - Schema",
      from: "FreeCodeCamp",
    },
    {
      title: "File Metadata Microservice",
      github: "https://github.com/mskDev0092/File-Metadata-Microservice",
      live: "",
      stack: "Express.js",
      topics: "Multer - File Upload",
      from: "FreeCodeCamp",
    },
    {
      title: "Premium Product Website",
      github: "https://github.com/mskDev0092/Premium-product-website",
      live: "https://mskdev0092.github.io/Premium-product-website/",
      stack: "HTML/CSS/JS",
      topics: "Scroll Animations",
      from: "Practice Project",
    },
    {
      title: "Developer Portfolio",
      github: "https://github.com/mskDev0092/dev-portfolio",
      live: "https://mskdev0092.github.io/dev-portfolio/",
      stack: "HTML/CSS/JS",
      topics: "Portfolio Design",
      from: "Practice Project",
    },
    {
      title: "Herbal Product Website",
      github: "https://github.com/mskDev0092/Premium-herbal-website",
      live: "https://mskdev0092.github.io/Premium-herbal-website/",
      stack: "HTML/CSS/JS",
      topics: "Product Landing",
      from: "Practice Project",
    },
    {
      title: "BiasMapper",
      github: "https://github.com/mskDev0092/BiasMapper",
      live: "https://mskdev0092.github.io/BiasMapper/",
      stack: "HTML/CSS/JS",
      topics: "AI Bias Tool",
      from: "Personal Project",
    },
    {
      title: "Global Insights",
      github: "https://github.com/mskDev0092/global-insights",
      live: "https://mskdev0092.github.io/global-insights/",
      stack: "HTML/CSS/JS",
      topics: "Data Visualization",
      from: "Personal Project",
    },
    {
      title: "Quick MCQs",
      github: "https://github.com/mskDev0092/Quick-MCQS",
      live: "https://mskdev0092.github.io/Quick-MCQS/",
      stack: "HTML/CSS/JS",
      topics: "Quiz Application",
      from: "Practice Project",
    },
    {
      title: "Max Health",
      github:
        "https://github.com/mskDev0092/Max-Health---Maximize-Your-Health-Journey",
      live: "https://mskdev0092.github.io/Max-Health---Maximize-Your-Health-Journey/",
      stack: "HTML/CSS/JS",
      topics: "Health Tracker",
      from: "Practice Project",
    },
    {
      title: "Meal Planner Calendar",
      github: "https://github.com/mskDev0092/Meal-Planner-Calendar",
      live: "https://mskdev0092.github.io/Meal-Planner-Calendar/",
      stack: "HTML/CSS/JS",
      topics: "Calendar App",
      from: "Practice Project",
    },
    {
      title: "LLM Instructions",
      github: "https://github.com/mskDev0092/LLM_INSTRUCTIONS",
      live: "",
      stack: "Next.js",
      topics: "AI Prompts",
      from: "Personal Project",
    },
  ],
};

export const STORY_CHAPTERS: Chapter[] = [
  {
    id: 0,
    title: "Chapter 0: The Awakening",
    subtitle: "Enter the Digital Realm",
    narrative: `The year is 2024. In the vast expanse of the digital cosmos, a new consciousness awakens. You are mskDev0092, a novice coder with dreams of becoming a Full Stack Architect.

Your journey begins in the Neon District, where the glow of countless monitors illuminates the path ahead. The ancient ones speak of legendary developers who mastered both frontend and backend realms.

"Welcome, Initiate," a holographic voice echoes. "Your training begins now. Complete the certification trials to unlock your true potential. Each skill you acquire brings you closer to mastering the Digital Odyssey."

The terminal flickers to life, displaying your first set of challenges. Will you rise to become a legendary architect of code?`,
    icon: "🌅",
  },
  {
    id: 1,
    title: "Chapter 1: Frontend Mastery",
    subtitle: "The Art of Visual Interfaces",
    narrative: `You enter the Frontend Quarter, where pixels dance and layouts shift like living organisms. Master artisans here craft interfaces that captivate and delight users.

"To control the visual realm, you must understand its foundations," the Guild Master explains. "HTML provides structure, CSS brings beauty, and JavaScript breathes life into your creations."

Your training focuses on responsive design, mastering Flexbox and Grid to create layouts that adapt to any screen. React becomes your primary weapon, with hooks serving as your special techniques.

Complete the certification trials to prove your mastery over the visual domain. Each certification earned adds to your power and unlocks new abilities.`,
    icon: "🎨",
  },
  {
    id: 2,
    title: "Chapter 2: Backend Architecture",
    subtitle: "The Engine Room",
    narrative: `Descending into the Backend Depths, you encounter the machinery that powers the entire digital realm. Here, servers hum with purpose and databases store the memories of civilizations.

"Without the backend, the frontend is merely a shell," the System Administrator declares. "Node.js will be your foundation, Express your framework, and databases your treasure vaults."

You learn the ancient arts of API creation, server management, and the mystical paths of Linux. Docker containers become your portable fortresses, carrying your applications anywhere in the cloud.

The certifications await. Prove your mastery, and the Backend Depths will recognize you as one of their own.`,
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Chapter 3: AI Integration",
    subtitle: "The Neural Nexus",
    narrative: `The AI Chamber pulses with an otherworldly energy. Here, machines learn, adapt, and create. The boundaries between human and artificial intelligence blur.

"Welcome to the future," the AI Whisperer greets you. "Generative AI is not just a tool—it's a partner in creation. Learn to harness its power ethically and effectively."

You discover the secrets of prompt engineering, semantic kernels, and AI-assisted development. The AI becomes your pair programmer, amplifying your capabilities beyond mortal limits.

Complete the AI certifications to unlock the Neural Nexus's deepest secrets.`,
    icon: "🤖",
  },
  {
    id: 4,
    title: "Chapter 4: Cloud Mastery",
    subtitle: "The Infinite Sky",
    narrative: `Ascending to the Cloud Spires, you witness the infinite expanse of distributed computing. Here, applications live across countless servers, always available, always scaling.

"The cloud is not a place," the Cloud Architect explains. "It's a philosophy of infinite possibility. AWS will be your vessel in these skies."

You learn to provision resources, manage costs, and architect systems that span continents. The cloud certifications grant you passage to deploy anywhere in the world.`,
    icon: "☁️",
  },
  {
    id: 5,
    title: "Chapter 5: Testing & Quality",
    subtitle: "The Crucible",
    narrative: `The Testing Arena awaits—the final proving ground before real-world deployment. Here, every line of code faces rigorous examination.

"A bug today is a disaster tomorrow," the Quality Guardian warns. "Master testing, and your code will stand against the chaos of production."

Cypress becomes your sword, slashing through bugs with end-to-end tests. The MERN stack certification proves your full stack capabilities.`,
    icon: "🧪",
  },
  {
    id: 6,
    title: "Chapter 6: Mission Deployments",
    subtitle: "Real-World Challenges",
    narrative: `With your training complete, the Mission Control Center opens its doors. Real projects await—each one a test of your accumulated skills.

"These aren't simulations," Mission Commander states. "Every project here represents actual challenges you've conquered. Review them, learn from them, and use them as blueprints for future conquests."

Your portfolio of missions grows, each project a testament to your journey from initiate to architect.`,
    icon: "🚀",
  },
  {
    id: 7,
    title: "Epilogue: Master Architect",
    subtitle: "The Journey Continues",
    narrative: `You stand at the pinnacle of your training, but the journey never truly ends. The digital realm evolves constantly, and so must you.

"You have proven yourself worthy," the Grand Architect's voice resonates. "But remember: true mastery is the eternal pursuit of knowledge. Every line of code you write shapes the future."

The certifications and projects in your portfolio are not just achievements—they are stepping stones to greater challenges ahead. New technologies emerge, new paradigms form, and new adventures await.

Your Digital Odyssey has just begun. What will you create next?`,
    icon: "🏆",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_step",
    title: "First Steps",
    description: "Complete your first certification",
    icon: "👣",
    unlocked: false,
  },
  {
    id: "frontend_master",
    title: "Frontend Virtuoso",
    description: "Complete all Frontend certifications",
    icon: "🎨",
    unlocked: false,
  },
  {
    id: "backend_master",
    title: "Backend Architect",
    description: "Complete all Backend/DevOps certifications",
    icon: "⚙️",
    unlocked: false,
  },
  {
    id: "ai_pioneer",
    title: "AI Pioneer",
    description: "Complete all AI certifications",
    icon: "🤖",
    unlocked: false,
  },
  {
    id: "cloud_sage",
    title: "Cloud Sage",
    description: "Complete Cloud certification",
    icon: "☁️",
    unlocked: false,
  },
  {
    id: "first_project",
    title: "Project Genesis",
    description: "Complete your first project mission",
    icon: "🚀",
    unlocked: false,
  },
  {
    id: "level_5",
    title: "Rising Star",
    description: "Reach Level 5",
    icon: "⭐",
    unlocked: false,
  },
  {
    id: "level_10",
    title: "Expert Developer",
    description: "Reach Level 10",
    icon: "🌟",
    unlocked: false,
  },
  {
    id: "halfway",
    title: "Halfway There",
    description: "Complete 50% of all quests",
    icon: "🎯",
    unlocked: false,
  },
  {
    id: "completionist",
    title: "Completionist",
    description: "Complete all quests",
    icon: "🏆",
    unlocked: false,
  },
];

export const generateQuests = (): Quest[] => {
  const quests: Quest[] = [];

  Object.entries(USER_DATA.skills).forEach(([category, certs]) => {
    certs.forEach((cert, index) => {
      quests.push({
        id: `cert_${category.toLowerCase().replace(/[^a-z]/g, "_")}_${index}`,
        title: cert.title,
        description: `Complete the ${cert.title} certification from ${cert.provider}`,
        xpReward: 50 + Math.floor(Math.random() * 30),
        type: "certification",
        target: cert.link,
        completed: false,
      });
    });
  });

  USER_DATA.projects.forEach((proj, index) => {
    quests.push({
      id: `proj_${index}`,
      title: proj.title,
      description: `Build and deploy ${proj.title} using ${proj.stack || "various technologies"}`,
      xpReward: 30 + Math.floor(Math.random() * 20),
      type: "project",
      target: proj.github,
      completed: false,
    });
  });

  return quests;
};

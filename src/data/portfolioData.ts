export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutIntro: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    fiverr: string;
  };
  fiverrCta: {
    title: string;
    description: string;
    buttonText: string;
    url: string;
  };
  stats: {
    title: string;
    subtitle: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    badge?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  contributionHighlight?: string;
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
  themeColor: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface WhyMeItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  focus: string;
  institution?: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  role: string;
  highlight: string;
  description: string;
  tags: string[];
}

export const portfolioData: {
  personal: PersonalInfo;
  skills: SkillCategory[];
  projects: Project[];
  services: Service[];
  whyMe: WhyMeItem[];
  process: ProcessStep[];
  education: EducationItem[];
  experience: ExperienceItem[];
} = {
  personal: {
    name: "Hapinayan",
    role: "WEB DEVELOPER",
    tagline: "Building modern, responsive and user-focused web experiences.",
    heroHeadline: "Building Modern Web Experiences That Make an Impact.",
    heroSupportingText:
      "I’m a passionate web developer focused on creating modern, responsive and user-friendly websites and web applications.",
    aboutIntro:
      "I’m a web developer passionate about building clean, modern and practical digital experiences. I enjoy turning ideas into responsive websites and web applications with a strong focus on usability, performance and clean development practices.",
    email: "hapinayan.dev@gmail.com",
    socials: {
      github: "https://github.com/hapinayan",
      linkedin: "https://linkedin.com/in/hapinayan",
      fiverr: "https://www.fiverr.com/hapinayan",
    },
    fiverrCta: {
      title: "Need a Website?",
      description: "Let’s build a modern website for your business.",
      buttonText: "Hire Me on Fiverr",
      url: "https://www.fiverr.com/hapinayan",
    },
    stats: [
      {
        title: "Web Development",
        subtitle: "Modern Frontend & Web Stack",
      },
      {
        title: "Responsive Design",
        subtitle: "Flawless on Mobile, Tablet & Desktop",
      },
      {
        title: "Modern UI",
        subtitle: "Clean Aesthetics & Micro-interactions",
      },
      {
        title: "Full-Stack Learning",
        subtitle: "Expanding Backend & Database Systems",
      },
    ],
  },

  skills: [
    {
      title: "Frontend",
      description: "Creating responsive, interactive and accessible user interfaces.",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Angular" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend",
      description: "Building reliable APIs, server logic and data communication.",
      skills: [
        { name: "C#" },
        { name: ".NET" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Database",
      description: "Structuring, querying and managing relational data stores.",
      skills: [
        { name: "MySQL" },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Standard developer tooling for version control and development.",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Visual Studio" },
      ],
    },
  ],

  projects: [
    {
      id: "vaultx",
      title: "VaultX – Personal Digital Vault",
      description:
        "A secure personal digital vault interface designed to organize documents, credentials and personal information through a modern web interface.",
      category: "Security & Web Application",
      badge: "Featured System",
      themeColor: "from-sky-500/20 to-blue-600/10",
      technologies: [
        "React",
        "JavaScript",
        "Local Storage",
        "AES-GCM concept",
        "JWT concept",
        "Tailwind CSS",
      ],
      features: [
        "Login / Register workflow with client authentication checks",
        "Interactive Dashboard with category metric breakdowns",
        "Hierarchical folder management for custom file structures",
        "Document & attachment management with quick-preview",
        "Credential vault with masked passwords & reveal toggle",
        "User profile customization & security parameters",
        "Theme and application preference settings",
        "Integrated Dark mode & high-contrast mode toggle",
        "Notification feed & security activity audit alerts",
        "Two-Factor Authentication (2FA) verification concept",
        "Automated inactivity timer with auto logout protection",
      ],
      demoUrl: "#projects",
      githubUrl: "https://github.com/hapinayan/vaultx",
    },
    {
      id: "campusxconnect",
      title: "CampusXConnect",
      description:
        "A full-stack campus-oriented web application designed to connect students and provide useful campus-related functionality.",
      category: "Full-Stack Web Platform",
      badge: "Full-Stack Project",
      themeColor: "from-cyan-500/20 to-sky-600/10",
      technologies: [
        "Angular",
        "C#",
        ".NET",
        "MySQL",
        "REST API",
        "TypeScript",
      ],
      features: [
        "Student directory & community interaction feeds",
        "Campus events calendar with RSVP & scheduling",
        "Departmental notice board for timely academic announcements",
        "Peer-to-peer resource sharing & study material exchange",
        "Secure RESTful API backend architecture using C# & .NET",
        "Relational database design and queries in MySQL",
        "Role-based access for students and administrators",
      ],
      demoUrl: "#projects",
      githubUrl: "https://github.com/hapinayan/campusxconnect",
    },
    {
      id: "hr-system",
      title: "Next Generation HR & Work Management System",
      description:
        "A web-based HR and work management solution designed to support employee, task and organizational management.",
      category: "Enterprise Web Solution",
      badge: "Analysis & Development",
      contributionHighlight: "Analysis & Solution Development",
      themeColor: "from-blue-600/20 to-indigo-600/10",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "C#",
        "React",
        "Angular",
        "MySQL",
      ],
      features: [
        "Comprehensive employee records and organizational directory",
        "Task delegation, priority tagging and milestone tracking",
        "Leave request submission, review and approval pipelines",
        "Productivity dashboards and department performance reports",
        "System requirement elicitation & solution architecture design",
        "Scalable database schema for robust organizational data",
      ],
      demoUrl: "#projects",
    },
  ],

  services: [
    {
      id: "business-websites",
      title: "Business Websites",
      description:
        "Modern and responsive websites designed to present your business professionally online.",
      iconName: "Briefcase",
      features: [
        "Professional brand-aligned design",
        "Mobile-first responsive layouts",
        "Fast page load optimization",
        "Clear call-to-action pathways",
      ],
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      description:
        "High-impact landing pages crafted to highlight products, campaigns, or services with engaging visual flow.",
      iconName: "Rocket",
      features: [
        "Compelling hero sections",
        "Focused value proposition",
        "Seamless lead capture forms",
        "Conversion-centered UX",
      ],
    },
    {
      id: "portfolio-websites",
      title: "Portfolio Websites",
      description:
        "Distinctive personal and agency portfolios tailored to showcase work, capabilities, and personal branding.",
      iconName: "UserCheck",
      features: [
        "Custom interactive project showcases",
        "Dark & light theme support",
        "Smooth navigation transitions",
        "Clean, maintainable codebase",
      ],
    },
    {
      id: "ecommerce-websites",
      title: "E-Commerce Websites",
      description:
        "Clean and intuitive product showcase interfaces and online store layouts optimized for frictionless browsing.",
      iconName: "ShoppingBag",
      features: [
        "Structured product catalogs",
        "Filterable categories & search",
        "Responsive cart & checkout layouts",
        "Mobile-optimized shopping",
      ],
    },
    {
      id: "responsive-design",
      title: "Responsive Web Design",
      description:
        "Pixel-perfect adaptations ensuring your existing or new website looks flawless across every device resolution.",
      iconName: "Smartphone",
      features: [
        "Mobile, tablet & desktop testing",
        "Touch-friendly interactive elements",
        "Cross-browser compatibility",
        "Optimized asset delivery",
      ],
    },
    {
      id: "custom-web-apps",
      title: "Custom Web Applications",
      description:
        "Interactive web application interfaces built with modern component architectures and practical functionality.",
      iconName: "Code2",
      features: [
        "Component-driven frontend",
        "REST API integration ready",
        "Client-side state management",
        "Clean, scalable architecture",
      ],
    },
  ],

  whyMe: [
    {
      title: "Responsive Design",
      description:
        "Every layout is meticulously designed and tested to look balanced, legible, and intuitive across phones, tablets, and desktops.",
      iconName: "Smartphone",
    },
    {
      title: "Clean Development",
      description:
        "Writing structured, well-organized code with modern standards, making websites fast, dependable, and simple to maintain.",
      iconName: "FileCode2",
    },
    {
      title: "Modern UI",
      description:
        "Focusing on elegant typography, subtle glassmorphism, harmonious color palettes, and micro-interactions that elevate user experience.",
      iconName: "Sparkles",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Listening attentively to project goals, maintaining clear and transparent communication, and delivering reliable solutions on time.",
      iconName: "Handshake",
    },
  ],

  process: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the client's requirements, target audience, and project goals.",
    },
    {
      step: "02",
      title: "Plan",
      description: "Plan the structure, page wireframes, feature list, and user experience.",
    },
    {
      step: "03",
      title: "Build",
      description: "Develop the website with modern technologies, clean code, and responsive design.",
    },
    {
      step: "04",
      title: "Deliver",
      description: "Test, refine, verify performance and responsiveness, and prepare the final website.",
    },
  ],

  education: [
    {
      degree: "Diploma in Software Engineering",
      focus: "Software Development",
      description:
        "Comprehensive coursework covering object-oriented programming, modern web application development, database design, and software engineering methodologies.",
    },
  ],

  experience: [
    {
      title: "VaultX Security Application",
      role: "Frontend & Interface Development",
      highlight: "Personal Project",
      description:
        "Designed and built a modular personal vault web interface implementing client-side storage encryption concepts, credential masking, auto-session logout, and high-contrast theming.",
      tags: ["React", "JavaScript", "AES Concept", "Tailwind CSS"],
    },
    {
      title: "CampusXConnect Platform",
      role: "Full-Stack Development",
      highlight: "Academic Project",
      description:
        "Built a full-stack student networking and resource-sharing application connecting an Angular frontend to a robust C# / .NET RESTful API and MySQL database.",
      tags: ["Angular", "C#", ".NET", "MySQL", "REST API"],
    },
    {
      title: "Next Generation HR & Work Management System",
      role: "Analysis & Solution Development",
      highlight: "Collaborative Project",
      description:
        "Contributed to requirement engineering, functional specifications, and solution development for an organizational system handling employee tasks, attendance, and reporting.",
      tags: ["Analysis", "Solution Design", "React", "C#", "MySQL"],
    },
  ],
};

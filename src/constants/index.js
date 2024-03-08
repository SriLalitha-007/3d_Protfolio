import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
  {
    title: "Content Creator",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ASP.Net Developer",
    company_name: "Specula",
    icon: creator,
    iconBg: "#383E56",
    date: "September 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using ASP.Net MVC and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilizing MongoDB for efficient data storage and implementing data validation, error handling for improved reliability",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Independently developing and deploying web applications for diverse clients using a full-stack approach.",
      "Implementing back-end functionalities and using MongoDB to manage data storage and retrieval efficiently.",
      "Integrating third-party APIs and services to extend the functionality of web applications and improve user experiences",
      "Collaborating closely with clients to understand their needs and requirements, and delivering customized solutions that align with their goals.",
    ],
  },
  {
    title: "Content Developer",
    company_name: "Life Transformation",
    icon: backend,
    iconBg: "#383E56",
    date: "April 2022 - November   2023",
    points: [
      "Developed engaging and informative content across various digital platforms, driving increased user engagement and brand awareness.",
      "Implemented SEO strategies to optimize content visibility.",
      "Identifying areas for improvement and implementing adjustments to enhance effectiveness",
      "Evidenced by higher website traffic, increased social media engagement, and enhanced audience interaction.",
    ],
  },
  // {
  //   title: "Social Media Manager",
  //   company_name: "Life Transformation",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ink Less",
    description:
      "I developed a multi-platform Flutter application enabling users to create, save, and share documents. Utilizing real-time synchronization, all document updates are instantly reflected across all platforms.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      // {
      //   name: "Rest API",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    source_code_link: "https://github.com/SriLalitha-007/Ink_less/tree/master",
  },
  {
    name: "Jokes Website",
    description:
      "I engineered a sophisticated web database app enabling seamless joke management with CURD operations. Users customize viewer permissions, while a search function streamlines data access.",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SriLalitha-007/JokesWebApp1.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

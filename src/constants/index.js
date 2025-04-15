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
  library,
  trucker,
  fm,
  epark,
  c,
  sql,
  python,
  java,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Embedded Systems Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Network/Software Enginering Intern",
    company_name: "Aptech Computer Education",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2020 - Dec 2020",
    points: [
      "Designed, configured and manage network systems effectively.",
      "Maintained detailed documentation for new and existing network infrastructure.",
      "Utilized Cisco packet tracer to simulate Network configuration before physical implementation.",
      "Trained in Android app development using Java and Kotlin.",
    ],
  },
  {
    title: "AI Software Engineer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Integrated a Large Language Model (LLM) into a Django based website to automate handling of product inquiries and order requests via email, enhancing customer interaction and response efficiency.",
      "Developed a Retrieval-Augmented Generation (RAG) solution using ChatGPT, LangChain, and integrated service/product details to enhance response accuracy and relevance by 90%.",
      "Achieved a 50% reduction in the time spent manually sorting and responding to emails by streamlining the process with AI-driven automation.",
    ],
  },
  {
    title: "IT Support Engineer",
    company_name: "Fumman Chemicals",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Nov 2024",
    points: [
      "Diagnosed and resolved hardware, software, or network-related issues.",
      "Assisted with installation, configuration, and maintenance of network equipments and computers.",
      "Developed a Python script to automate repetitive tasks, enhancing efficiency and productivity.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Sept 2024",
    points: [
      "Led the development of a robust parking lot management system, utilizing Flask as the back-end framework to ensure an efficient platform",
      "Implemented a user-friendly interface with HTML, CSS and JS, enhancing the user experience through intuitive navigation and responsive design",
      " Developed a traffic simulation model using Java and AnyLogic, incorporating various traffic scenarios to optimize flow. This led to the creation of an algorithm that reduced wait times at intersections by 20%.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Library API",
    description:
      "A RESTful API designed to manage a digital library system. It allows users to perform operations such as adding, updating, deleting, and retrieving books, authors, and categories. The API supports user authentication, book lending functionality, and tracks borrowing history.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "swagger",
        color: "orange-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/Daniel-timmy/Library-API",
  },
  {
    name: "Trucker",
    description:
      "A web-based application designed to monitor and manage trucking operations by tracking driver activities in real time. The app features GPS map integration for route visualization, driver check-ins/check-outs, trip logging, and delivery status updates.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: trucker,
    source_code_link: "https://github.com/Daniel-timmy/Trucker",
  },
  {
    name: "Frmr'sMrkt",
    description:
      "A digital marketplace that empowers farmers by enabling them to sell their produce directly to consumers, eliminating middlemen and increasing profit margins. The platform features user-friendly product listings, real-time inventory updates, secure payment integration, and location-based discovery to connect local farmers with nearby buyers.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: fm,
    source_code_link: "https://github.com/Daniel-timmy/FRMRMRKT2",
  },
  {
    name: "E-parks",
    description:
      "A smart solution for finding and reserving parking spaces in real time. The platform allows users to search for available spots based on location, view pricing and availability, and book instantly.",
    tags: [
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: epark,
    source_code_link: "https://github.com/Daniel-timmy/E-park",
  },
];
// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, experiences, testimonials, projects };

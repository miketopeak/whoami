/*
   Copyright (C), 2023-2024, Mikael Laine (mikael)
   Author: Mikael Laine
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  memoryGame,
  foremen,
  calculator,
  skyspa,
  sybaris,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faSkype,
  faEnvelope,
};

const introduction = {
  text: [
    "I am Mikael, a seasoned Full-stack Developer.",

		"Seeking a position that utilizes abilities and skills in web development.",
    "Fast-paced, creative web developer with extensive knowledge in various front-end and back-end languages, responsive frameworks, databases, and best code practices.",
    "The aim is to become an exceptional Full- stack developer and make valuable contributions to the technology industry.",
    "Extremely flexible with communication and working hours.",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Arasartara's Gallery",
    description: 'A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.',
    image: memoryGame,
    source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Connect 4',
    description: 'This project implements Connect Four in Python and Pygame, featuring a GUI and gameplay modes for player vs. AI and AI vs. AI. The AI uses the MiniMax algorithm, with optional alpha-beta pruning for improved performance.',
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRkaWp6MDJ1cXNrZmMzaTZ2aXVhcWtndWJpNHg0djRpYWdtYjF3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p49LPwL9yAoZInx28N/giphy.gif",
    source_code_link: 'https://github.com/bl33h/connectFour',
    demo_link: 'https://youtu.be/CBceC2BXJyE',
  },
  {
    name: 'Sybaris Pull Suites',
    description: '--- The Best Romantic Getaway in the United States. A romantic paradise to ignite feelings, rekindle the romance and enjoy quality time together. --- Stack: WordPress, Elementor',
    image: sybaris,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.sybaris.com/',
  },
  {
    name: 'Client-Server Chat',
    description: 'This is a chat application that facilitates communication between multiple clients through a centralized server. The application is designed using socket programming and handles multiple client connections concurrently using threads.',
    image: "https://i.pinimg.com/originals/0e/4a/c3/0e4ac37acbff81cd087aa19692a07a9d.gif",
    source_code_link: 'https://github.com/bl33h/clientServerChat',
    demo_link: 'https://youtu.be/Mk1BNqPz1n4',
  },
  {
    name: 'Visit Our Lands',
    description: 'It is a recommendation system built with React and Supabase. This system focuses on providing tourist recommendations for various locations in Panama.',
    image: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/uvd82gspopw8orvryulc",
    source_code_link: 'https://github.com/bl33h/visitOurLands',
    demo_link: 'https://visitourlands.netlify.app/',
  },
  {
    name: 'Foremen Fiefdom',
    description: '--- At Foremen Fiefdom, they provide smartest of the investment chances in the real estate market and offer products promising highest returns. --- Stack: Nuxt.js, Bootstrap, Laravel',
    image: foremen,
    source_code_link: 'https://github.com/bl33h/exploringTheSpace',
    demo_link: 'https://www.foremenfiefdom.com/',
  },
  {
    name: 'Basic Calculator',
    description: '--- A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. --- Stack: React.js',
    image: calculator,
    source_code_link: 'https://github.com/bl33h/disneyPlusReplica',
    demo_link: 'https://kimoto-calculator.netlify.app/',
  },
  {
    name: '7 Sky Spa',
    description: '--- You can expect the most modern treatment devices, internationally recognized French cosmetic products and a dynamic and competent team. --- Stack: HTML, CSS, JavaScript, PHP',
    image: skyspa,
    source_code_link: 'https://github.com/bl33h/deepDiveOdysseyRaycasting',
    demo_link: 'https://7skyspa.co.uk/',
  }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Neo4j',
    icon: neoIcon,
    description:
      'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};

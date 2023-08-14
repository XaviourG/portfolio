export interface ProjectContent {
  title: string,
  subtitle: string,
  image: string,
  tech: string[],
  description: string,
}

const ProjectsContent: ProjectContent[] = [
  {
    title: 'Organelle',
    subtitle: 'Health Analysis & eCommerce Platform (Web App)',
    image: 'https://media.discordapp.net/attachments/1140589185221275770/1140589478537334794/organelle_project.png?width=1488&height=1116',
    tech: ['NodeJS', 'TypeScript', 'React', 'AWS', 'Docker', 'HCP', 'Python', 'HL7', 'Stripe', 'Jest', 'MySQL'],
    description: "Architected, designed, developed, launched and maintained as team lead then later CEO of Organelle. Machine learning driven blood testing analysis, clinical data pipelines, telehealth consultations, full eCommerce capabilities, and dual practitioner/client interfaces.",
  },
  {
    title: 'XaviourG.com 2.0',
    subtitle: 'Web Portfolio',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140591100109783060/image.png',
    tech: ['NextJS', 'TailwindCSS', 'ThreeJS', 'Typescript', 'React', 'Firebase'],
    description: "A UX optimised showcase of my skills and experience built on the latest and greatest front-end technology.",
  },
  {
    title: 'HL7-Pipeline',
    subtitle: 'Clinical Labs Data Pipeline Automation Tool',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589445838536785/hl7_project.png',
    tech: ['Python', 'Linux', 'HL7', 'AWS-Lambda'],
    description: "A modular service combinging a polling server and lambda microservice that interfaces the popular medical HL7 secure data transfer system with modern AWS based systems.",
  },
  {
    title: 'Lazy Devs Spreadsheet Solution',
    subtitle: 'pdf/csv/xsl parsing tool',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589390494703686/parser_project.jpg',
    tech: ['Python', 'py-pdf'],
    description: "A basic data analysis toolkit for summarising, formating, and extracting information from spreadsheets and pdfs. Initaly developed for parsing recipies from commercial pdfs, later adapted to summarising legacy patient health data.",
  },
  {
    title: 'TTRPG Scenario Generator',
    subtitle: 'Web Based Language Generation Service',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589353794555985/ttrpg_prompter_project.png',
    tech: ['JavaScript', 'CSS', 'HTML'],
    description: "A web-model for randomly producing fantasy role playing senarios then detailing enemy/npc actions within said senarios.",
  },
  {
    title: 'Simple Intentions',
    subtitle: 'Native Android Task Management App',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589366331322408/simple_i_project.png',
    tech: ['Kotlin', 'Android SDK', 'Java'],
    description: "Combining android state management, widgets, and notifications with functional UI to create a self-published app that perfectly suites my productivity style.",
  },
  {
    title: 'Bespoke Notion Calendar',
    subtitle: 'Personal Notion Integrated Calendar Web App',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589396979089510/notion_cal_project.png',
    tech: ["NotionAPI", 'JavaScript', 'CSS', 'HTML', 'NodeJS'],
    description: "A simple web app that interfaces with a Notion (documentation app) to render todo/event documents in streamlined a calendar format.",
  },
  {
    title: 'Poor Mans Jarvis',
    subtitle: 'Voice Recognition Automation Service',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589345665978429/voice_project.png',
    tech: ['Python', 'Voice Recognition', 'Linux'],
    description: "Integration of voice analysis packages trained on my voice to automate simple tasks like turning on bluetooth lights/speakers.",
  },
  {
    title: 'Binary Battleship',
    subtitle: 'Linux Kernel Game',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589451995795466/battleship_project.png',
    tech: ['C', 'Linux'],
    description: "Multithreaded battleship (the board game) simulator written in C. Play battleship against an AI through a terminal rendered UI.",
  },
  {
    title: 'Ragnarok Racer',
    subtitle: 'Windows Platforming Game',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589377244897390/rag_racer_project.png',
    tech: ['Java', 'Sonarcloud', 'Javadoc'],
    description: "A collaborative 28 person university project., I led the design and development of a physics engine, NPC AI, sprite loader, and level builder. + design and story aspects.",
  },
  {
    title: 'Sovereign Fit',
    subtitle: 'Native Android Workout Tracker App',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589333804490844/workout_project.png',
    tech: ['Java', 'Android SDK'],
    description: "Designed, developed, published ~ a personal workout tracking app. Combined templatable workout design systems with in-session tracking, and long term progress visualization.",
  },
  {
    title: 'Houseshare Bets',
    subtitle: 'Social Media/Betting Hybrid App',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589437819039904/houseshare_project.png',
    tech: ['Flutter'],
    description: "Prototype of a housesharing based task management app, ability to share tasks, score housemates task completion, and make bets on highest scoring household member. Team of 4.",
  },
  {
    title: 'Candy Museum',
    subtitle: 'Udemy Web Developer Bootcamp',
    image: 'https://cdn.discordapp.com/attachments/1140589185221275770/1140589423025737809/bootcamp_project.png',
    tech: ['Bootstrap', 'JavaScript', 'CSS', 'HTML'],
    description: "Penultimate project of a udemy course on web developemnt, simple responsive webpage.",
  },
]

export default ProjectsContent;
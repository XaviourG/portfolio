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
    subtitle: 'Digital Pathology Web App',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['NodeJS', 'TypeScript', 'React', 'AWS', 'Docker', 'HCP', 'Python', 'HL7', 'Stripe', 'Jest', 'MySQL'],
    description: "Architected, designed, developed, launched and maintained as team lead then later CEO of Organelle. Machine learning driven blood testing analysis, clinical data pipelines, telehealth consultations, full eCommerce capabilities, and dual practitioner/client interfaces.",
  },
  {
    title: 'XaviourG.com',
    subtitle: 'Web Portfolio',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['NextJS', 'TailwindCSS', 'ThreeJS', 'Typescript', 'React', 'Firebase'],
    description: "A UX optimised showcase of my skills and experience built on the latest and greatest front-end technology.",
  },
  {
    title: 'Simple Intentions',
    subtitle: 'Native Android Task Management App',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['Kotlin', 'Android SDK', 'Java'],
    description: "Combining android state management, widgets, and notifications with functional UI to create self-published app that perfectly suites my productivity style.",
  },
  {
    title: 'Ragnarok Racer',
    subtitle: 'Exe Platforming Game',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['Java', 'Sonarcloud', 'Javadoc'],
    description: "A collaborative 28 person university project I led, it oversaw the design and development of a physics engine, NPC AI, sprite loader, and level builder.",
  },
]

export default ProjectsContent;
export interface ProjectContent {
  title: string,
  image: string,
  tech: string[],
  description: string,
}

const ProjectsContent: ProjectContent[] = [
  {
    title: 'Organelle | Digital Pathology',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['NodeJS', 'TypeScript', 'React', 'AWS', 'Docker'],
    description: "This is a generic description for a template project. I'm guessing this is long enough. But who knows maybe it should be even longer, maybe it should be incredibly stupendously incorduously long.",
  },
  {
    title: 'XaviourG.com | Web Portfolio',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['NodeJS', 'TypeScript', 'React'],
    description: "This is a generic description for a template project. I'm guessing this is long enough. But who knows maybe it should be even longer, maybe it should be incredibly stupendously incorduously long.",
  },
  {
    title: 'template project 3',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/280/759/desktop-wallpaper-funniest-group-weird-stuff-thumbnail.jpg',
    tech: ['NodeJS', 'TypeScript', 'React'],
    description: "This is a generic description for a template project. I'm guessing this is long enough. But who knows maybe it should be even longer, maybe it should be incredibly stupendously incorduously long.",
  },
]

export default ProjectsContent;
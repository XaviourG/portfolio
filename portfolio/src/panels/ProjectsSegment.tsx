import ProjectCard from "@/components/project/projectCard";
import { ReactElement } from "react";

const ProjectsSegment = (): ReactElement => {
  return <div className='flex flex-col w-full p-16'>
    <ProjectCard
      title='Organelle Digital Health Platform'
      image='image'
      tech={['node', 'demons']}
      description='it was gud'
    />
    <ProjectCard
      title='XaviourG.com'
      image='image'
      tech={['node', 'demons']}
      description='it was gud'
    />
    <ProjectCard
      title='Simple Intentions'
      image='image'
      tech={['node', 'demons']}
      description='it was gud'
    />
    <ProjectCard
      title='Sovereign Tool'
      image='image'
      tech={['node', 'demons']}
      description='it was gud'
    />
    <ProjectCard
      title='Ragnarok Racer'
      image='image'
      tech={['node', 'demons']}
      description='it was gud'
    />
  </div>
}

export default ProjectsSegment;

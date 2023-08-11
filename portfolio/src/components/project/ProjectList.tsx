import { ProjectContent } from "@/content/ProjectsContent";
import { ReactElement } from "react";
import ProjectCard from "@/components/project/ProjectCard";

interface props {
  content: ProjectContent[],
}

const ProjectList = ({
  content
}: props): ReactElement => {
  return <div className='p-8 m-8 text-NEUTRAL_LIGHT hover:text-NEUTRAL_LIGHT50 duration-200'>
    {content.map((project, key) => <div key={key}>
      <ProjectCard {...project}/>
    </div>)}
  </div>;
}

export default ProjectList;

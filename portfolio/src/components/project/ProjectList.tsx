import { ProjectContent } from "@/content/ProjectsContent";
import { ReactElement } from "react";
import ProjectCard from "@/components/project/ProjectCard";

interface props {
  content: ProjectContent[],
}

const ProjectList = ({
  content
}: props): ReactElement => {
  return <div className=' p-0 m-0 xl:pt-8 xl:m-8 text-NEUTRAL hover:text-NEUTRAL_LIGHT50 duration-200 z-10'>
    {content.map((project, key) => <div key={key}>
      <ProjectCard {...project}/>
    </div>)}
  </div>;
}

export default ProjectList;

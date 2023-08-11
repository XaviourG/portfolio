import ProjectList from "@/components/project/ProjectList";
import ProjectsContent from "@/content/ProjectsContent";
import { ReactElement } from "react";

const ProjectsSegment = (): ReactElement => {
  return <div className='flex flex-col w-full'>
    <ProjectList content={ProjectsContent}></ProjectList>
  </div>
}

export default ProjectsSegment;

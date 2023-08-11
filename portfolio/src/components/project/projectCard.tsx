import { ReactElement } from "react";

interface props {
  title: string,
  image: string,
  tech: string[],
  description: string,
}

const ProjectCard = ({
  title,
  image,
  tech,
  description,
}: props): ReactElement => {
  return <div className='p-8 m-8 border-2 border-solid border-white'>
    <p>{image}</p>
    <p>{title}</p>
    <p>{description}</p>
    <p>{tech}</p>
  </div>;
}

export default ProjectCard;

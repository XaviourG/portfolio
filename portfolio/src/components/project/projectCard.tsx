import { ReactElement } from "react";
import TechTags from "./TechTags";

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
  return <div className='flex flex-col xl:flex-row p-8 m-8 text-inherit filter saturate-50 hover:saturate-100
  hover:text-NEUTRAL_LIGHT
  duration-100'>
    <div className="w-1/4 max-h-full flex justify-center pl-1 pr-2">
      <div className="w-full border-solid border-2 border-NEUTRAL_DARK bg-NEUTRAL_DARK rounded-2xl">
        <img className="w-full h-full object-cover rounded-2xl" src={image} alt={title} />
      </div>
    </div>
    <div className="w-3/4">
      <h3 className="text-inherit">{title}</h3>
      <p className="text-inherit">{description}</p>
      <TechTags tags={tech}/>
    </div>
  </div>;
}

export default ProjectCard;

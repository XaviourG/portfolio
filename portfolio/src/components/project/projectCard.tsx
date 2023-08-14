import { ReactElement } from "react";
import TechTags from "./TechTags";

interface props {
  title: string,
  subtitle: string,
  image: string,
  tech: string[],
  description: string,
}

const ProjectCard = ({
  title,
  subtitle,
  image,
  tech,
  description,
}: props): ReactElement => {
  return <div className='flex flex-col xl:flex-row p-8 m-8 mb-16 text-inherit filter saturate-50 hover:saturate-100 z-10
  hover:text-NEUTRAL_LIGHT
  duration-100'>
    <div className="w-full xl:w-1/3 max-h-32 flex justify-center pl-1 pr-1 xl:pr-3">
      <div className="w-full border-solid border-2 border-NEUTRAL_DARK bg-NEUTRAL_DARK rounded-2xl">
        <img
          className="w-full h-full object-cover rounded-2xl z-10"
          src={image}
          alt={title}
        />
      </div>
    </div>
    <div className="w-full xl:w-2/q3 pt-3 xl:pt-0">
      <h3 className="text-inherit xl:text-3xl">{title}</h3>
      <p className="text-inherit font-thin text-xs xl:text-lg pb-1">{subtitle}</p>
      <p className="text-inherit font-thin pt-1 pb-2 xl:text-xl">{description}</p>
      <TechTags tags={tech}/>
    </div>
  </div>;
}

export default ProjectCard;

import ThreeJsShowcase from "@/components/threejs/ThreeJsShowcase";
import { ReactElement } from "react";

const ShowcaseSegment = (): ReactElement => {
  return <div className='flex justify-center items-center w-full h-screen'>
    <ThreeJsShowcase/>
  </div>
}

export default ShowcaseSegment;

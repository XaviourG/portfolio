import { MutableRefObject } from "react";

export interface PageRefData {
  aboutRef: MutableRefObject<any>;
  projectsRef: MutableRefObject<any>;
  contactRef: MutableRefObject<any>;
  skillsRef: MutableRefObject<any>;
}
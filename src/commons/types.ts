export enum Technology {
  "vue",
  "java",
  "react",
  "docker",
  "python",
  "express",
  "flutter",
  "firebase",
  "socket.io",
  "typescript",
  "tensorflow",
  "GCP",
}

export type Technologies = Technology[];

export interface Project {
  title: string;
  description: string;
  technologies: Technologies;
  img: string;
  url?: string;
  github?: string;
}

export type Projects = Project[];
export interface Logo {
  name: string;
  img: string;
}

export type Logos = Logo[];

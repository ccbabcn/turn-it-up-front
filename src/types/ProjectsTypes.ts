export interface IProject {
  name: string;
  description: string;
  image: string;
  genre: string[];
  roles: string[];
  id: string;
}

export type ProjectsState = IProject[];

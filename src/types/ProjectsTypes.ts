export interface IProject {
  name: string;
  description: string;
  image: string;
  genres: string[];
  roles: string[];
  id: string;
}

export type ProjectsState = IProject[];

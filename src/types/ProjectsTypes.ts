export interface IProject {
  name: string;
  description: string;
  image: string;
  imagebackup?: string;
  genres: string[];
  roles: string[];
  id: string;
  owner: string;
}

export type ProjectsState = IProject[];

export interface ActualFilter {
  genre?: string;
  role?: string;
}

export interface PaginatedProjects {
  page?: number;
  pagesize?: number;
  nextpage?: string;
  previous?: string;
  total?: number;
  filter?: ActualFilter;
  results: ProjectsState;
  details: ProjectsState;
}

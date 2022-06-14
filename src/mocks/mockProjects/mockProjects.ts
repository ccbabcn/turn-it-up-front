import {
  IProject,
  PaginatedProjects,
  ProjectsState,
} from "../../types/ProjectsTypes";

export const mockProjects: ProjectsState = [
  {
    id: "629b4850703ff9261686d9cd",
    name: "Rock and ron",
    description:
      "Concert for the opening of a new Ron store at Ohio city center",
    image:
      "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
    genres: ["rock", "blues", "pop"],
    roles: ["singer", "keyboard", "ukelele"],
    owner: "user1",
  },
  {
    id: "629b4b59703ff9261686d9d2",
    name: "Blues for blass",
    description: "Last concert of Blass a famous blues guitarrist",
    image:
      "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
    genres: ["blues"],
    roles: ["drummer", "guitarrist", "bassplayer", "singer"],
    owner: "user2",
  },
];

export const mockProject: IProject = {
  id: "629b4850703ff9261686d9cd",
  name: "Rock and ron",
  description: "Concert for the opening of a new Ron store at Ohio city center",
  image:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
  genres: ["rock", "blues", "pop"],
  roles: ["drummer", "guitarrist", "bassplayer", "singer", "keyboard"],
  owner: "user1",
};

export const mockProjectState: PaginatedProjects = {
  page: 0,
  nextpage: "nextPage",
  previous: "prevousPage",
  total: 9,
  filter: { role: "rock" },
  results: mockProjects,
  details: [mockProjects[0]],
};

export const mockProject2: IProject = {
  id: "629b4850703ff9261686d9cd",
  name: "Rock and ron",
  description: "Concert for the opening of a new Ron store at Ohio city center",
  image:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
  genres: ["rock", "blues", "pop"],
  roles: ["singer", "keyboard", "guitarrist"],
  owner: "userId",
};

export const mocKProjectToCreate: IProject = {
  id: "newid",
  name: "new project",
  description: "project to add to the state",
  image: "https://Secreto-Legendario-Tempo-4-1024x683.jpg",
  genres: ["rock", "pop"],
  roles: ["singer", "keyboard", "guitarrist"],
  owner: "user2",
};

const mockFormProject = new FormData();
mockFormProject.append("name", mocKProjectToCreate.name);
mockFormProject.append("description", mocKProjectToCreate.description);
for (const genre of mocKProjectToCreate.genres) {
  mockFormProject.append("genres", genre);
}
for (const role of mocKProjectToCreate.roles) {
  mockFormProject.append("roles", role);
}
mockFormProject.append("owner", mocKProjectToCreate.owner);
mockFormProject.append("id", mocKProjectToCreate.id);

mockFormProject.append("image", mocKProjectToCreate.image);

export const mockProjectFormData = mockFormProject;

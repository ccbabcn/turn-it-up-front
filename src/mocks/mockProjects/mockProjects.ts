import { IProject, ProjectsState } from "../../types/ProjectsTypes";

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

export const mockProject2: IProject = {
  id: "629b4850703ff9261686d9cd",
  name: "Rock and ron",
  description: "Concert for the opening of a new Ron store at Ohio city center",
  image:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
  genres: ["rock", "blues", "pop"],
  roles: ["singer", "keyboard", "ukelele"],
  owner: "user1",
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

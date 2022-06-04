import { Project, ProjectsState } from "../../types/ProjectsTypes";

export const mockProjects: ProjectsState = [
  {
    id: "629b4850703ff9261686d9cd",
    name: "Rock and ron",
    description:
      "Concert for the opening of a new Ron store at Ohio city center",
    image:
      "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
    genre: ["rock"],
    roles: ["drummer", "guitarrist", "bass player", "singer", "keyboard"],
  },
  {
    id: "629b4b59703ff9261686d9d2",
    name: "Blues for blass",
    description: "Last concert of Blass a famous blues guitarrist",
    image:
      "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
    genre: ["blues"],
    roles: ["drummer", "guitarrist", "bass player", "singer"],
  },
];

export const mockProject: Project = {
  id: "629b4850703ff9261686d9cd",
  name: "Rock and ron",
  description: "Concert for the opening of a new Ron store at Ohio city center",
  image:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/04/08105701/Madrid-Secreto-Legendario-Tempo-4-1024x683.jpg",
  genre: ["rock"],
  roles: ["drummer", "guitarrist", "bass player", "singer", "keyboard"],
};

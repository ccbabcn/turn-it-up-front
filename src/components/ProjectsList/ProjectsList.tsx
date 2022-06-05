import { IProject } from "../../types/ProjectsTypes";
import Project from "../Project/Project";
import { ProjectsListStyles } from "./ProjectsListStyles";

interface Props {
  projects: IProject[];
}

const ProjectsList = ({ projects }: Props): JSX.Element => {
  return (
    <ProjectsListStyles>
      <h2>ALL PROJECTS</h2>
      <ul>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </ul>
    </ProjectsListStyles>
  );
};

export default ProjectsList;

import { IProject } from "../../types/ProjectsTypes";
import Project from "../Project/Project";
import { ProjectsListStyles } from "./ProjectsListStyles";

interface Props {
  projects: IProject[];
}

const ProjectsList = ({ projects }: Props): JSX.Element => {
  return (
    <ProjectsListStyles>
      <ul>
        {projects?.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </ul>
    </ProjectsListStyles>
  );
};

export default ProjectsList;

import { IProject } from "../../types/ProjectsTypes";
import Project from "../Project/Project";
import { ProjectsListStyles } from "./ProjectsListStyles";

interface ProjectsListProps {
  projects: IProject[];
}

const ProjectsList = ({ projects }: ProjectsListProps): JSX.Element => {
  return (
    <ProjectsListStyles>
      <ul className="projects-container">
        {projects?.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </ul>
    </ProjectsListStyles>
  );
};

export default ProjectsList;

import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { mockProjects } from "../../mocks/mockProjects/mockProjects";
import { PageStyles } from "../PageStyles";

const ProjectsPage = (): JSX.Element => {
  return (
    <PageStyles>
      <h2>ALL PROJECTS</h2>
      <ProjectsList projects={mockProjects} />
    </PageStyles>
  );
};

export default ProjectsPage;

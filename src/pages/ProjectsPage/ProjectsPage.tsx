import { useEffect } from "react";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadAllProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const ProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects);
  useEffect(() => {
    dispatch(loadAllProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <PageStyles>
        <h2>ALL PROJECTS</h2>
        <ProjectsList projects={projects} />
      </PageStyles>
    </>
  );
};

export default ProjectsPage;

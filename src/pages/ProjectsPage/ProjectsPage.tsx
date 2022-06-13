import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";
import Paginator from "../../components/Paginator/Paginator";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadAllProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const ProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects.results);
  useEffect(() => {
    dispatch(loadAllProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <PageStyles>
        <Filter />
        <h2>ALL PROJECTS</h2>
        <ProjectsList projects={projects} />
        <Paginator />
      </PageStyles>
    </>
  );
};

export default ProjectsPage;

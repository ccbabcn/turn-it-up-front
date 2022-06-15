import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import Navigation from "../../components/Navigation/Navigation";
import Paginator from "../../components/Paginator/Paginator";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadAllProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const ProjectsPage = (): JSX.Element => {
  const queryPrefix = "projects?&";
  const projects = useAppSelector((state) => state.projects.results);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAllProjectsThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Navigation />
      <PageStyles>
        <Filter queryPrefix={queryPrefix} />
        <h2>ALL PROJECTS</h2>
        <ProjectsList projects={projects} />
        <Paginator />
      </PageStyles>
      <Footer />
    </>
  );
};

export default ProjectsPage;

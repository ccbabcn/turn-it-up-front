import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Paginator from "../../components/Paginator/Paginator";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const UserProjectsPage = (): JSX.Element => {
  const queryPrefix = "projects?user=userId&";
  const projects = useAppSelector((state) => state.projects.results);
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadUserProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
      <PageStyles>
        <Filter queryPrefix={queryPrefix} />
        <h2>{username?.toUpperCase()}'S PROJECTS</h2>
        <ProjectsList projects={projects} />
        <Paginator />
      </PageStyles>
      <Footer />
    </>
  );
};

export default UserProjectsPage;

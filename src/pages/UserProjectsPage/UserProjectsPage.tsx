import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Navigation from "../../components/Navigation/Navigation";
import Paginator from "../../components/Paginator/Paginator";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const UserProjectsPage = (): JSX.Element => {
  const queryPrefix = "projects?user=userId&";
  const projects = useAppSelector((state) => state.projects.results);
  const total = useAppSelector((state) => state.projects.total);
  const { username } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadUserProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <PageStyles>
        <Filter queryPrefix={queryPrefix} />
        <h2>
          {username?.toUpperCase()} YOU HAVE {total} PROJECTS
        </h2>
        <ProjectsList projects={projects} />
        <Paginator />
      </PageStyles>
    </>
  );
};

export default UserProjectsPage;

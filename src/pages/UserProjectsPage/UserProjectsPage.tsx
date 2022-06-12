import { useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const UserProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  let projects = useAppSelector((state) => state.projects);
  const { username } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUserProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <PageStyles>
        <h2>
          {username?.toUpperCase()} YOU HAVE {projects.length} PROJECTS
        </h2>
        <ProjectsList projects={projects} />
      </PageStyles>
    </>
  );
};

export default UserProjectsPage;

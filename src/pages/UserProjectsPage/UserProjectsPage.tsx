import { useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserProjectsThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const UserProjectsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects);
  const { username, id } = useAppSelector((state) => state.user);
  const userProjects = projects.filter((project) => project.owner === id);

  useEffect(() => {
    dispatch(loadUserProjectsThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <PageStyles>
        <h2>
          {username?.toUpperCase()} YOU HAVE {userProjects.length} PROJECTS
        </h2>
        <ProjectsList projects={userProjects} />
      </PageStyles>
    </>
  );
};

export default UserProjectsPage;

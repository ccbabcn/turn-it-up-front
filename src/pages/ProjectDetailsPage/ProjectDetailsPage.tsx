import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProjectByIdThunk } from "../../redux/thunks/projectsThunks/projectsThunks";
import { PageStyles } from "../PageStyles";

const ProjectDetailsPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  let project = useAppSelector((state) => state.projects.details);

  useEffect(() => {
    dispatch(getProjectByIdThunk(id as string));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <Navigation />
      <PageStyles>
        <h2>PROJECT DETAILS</h2>
        <ProjectsList projects={project} />
      </PageStyles>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;

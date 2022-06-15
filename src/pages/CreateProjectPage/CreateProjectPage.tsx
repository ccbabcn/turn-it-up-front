import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FormProject from "../../components/forms/FormProject/FormProject";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { PageStyles } from "../PageStyles";

const CreateProjectPage = (): JSX.Element => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Navigation />
      <PageStyles>
        <h2>{id ? "EDIT" : "CREATE"} PROJECT</h2>
        <FormProject />
      </PageStyles>
      <Footer />
    </>
  );
};

export default CreateProjectPage;

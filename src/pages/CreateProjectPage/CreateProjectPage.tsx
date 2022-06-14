import { useParams } from "react-router-dom";
import FormProject from "../../components/forms/FormProject/FormProject";
import Navigation from "../../components/Navigation/Navigation";
import { PageStyles } from "../PageStyles";

const CreateProjectPage = (): JSX.Element => {
  const { id } = useParams();
  return (
    <>
      <Navigation />
      <PageStyles>
        <h2>{id ? "EDIT" : "CREATE"} PROJECT</h2>
        <FormProject />
      </PageStyles>
    </>
  );
};

export default CreateProjectPage;

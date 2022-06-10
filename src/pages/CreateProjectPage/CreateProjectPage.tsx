import FormProject from "../../components/forms/FormProject/FormProject";
import Navigation from "../../components/Navigation/Navigation";
import { PageStyles } from "../PageStyles";

const CreateProjectPage = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <PageStyles>
        <h2>CREATE PROJECT</h2>
        <FormProject />
      </PageStyles>
    </>
  );
};

export default CreateProjectPage;

import FormProject from "../../components/forms/FormProject/FormProject";
import { PageStyles } from "../PageStyles";

const CreateProjectPage = (): JSX.Element => {
  return (
    <PageStyles>
      <h2>CREATE PROJECT</h2>
      <FormProject />
    </PageStyles>
  );
};

export default CreateProjectPage;

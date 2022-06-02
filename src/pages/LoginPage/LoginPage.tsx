import FormLogin from "../../components/forms/FormLogin/FormLogin";
import { PageStyles } from "../PageStyles";

const LoginPage = (): JSX.Element => {
  return (
    <PageStyles>
      <h2>LOGIN</h2>
      <FormLogin />
    </PageStyles>
  );
};

export default LoginPage;

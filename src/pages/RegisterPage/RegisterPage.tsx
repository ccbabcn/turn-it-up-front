import Footer from "../../components/Footer/Footer";
import FormRegister from "../../components/forms/FormRegister/FormRegister";
import Header from "../../components/Header/Header";
import { PageStyles } from "../PageStyles";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <PageStyles>
        <h2>REGISTER</h2>
        <FormRegister />
      </PageStyles>
      <Footer />
    </>
  );
};

export default RegisterPage;

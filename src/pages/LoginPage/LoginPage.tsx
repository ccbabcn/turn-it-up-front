import Footer from "../../components/Footer/Footer";
import FormLogin from "../../components/forms/FormLogin/FormLogin";
import Header from "../../components/Header/Header";
import { PageStyles } from "../PageStyles";

const LoginPage = () => {
  return (
    <>
      <Header />
      <PageStyles>
        <h2>LOGIN</h2>
        <FormLogin />
      </PageStyles>
      <Footer />
    </>
  );
};

export default LoginPage;

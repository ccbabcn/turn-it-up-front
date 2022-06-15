import { ErrorPageStyles } from "../ErrorPage/ErrorPageStyles";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ErrorPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <ErrorPageStyles>
        <div className="message-container">
          <h2>404</h2>
          <span>NOT FOUND PAGE</span>

          <NavLink className="redirect" to="/projects">
            Click here to go to all projects{" "}
          </NavLink>
        </div>

        <img
          className="errorImage"
          src="./images/404background.jpg"
          alt="404 not found page"
        />
      </ErrorPageStyles>
      <Footer />
    </>
  );
};

export default ErrorPage;

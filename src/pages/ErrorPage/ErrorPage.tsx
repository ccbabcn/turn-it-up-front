import { ErrorPageStyles } from "../ErrorPage/ErrorPageStyles";
import { NavLink } from "react-router-dom";

const RegisterPage = (): JSX.Element => {
  return (
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
  );
};

export default RegisterPage;

import { NavLink } from "react-router-dom";
import { HeaderStyles } from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderStyles>
      <h1>
        <NavLink to="/projects">
          <img
            width={178}
            height={100}
            src="./images/logo.png"
            alt="Turn it Up"
          />
        </NavLink>
      </h1>
    </HeaderStyles>
  );
};

export default Header;

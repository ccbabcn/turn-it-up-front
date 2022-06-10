import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element;
};
const PrivateRoute = ({ children }: Props) => {
  const userIsLogged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userIsLogged) {
      navigate("/login");
      return;
    }
  }, [userIsLogged, navigate]);

  return children;
};

export default PrivateRoute;

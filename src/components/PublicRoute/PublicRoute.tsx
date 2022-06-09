import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
  const userIsLogged = useAppSelector((state) => state.user.logged);

  const navigate = useNavigate();

  useEffect(() => {
    if (userIsLogged) navigate("/projects");
  }, [userIsLogged, navigate]);
  if (!userIsLogged) {
    return children;
  }
  return null;
};

export default PublicRoute;

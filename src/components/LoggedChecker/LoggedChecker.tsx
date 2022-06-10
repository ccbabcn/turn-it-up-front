import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  children: JSX.Element;
}
const LoggedChecker = ({ children }: Props) => {
  const navigate = useNavigate();
  const userIsLogged = useAppSelector((state) => state.user.logged);

  useEffect(() => {
    if (userIsLogged) {
      navigate("/projects");
      return;
    }
  }, [userIsLogged, navigate]);

  return children;
};

export default LoggedChecker;

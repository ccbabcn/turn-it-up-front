import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element;
};
const NotLoggedChecker = ({ children }: Props) => {
  const navigate = useNavigate();
  const userIsLogged = useAppSelector((state) => state.user.logged);

  useEffect(() => {
    if (!userIsLogged) {
      navigate("/login");
      return;
    }
  }, [userIsLogged, navigate]);

  return children;
};

export default NotLoggedChecker;

import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLoginActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { UserState } from "../../types/UserTypes";

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token") as string;
  const logged = useAppSelector((state) => state.user.logged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  useEffect(() => {
    if (token) {
      const userData: UserState = jwtDecode(token);

      dispatch(
        userLoginActionCreator({
          id: userData.id,
          username: userData.username,
        })
      );
    }
  }, [dispatch, token]);

  if (!logged) {
    return null;
  } else {
    return children;
  }
};

export default PrivateRoute;

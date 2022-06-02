import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserLoggedIn, UserLogIn } from "../../../types/UserTypes";
import { userLoginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store";

interface AxiosResponse {
  data: { token: string };
}

export const loginThunk =
  (userData: UserLogIn) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL as string;
    const endPoint: string = "user/login";
    const {
      data: { token },
    }: AxiosResponse = await axios.post(`${url}${endPoint}`, userData);

    if (token) {
      localStorage.setItem("token", token);
      const userInfo = jwtDecode<UserLoggedIn>(token);

      dispatch(userLoginActionCreator(userInfo));
    }
  };

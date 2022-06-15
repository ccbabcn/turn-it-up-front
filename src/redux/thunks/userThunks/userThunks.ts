import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  UserLoggedIn,
  UserLogIn,
  UserRegister,
} from "../../../types/UserTypes";
import { userLoginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../../features/uiSlice/uiSlice";
import { correctAction, wrongAction } from "../../../modals/modals";
interface AxiosResponse {
  data: { token: string };
}

export const loginThunk =
  (userData: UserLogIn) => async (dispatch: AppDispatch) => {
    dispatch(loadingOnActionCreator({ loading: true }));
    try {
      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = "user/login";

      const {
        data: { token },
      }: AxiosResponse = await axios.post(`${url}${endPoint}`, userData);

      if (token) {
        localStorage.setItem("token", token);
        const userInfo = jwtDecode<UserLoggedIn>(token);

        dispatch(userLoginActionCreator(userInfo));
        correctAction("Logged in!");
      }
    } catch {
      wrongAction("Couldn't log in, try again");
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };

export const registerThunk =
  (userRegisterData: UserRegister) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingOnActionCreator({ loading: true }));

      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = "user/register";

      await axios.post(`${url}${endPoint}`, userRegisterData);

      correctAction("Registered, you can log in now!");
    } catch (error) {
      dispatch(loadingOffActionCreator({ loading: false }));
      wrongAction("Cannot register, try anoter username or password");
      return "Error creating new user";
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };

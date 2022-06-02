import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  UserLoggedIn,
  UserLogIn,
  UserRegister,
} from "../../../types/UserTypes";
import { userLoginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store";
import { toast } from "react-toastify";
interface AxiosResponse {
  data: { token: string };
}

const correctAction = (message: string) => toast.success(message);
const wrongAction = (message: string) => toast.warning(message);

export const loginThunk =
  (userData: UserLogIn) => async (dispatch: AppDispatch) => {
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
      wrongAction("Something went worng try again");
    }
  };

export const registerThunk =
  (userRegisterData: UserRegister) => async (dispatch: AppDispatch) => {
    try {
      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = "user/register";
      await axios.post(`${url}${endPoint}`, userRegisterData);
      correctAction("Registered, you can log in now!");
    } catch {
      wrongAction("Something went worng try again");
    }
  };

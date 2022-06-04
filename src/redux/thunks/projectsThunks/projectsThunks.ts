import axios, { AxiosResponse } from "axios";
import { wrongAction } from "../../../modals/modals";
import { loadAllProjectsActionCreator } from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store";

export const loadAllProjectsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingOnActionCreator({ loading: true }));

    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL as string;
    const endPoint: string = "projects/projects";

    const {
      data: { projects, status },
    }: AxiosResponse = await axios.get(`${url}${endPoint}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      dispatch(loadAllProjectsActionCreator(projects));
    }
  } catch {
    wrongAction("Something went wrong connecting with the server");
  }
  dispatch(loadingOffActionCreator({ loading: false }));
};

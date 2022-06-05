import axios, { AxiosResponse } from "axios";
import { correctAction, wrongAction } from "../../../modals/modals";
import {
  deleteProjectActionCreator,
  loadAllProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store";

const token = localStorage.getItem("token");
const url = process.env.REACT_APP_API_URL as string;

export const loadAllProjectsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingOnActionCreator({ loading: true }));
    const endPoint: string = "projects";

    const {
      data: { projects },
      status,
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

export const deleteProjectThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingOnActionCreator({ loading: true }));

      const endPoint: string = `projects/${id}`;

      const { status }: AxiosResponse = await axios.delete(
        `${url}${endPoint}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      if (status === 200) {
        dispatch(deleteProjectActionCreator(id));
        correctAction("Project deleted correctly");
      }
    } catch (error) {
      wrongAction("Something went wrong deleting the project");
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };

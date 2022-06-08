import axios, { AxiosResponse } from "axios";
import { correctAction, wrongAction } from "../../../modals/modals";
import { IProject } from "../../../types/ProjectsTypes";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadAllProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store";

export const loadAllProjectsThunk = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL as string;
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
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_API_URL as string;
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

export const createProjectThunk =
  (newProject: IProject) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = `projects/create`;
      dispatch(loadingOnActionCreator({ loading: true }));

      const {
        data: { project },
        status,
      }: AxiosResponse = await axios.post(`${url}${endPoint}`, newProject, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (status === 201) {
        dispatch(createProjectActionCreator(project));
        correctAction("Project created correctly");
      }
    } catch (error) {
      wrongAction("Something went wrong creating the project");
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };

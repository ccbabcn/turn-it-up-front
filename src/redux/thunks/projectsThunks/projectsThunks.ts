import axios, { AxiosResponse } from "axios";
import { correctAction, wrongAction } from "../../../modals/modals";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store";

export const loadAllProjectsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingOnActionCreator({ loading: true }));
    const url = process.env.REACT_APP_API_URL as string;
    const endPoint: string = "projects";
    const token = localStorage.getItem("token");

    const {
      data: { projects },
      status,
    }: AxiosResponse = await axios.get(`${url}${endPoint}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (status === 200) {
      dispatch(loadProjectsActionCreator(projects));
    }
  } catch {
    wrongAction("Something went wrong trying to load the list of projects");
  }
  dispatch(loadingOffActionCreator({ loading: false }));
};

export const loadUserProjectsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingOnActionCreator({ loading: true }));
    const url = process.env.REACT_APP_API_URL as string;
    const endPoint: string = "projects/user";
    const token = localStorage.getItem("token");
    const {
      data: { projects },
      status,
    }: AxiosResponse = await axios.get(`${url}${endPoint}`, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (status === 200) {
      dispatch(loadProjectsActionCreator(projects));
    }
  } catch {}
  dispatch(loadingOffActionCreator({ loading: false }));
};

export const deleteProjectThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingOnActionCreator({ loading: true }));
      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = `projects/${id}`;
      const token = localStorage.getItem("token");

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
  (newProject: FormData) => async (dispatch: AppDispatch) => {
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

export const editProjectThunk =
  (editProject: FormData, idProject: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = `projects/${idProject}`;
      dispatch(loadingOnActionCreator({ loading: true }));
      const { status }: AxiosResponse = await axios.put(
        `${url}${endPoint}`,
        editProject,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (status === 200) {
        correctAction("Project updated correctly");
        loadUserProjectsThunk();
      }
    } catch (error) {
      wrongAction("Something went wrong updating the project");
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };

export const getProjectByIdThunk =
  (idProject: string) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const url = process.env.REACT_APP_API_URL as string;
      const endPoint: string = `projects/${idProject}`;
      dispatch(loadingOnActionCreator({ loading: true }));
      const {
        data: { project },
        status,
      }: AxiosResponse = await axios.get(`${url}${endPoint}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (status === 200) {
        correctAction(`Project ${project.name} loaded correctly`);
      }
    } catch (error) {
      wrongAction("Something went wrong loading the project");
    }
    dispatch(loadingOffActionCreator({ loading: false }));
  };

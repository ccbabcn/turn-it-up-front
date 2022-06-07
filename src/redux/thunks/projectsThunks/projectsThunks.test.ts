import axios from "axios";
import {
  mockProject,
  mockProjects,
  mocKProjectToCreate,
} from "../../../mocks/mockProjects/mockProjects";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadAllProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
  UiState,
} from "../../features/uiSlice/uiSlice";
import {
  createProjectThunk,
  deleteProjectThunk,
  loadAllProjectsThunk,
} from "./projectsThunks";

describe("Given a projectsThunks", () => {
  describe("When loadAllProjectsThunk it's invoked and receives a list of projects", () => {
    test("Then it should call dispatch with loadAllProjectsActionCreator whit that list", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadAllProjectsActionCreator(mockProjects);
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { projects: mockProjects },
        status: 200,
      });

      const thunk = await loadAllProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When loadAllProjectsThunk it's invoked but there's an error", () => {
    test("Then it should call dispatch with loadingon and loadingoff", async () => {
      const dispatch = jest.fn();
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.get = jest.fn().mockRejectedValueOnce(new Error());

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await loadAllProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When deleteProjectThunk it's invoked with a project Id", () => {
    test("Then it should call dispatch with deleteProjectActionCreator with that Id", async () => {
      const dispatch = jest.fn();
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.delete = jest.fn().mockResolvedValueOnce({
        status: 200,
      });

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);
      const expectedDeleteAction = deleteProjectActionCreator(mockProject.id);

      const thunk = await deleteProjectThunk(mockProject.id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedDeleteAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When deleteProjectThunk it's invoked but there's an error", () => {
    test("Then it should call dispatch with loadingon and loadingoff", async () => {
      const dispatch = jest.fn();
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.delete = jest.fn().mockRejectedValueOnce(new Error());

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await deleteProjectThunk(mockProject.id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When createProjectThunk it's invoked with a project", () => {
    test("Then it should call dispatch with deleteProjectActionCreator with the project, and with loadingon and loadingoff actions", async () => {
      const dispatch = jest.fn();
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.post = jest.fn().mockResolvedValueOnce({
        data: { project: mocKProjectToCreate },
        status: 201,
      });

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);
      const expectedCreateAction =
        createProjectActionCreator(mocKProjectToCreate);

      const thunk = await createProjectThunk(mocKProjectToCreate);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedCreateAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When createProjectThunk it's invoked but thre's an error", () => {
    test("Then it should call dispatch with loadingon and loadingoff", async () => {
      const dispatch = jest.fn();
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.post = jest.fn().mockRejectedValueOnce(new Error());

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await createProjectThunk(mocKProjectToCreate);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });
});

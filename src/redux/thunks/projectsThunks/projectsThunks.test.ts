import axios from "axios";
import {
  mockProject,
  mockProjects,
} from "../../../mocks/mockProjects/mockProjects";
import {
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
  UiState,
} from "../../features/uiSlice/uiSlice";
import {
  deleteProjectThunk,
  loadAllProjectsThunk,
  loadUserProjectsThunk,
} from "./projectsThunks";

describe("Given a projectsThunks", () => {
  describe("When loadAllProjectsThunk it's invoked and receives a list of projects", () => {
    test("Then it should call dispatch with loadAllProjectsActionCreator whit that list", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadProjectsActionCreator(mockProjects);
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { projects: mockProjects },
        status: 200,
      });

      const thunk = await loadAllProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When loadAllProjectsThunk it's invoked but there's no response", () => {
    test("Then it should call dispatch with loadingOffActionCreator", async () => {
      const dispatch = jest.fn();
      const mockUiState: UiState = { loading: false };

      const expectedAction = loadingOffActionCreator(mockUiState);
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { projects: {}, status: 404 },
      });

      const thunk = await loadAllProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When loadUserProjectsThunk it's invoked and receives a list of projects", () => {
    test("Then it should call dispatch with loadProjectsActionCreator whit that list", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { projects: mockProjects },
        status: 200,
      });
      const dispatch = jest.fn();
      const expectedAction = loadProjectsActionCreator(mockProjects);
      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await loadUserProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When loadUserProjectsThunk it's invoked but an error occurs", () => {
    test("Then it should call dispatch with loadingOffActionCreator", async () => {
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { projects: mockProjects },
        status: 404,
      });
      const mockUiState: UiState = { loading: false };
      const dispatch = jest.fn();
      const expectedAction = loadingOffActionCreator(mockUiState);

      const thunk = await loadUserProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
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
      const expectedDeleteAction = deleteProjectActionCreator(
        mockProject.id as string
      );

      const thunk = await deleteProjectThunk(mockProject.id as string);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedDeleteAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });
});

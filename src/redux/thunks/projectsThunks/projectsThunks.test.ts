import axios from "axios";
import {
  mockProject,
  mockProjects,
} from "../../../mocks/mockProjects/mockProjects";
import {
  deleteProjectActionCreator,
  loadAllProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
  UiState,
} from "../../features/uiSlice/uiSlice";
import { deleteProjectThunk, loadAllProjectsThunk } from "./projectsThunks";

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

  describe("When loadAllProjectsThunk it's invoked but there's no response", () => {
    test("Then it should call dispatch with loadAllProjectsActionCreator whit that list", async () => {
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
});

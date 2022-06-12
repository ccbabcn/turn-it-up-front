import axios from "axios";
import {
  mockProject,
  mockProjectFormData,
  mockProjects,
  mockProjectState,
  mocKProjectToCreate,
} from "../../../mocks/mockProjects/mockProjects";
import {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "../../features/projectsSlice/projectsSlice";
import {
  loadingOffActionCreator,
  loadingOnActionCreator,
  UiState,
} from "../../features/uiSlice/uiSlice";
import {
  createProjectThunk,
  deleteProjectThunk,
  editProjectThunk,
  getProjectByIdThunk,
  loadAllProjectsThunk,
  loadUserProjectsThunk,
} from "./projectsThunks";

describe("Given a projectsThunks", () => {
  describe("When loadAllProjectsThunk it's invoked and receives a list of projects", () => {
    test("Then it should call dispatch with loadAllProjectsActionCreator whit that list", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadProjectsActionCreator(mockProjectState);
      axios.get = jest.fn().mockResolvedValueOnce({
        data: mockProjectState,
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
        data: mockProjectState,
        status: 200,
      });
      const dispatch = jest.fn();
      const expectedAction = loadProjectsActionCreator(mockProjectState);
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
        data: { userProjects: mockProjects },
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

  describe("When createProjectThunk it's invoked with a project", () => {
    test("Then it should call dispatch with createProjectActionCreator whit that project and turn on and off the loading modal", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.post = jest.fn().mockResolvedValueOnce({
        data: { project: mocKProjectToCreate },
        status: 201,
      });
      const dispatch = jest.fn();
      const expectedAction = createProjectActionCreator(mocKProjectToCreate);
      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await createProjectThunk(mockProjectFormData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When createProjectThunk it's invoked but an error occurs", () => {
    test("Then it should call dispatch with loadingOffActionCreator", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.post = jest.fn().mockRejectedValueOnce(new Error());
      const dispatch = jest.fn();
      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await createProjectThunk(mockProjectFormData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When editProjectThunk it's invoked with a project", () => {
    test("Then it should call dispatch with createProjectActionCreator whit that project and turn on and off the loading modal", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.put = jest.fn().mockResolvedValueOnce({
        data: { project: mocKProjectToCreate },
        status: 200,
      });
      const dispatch = jest.fn();

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await editProjectThunk(
        mockProjectFormData,
        mocKProjectToCreate.id
      );
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When editProjectThunk it's invoked but an error occurs", () => {
    test("Then it should call dispatch with loading oOn and Off ActionCreator", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.put = jest.fn().mockRejectedValueOnce(new Error());
      const dispatch = jest.fn();
      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await createProjectThunk(mockProjectFormData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When getProjectByIdThunk it's invoked with an a project ID", () => {
    test("Then it should call dispatch with loading On and Off ActionCreator", async () => {
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      axios.get = jest.fn().mockResolvedValueOnce({
        data: { project: mocKProjectToCreate },
        status: 200,
      });
      const dispatch = jest.fn();

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);

      const thunk = await getProjectByIdThunk(mocKProjectToCreate.id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });

  describe("When getProjectByIdThunk it's invoked but there's no response", () => {
    test("Then it should call dispatch with loading On and Off ActionCreator", async () => {
      const dispatch = jest.fn();
      const mockloadingOff: UiState = { loading: false };
      const mockloadingOn: UiState = { loading: true };

      const expectedloadingOnAction = loadingOnActionCreator(mockloadingOn);
      const expectedloadingOffAction = loadingOffActionCreator(mockloadingOff);
      axios.get = jest.fn().mockRejectedValueOnce(new Error());

      const thunk = await getProjectByIdThunk(mocKProjectToCreate.id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedloadingOnAction);
      expect(dispatch).toHaveBeenCalledWith(expectedloadingOffAction);
    });
  });
});

import {
  mockProjectState,
  mocKProjectToCreate,
} from "../../../mocks/mockProjects/mockProjects";
import { PaginatedProjects } from "../../../types/ProjectsTypes";
import projectsReducer, {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
  projectDetailsActionCreator,
} from "./projectsSlice";

describe("Given a projectsReducer", () => {
  describe("When it's loadAllprojects it's call with a list of projects", () => {
    test("Then it should modify the actual status with the list of projects", () => {
      const initialState: PaginatedProjects = { results: [], details: [] };
      const expectedState = mockProjectState;
      const loadProjectsAction = loadProjectsActionCreator(mockProjectState);
      const actualState = projectsReducer(initialState, loadProjectsAction);
      expect(actualState).toEqual(expectedState);
    });
  });

  describe("When it's deleteProject it's call with a project Id", () => {
    test("Then it should modify the actual results status deleting the project with that Id", () => {
      const initialState = mockProjectState;
      const deleteProjectsAction = deleteProjectActionCreator(
        initialState.results[0].id as string
      );
      const actualState = projectsReducer(initialState, deleteProjectsAction);
      expect(actualState).not.toContain(initialState.results[0]);
    });
  });

  describe("When it's createProject it's called with a proejct", () => {
    test("Then it should add the received project to the projects results state", () => {
      const initialState = mockProjectState;
      const createProjectAction =
        createProjectActionCreator(mocKProjectToCreate);
      const actualState = projectsReducer(initialState, createProjectAction);
      expect(actualState.results).toContain(mocKProjectToCreate);
    });
  });

  describe("When it's projectDetails it's called with a proejct Id", () => {
    test("Then it should add the received project to the projects details state", () => {
      const initialState = mockProjectState;
      const projectDetailsAction = projectDetailsActionCreator(
        mockProjectState.results[1]
      );
      const actualState = projectsReducer(initialState, projectDetailsAction);
      expect(actualState.details).toContain(mockProjectState.results[1]);
    });
  });
});

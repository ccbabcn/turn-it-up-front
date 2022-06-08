import {
  mockProjects,
  mocKProjectToCreate,
} from "../../../mocks/mockProjects/mockProjects";
import { ProjectsState } from "../../../types/ProjectsTypes";
import projectsReducer, {
  createProjectActionCreator,
  deleteProjectActionCreator,
  loadProjectsActionCreator,
} from "./projectsSlice";

describe("Given a projectsReducer", () => {
  describe("When it's loadAllprojects it's call with a list of projects", () => {
    test("Then it should modify the actual status with the list of projects", () => {
      const initialState: ProjectsState = [];
      const expectedState = mockProjects;

      const loadProjectsAction = loadProjectsActionCreator(mockProjects);
      const actualState = projectsReducer(initialState, loadProjectsAction);

      expect(actualState).toEqual(expectedState);
    });
  });

  describe("When it's deleteProject it's call with a project Id", () => {
    test("Then it should modify the actual status deleting the project with that Id", () => {
      const initialState = mockProjects;

      const deleteProjectsAction = deleteProjectActionCreator(
        initialState[0].id as string
      );
      const actualState = projectsReducer(initialState, deleteProjectsAction);

      expect(actualState).not.toContain(initialState[0]);
    });
  });

  describe("When it's createProject it's called with a proejct", () => {
    test("Then it should add the received project to the projects state", () => {
      const initialState = mockProjects;

      const createProjectAction =
        createProjectActionCreator(mocKProjectToCreate);
      const actualState = projectsReducer(initialState, createProjectAction);

      expect(actualState).toContain(mocKProjectToCreate);
    });
  });
});

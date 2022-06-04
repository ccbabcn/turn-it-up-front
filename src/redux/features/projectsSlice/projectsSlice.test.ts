import { mockProjects } from "../../../mocks/mockProjects/mockProjects";
import { ProjectsState } from "../../../types/ProjectsTypes";
import projectsReducer, { loadAllProjectsActionCreator } from "./projectsSlice";

describe("Given a projectsReducer", () => {
  describe("When it's loadAllprojects it's call with a list of projects", () => {
    test("Then it should modify the actual status with the list of projects", () => {
      const initialState: ProjectsState = [];
      const expectedState = mockProjects;

      const loadProjectsAction = loadAllProjectsActionCreator(mockProjects);
      const actualState = projectsReducer(initialState, loadProjectsAction);

      expect(actualState).toEqual(expectedState);
    });
  });
});

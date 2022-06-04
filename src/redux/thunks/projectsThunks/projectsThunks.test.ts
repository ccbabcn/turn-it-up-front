import axios from "axios";
import { mockProjects } from "../../../mocks/mockProjects/mockProjects";
import { loadAllProjectsActionCreator } from "../../features/projectsSlice/projectsSlice";
import { loadAllProjectsThunk } from "./projectsThunks";

describe("Given a projectsThunks", () => {
  describe("When loadAllProjectsThunk it's invoked and receives a list of projects", () => {
    test("Then it should call dispatch with loadAllProjectsActionCreator whit that list", async () => {
      const dispatch = jest.fn();
      const expectedAction = loadAllProjectsActionCreator(mockProjects);
      axios.get = jest.fn().mockResolvedValueOnce({
        data: { projects: mockProjects, status: 200 },
      });

      const thunk = await loadAllProjectsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

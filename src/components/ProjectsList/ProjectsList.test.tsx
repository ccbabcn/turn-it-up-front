import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockProjects } from "../../mocks/mockProjects/mockProjects";
import store from "../../redux/store";
import ProjectsList from "./ProjectsList";

describe("Given ProjectList component", () => {
  describe("When it's invoked with a list of two projects", () => {
    test("Then it should render a list of two projects", () => {
      const expectedNumberOfProjects = 2;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProjectsList projects={mockProjects} />
          </BrowserRouter>
        </Provider>
      );

      const totalNumberofProjects = screen.getAllByRole("listitem");

      expect(totalNumberofProjects).toHaveLength(expectedNumberOfProjects);
    });
  });
});

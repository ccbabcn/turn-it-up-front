import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { mockProject } from "../../mocks/mockProjects/mockProjects";
import Project from "./Project";

describe("Given Project component", () => {
  describe("When it's invoked with a project as a prop", () => {
    test("Then it should render a heading with the project name", () => {
      const projectName = mockProject.name.toUpperCase();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject} />
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: /ROCK AND RON/i,
      });

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedHeading).toHaveTextContent(projectName);
    });

    test("Then it should render a pharragraph with the project genres and roles", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject} />
          </BrowserRouter>
        </Provider>
      );

      const expectedRolesText = screen.getByText(
        /drummer, guitarrist, bass player, singer & keyboard/i
      );
      const expectedGenresText = screen.getByText(
        /this rock, blues & pop project needs:/i
      );

      expect(expectedRolesText).toBeInTheDocument();
      expect(expectedGenresText).toBeInTheDocument();
    });
  });
});

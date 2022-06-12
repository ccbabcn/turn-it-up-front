import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import {
  mockProject,
  mockProject2,
} from "../../mocks/mockProjects/mockProjects";
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
        /drummer, guitarrist, bassplayer, singer & keyboard/i
      );
      const expectedGenresText = screen.getByText(
        /this rock, blues & pop project needs:/i
      );

      expect(expectedRolesText).toBeInTheDocument();
      expect(expectedGenresText).toBeInTheDocument();
    });

    test("Then it should render three buttons", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject} />
          </BrowserRouter>
        </Provider>
      );

      const createdNumberofButton = screen.getAllByRole("button");

      expect(createdNumberofButton).toHaveLength(2);
    });

    test("Then it should render three icons matching the project roles drummer, bassplayer and guitarrist", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject} />
          </BrowserRouter>
        </Provider>
      );

      const drummerIcon = screen.getByTitle(/drummer/i);
      const bassPlayerIcon = screen.getByTitle(/bassplayer/i);
      const guitarristIcon = screen.getByTitle(/guitarrist/i);

      expect(drummerIcon).toBeInTheDocument();
      expect(bassPlayerIcon).toBeInTheDocument();
      expect(guitarristIcon).toBeInTheDocument();
    });

    test("Then it should render three icons matching the project roles singer, keyboard and otherrole", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject2} />
          </BrowserRouter>
        </Provider>
      );

      const keyboardIcon = screen.getByTitle(/keyboard/i);
      const singertIcon = screen.getByTitle(/singer/i);

      expect(keyboardIcon).toBeInTheDocument();
      expect(singertIcon).toBeInTheDocument();
    });
  });
});

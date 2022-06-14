import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import {
  mockProject,
  mockProject2,
} from "../../mocks/mockProjects/mockProjects";
import Project from "./Project";
import { UserState } from "../../types/UserTypes";
import { mockUserLogged } from "../../mocks/mockUsers/mockUsers";
import userEvent from "@testing-library/user-event";
import { deleteProjectActionCreator } from "../../redux/features/projectsSlice/projectsSlice";
import { deleteProjectThunk } from "../../redux/thunks/projectsThunks/projectsThunks";

let mockuserState: UserState;

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockuserState.id,
}));

describe("Given Project component", () => {
  describe("When it's invoked with a project as a prop", () => {
    test("Then it should render a heading with the project name", () => {
      mockuserState = mockUserLogged;
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
      mockuserState = mockUserLogged;
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
      mockuserState = mockUserLogged;
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
      mockuserState = mockUserLogged;
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

    test("Then it should render three icons matching the project roles singer, keyboard and guitarrist", () => {
      mockuserState = mockUserLogged;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject2} />
          </BrowserRouter>
        </Provider>
      );

      const keyboardIcon = screen.getByTitle(/keyboard/i);
      const singertIcon = screen.getByTitle(/singer/i);
      const guitarristrtIcon = screen.getByTitle(/guitarrist/i);

      expect(keyboardIcon).toBeInTheDocument();
      expect(singertIcon).toBeInTheDocument();
      expect(guitarristrtIcon).toBeInTheDocument();
    });
  });
  describe("When it's invoked with a project as a prop, in renders a botton with the text 'delete'", () => {
    test("Then the user shoulbe able to click it", async () => {
      mockuserState = mockUserLogged;

      jest.mock("react-router", () => ({
        useParams: jest
          .fn()
          .mockReturnValue({ id: "629b4850703ff9261686d9cd" }),
      }));

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject2} />
          </BrowserRouter>
        </Provider>
      );

      const deleteButton = screen.getByRole("button", { name: /delete/i });
      userEvent.click(deleteButton);
    });
  });

  describe("When it's invoked with a project as a prop, in renders a botton with the text 'edit'", () => {
    test("Then the user shoulbe able to click it", async () => {
      mockuserState = mockUserLogged;

      jest.mock("react-router", () => ({
        useParams: jest
          .fn()
          .mockReturnValue({ id: "629b4850703ff9261686d9cd" }),
      }));

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject2} />
          </BrowserRouter>
        </Provider>
      );

      const editButton = screen.getByRole("button", { name: /edit/i });
      userEvent.click(editButton);
    });
  });

  describe("When it's invoked with a project as a prop, in renders a botton with the text 'return'", () => {
    test("Then the user shoulbe able to click it", async () => {
      mockuserState = {
        username: "username",
        id: "mockBadId",
        logged: true,
      };

      jest.mock("react-router", () => ({
        useParams: jest.fn().mockReturnValue({ id: "mockId" }),
      }));

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Project project={mockProject2} />
          </BrowserRouter>
        </Provider>
      );

      const returnButton = screen.getByRole("button", { name: /info/i });
      userEvent.click(returnButton);
    });
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given the component Navigation", () => {
  describe("When it's invoked", () => {
    test("The it should render a nav bar with 4 buttons", () => {
      const expectedNumberOfButtoms = 4;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const totalRenderedButton = screen.getAllByRole("button");

      expect(totalRenderedButton).toHaveLength(expectedNumberOfButtoms);
    });
  });

  describe("When it renders the button All and the users clicks on it", () => {
    test("Then it should call navigate with the route '/projects'", () => {
      const expectedRoute = "/projects";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const allProjectsBotton = screen.getByRole("button", { name: /all/i });
      userEvent.click(allProjectsBotton);

      expect(allProjectsBotton).toBeInTheDocument();
      expect(mockUseNavigate).toBeCalledWith(expectedRoute);
    });
  });

  describe("When it renders the button Mine and the users clicks on it", () => {
    test("Then it should call navigate with the route '/my-projects'", () => {
      const expectedRoute = "/my-projects";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const myProjectsBotton = screen.getByRole("button", { name: /mine/i });
      userEvent.click(myProjectsBotton);

      expect(myProjectsBotton).toBeInTheDocument();
      expect(mockUseNavigate).toBeCalledWith(expectedRoute);
    });
  });

  describe("When it renders the button Create and the users clicks on it", () => {
    test("Then it should call navigate with the route '/create'", () => {
      const expectedRoute = "/create-project";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const createButton = screen.getByRole("button", { name: /create/i });
      userEvent.click(createButton);

      expect(createButton).toBeInTheDocument();
      expect(mockUseNavigate).toBeCalledWith(expectedRoute);
    });
  });

  describe("When invoked", () => {
    test("Then it should render a logout button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Provider>
      );

      const logOutButton = screen.getByRole("button", { name: /logout/i });
      userEvent.click(logOutButton);

      expect(logOutButton).toBeInTheDocument();
    });
  });
});

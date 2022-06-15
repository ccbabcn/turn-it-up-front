import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { mockUserLogged } from "./mocks/mockUsers/mockUsers";
import store from "./redux/store";

jest.mock("jwt-decode", () => () => mockUserLogged);

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given an App component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text `Turn it Up`", async () => {
      const expectedButtonText = "Turn it Up";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: expectedButtonText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});

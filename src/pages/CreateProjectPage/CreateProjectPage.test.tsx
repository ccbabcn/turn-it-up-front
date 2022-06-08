import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import CreateProjectPage from "./CreateProjectPage";

describe("Given a RegisterPage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text 'REGISTER'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateProjectPage />
          </BrowserRouter>
        </Provider>
      );

      const renderedHeading = screen.getByRole("heading", {
        name: /create project/i,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});

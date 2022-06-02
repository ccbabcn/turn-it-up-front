import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginPage from "./LoginPage";
import reactTestRenderer from "react-test-renderer";

describe("Given a LoginPage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text 'LOGIN'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const renderedHeading = screen.getByRole("heading", {
        name: /expectedHeading/i,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
  describe("When the component is rendered", () => {
    test("Then it should match it's snapshot", () => {
      const loginPageSnap = reactTestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      expect(loginPageSnap).toMatchSnapshot();
    });
  });
});

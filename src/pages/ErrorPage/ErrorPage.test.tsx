import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import ErrorPage from "./ErrorPage";

describe("Given ErrorPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a the message 404 not found page", () => {
      const spanText = "NOT FOUND PAGE";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ErrorPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: /404/i,
        level: 2,
      });
      const expectedSpan = screen.getByText(spanText);
      const expectedLink = screen.getByRole("link", { name: /projects/i });

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedSpan).toBeInTheDocument();
      expect(expectedLink).toBeInTheDocument();
    });
  });
});

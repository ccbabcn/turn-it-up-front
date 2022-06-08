import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

describe("Given the component Navigation", () => {
  describe("When it's invoked", () => {
    test("The it shoul render a nav bar with 4 buttons", () => {
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
});

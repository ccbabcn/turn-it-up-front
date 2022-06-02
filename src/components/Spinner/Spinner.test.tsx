import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Spinner from "./Spinner";

describe("Given a Spinner component", () => {
  describe("When it's invoked", () => {
    test("The it should render the text 'LOADING...'", () => {
      const expectedText = "LOADING...";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Spinner />
          </BrowserRouter>
        </Provider>
      );

      const renderedText = screen.getByText(expectedText);

      expect(renderedText).toBeInTheDocument();
    });
  });
});

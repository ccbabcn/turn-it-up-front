import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Header from "./Header";

describe("Given Header component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading with the text 'Turn it Up'", () => {
      const expectedText = "Turn it Up";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});

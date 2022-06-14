import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Footer from "./Footer";

describe("Given Footer component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a a total of 12 list element and a copyeright text", () => {
      const totalNumberofListElements = 12;
      const copyrightText =
        "Copyright ©2022 more info about turn it up created by cristian bermúdez";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </Provider>
      );

      const expectList = screen.getAllByRole("listitem");
      const expectedText = screen.getByText(copyrightText);

      expect(expectList).toHaveLength(totalNumberofListElements);
      expect(expectedText).toBeInTheDocument();
    });
  });
});

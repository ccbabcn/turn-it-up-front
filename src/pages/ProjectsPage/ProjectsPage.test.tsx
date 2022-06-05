import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import ProjectsPage from "./ProjectsPage";

describe("Given a ProjectsPage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text 'ALL PROJECTS'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProjectsPage />
          </BrowserRouter>
        </Provider>
      );

      const renderedHeading = screen.getByRole("heading", {
        name: /all projects/i,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import ProjectDetailsPage from "./ProjectDetailsPage";

describe("Given a ProjectsPage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text 'projects'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProjectDetailsPage />
          </BrowserRouter>
        </Provider>
      );

      const renderedHeading = screen.getByRole("heading", {
        name: /project details/i,
      });

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});

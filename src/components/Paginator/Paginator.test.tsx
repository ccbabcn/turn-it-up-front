import Paginator from "./Paginator";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";
import userEvent from "@testing-library/user-event";

describe("Given Paginator component", () => {
  describe("When it's invoked", () => {
    test("Then it should render two buttons name 'previous' and 'next'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Paginator />
          </BrowserRouter>
        </Provider>
      );

      const expectedPreviousButton = screen.getByRole("button", {
        name: /previous/i,
      });
      const expectedNextButton = screen.getByRole("button", {
        name: /next/i,
      });

      expect(expectedPreviousButton).toBeInTheDocument();
      expect(expectedNextButton).toBeInTheDocument();
    });
  });

  describe("When it's invoked and user click on next button", () => {
    test("Then it should render two buttons name 'previous' and 'next'", () => {
      const dispatch = jest.fn();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Paginator />
          </BrowserRouter>
        </Provider>
      );

      const expectedNextButton = screen.getByRole("button", {
        name: /next/i,
      });
      userEvent.click(expectedNextButton);

      dispatch(loadProjectsThunkbyQuery(""));

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and user click on previous button", () => {
    test("Then it should render two buttons name 'previous' and 'next'", () => {
      const dispatch = jest.fn();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Paginator />
          </BrowserRouter>
        </Provider>
      );

      const expectedPreviousButton = screen.getByRole("button", {
        name: /previous/i,
      });
      userEvent.click(expectedPreviousButton);

      dispatch(loadProjectsThunkbyQuery(""));

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

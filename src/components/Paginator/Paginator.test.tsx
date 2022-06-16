import Paginator from "./Paginator";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";
import userEvent from "@testing-library/user-event";
import * as hooks from "../../redux/hooks";

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

  describe("When it's invoked, renders next button and user click on it", () => {
    test("Then it should dispatch loadProjectsThunkbyQuery and scroll to 0,0", () => {
      const dispatch = jest.fn();
      window.scroll = jest.fn();

      jest.spyOn(hooks, "useAppSelector").mockImplementation(() => ({
        nextpage: "mockUrl",
        results: ["", "", ""],
        total: 8,
      }));
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
      expect(window.scroll).toHaveBeenCalledWith(0, 0);
    });
  });

  describe("When it's invoked, renders nexprevious button and user click on it", () => {
    test("Then it should dispatch loadProjectsThunkbyQuery and scroll to 0,0", async () => {
      const dispatch = jest.fn();
      window.scroll = jest.fn();

      jest
        .spyOn(hooks, "useAppSelector")
        .mockImplementation(() => ({ previous: "mockUrl", results: [] }));

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

      await userEvent.click(expectedPreviousButton);
      await dispatch(loadProjectsThunkbyQuery(""));

      expect(dispatch).toHaveBeenCalled();
      expect(window.scroll).toHaveBeenCalledWith(0, 0);
    });
  });
});

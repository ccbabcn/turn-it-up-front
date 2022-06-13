import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { loadProjectsThunkbyQuery } from "../../redux/thunks/projectsThunks/projectsThunks";
import Filter from "./Filter";

describe("Given Filter component", () => {
  describe("When it's invoked", () => {
    test("Then it should render two divs with the texts 'genres' and 'roles'", () => {
      const mockQuery = "mockQuery";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Filter queryPrefix={mockQuery} />
          </BrowserRouter>
        </Provider>
      );

      const expectedGenres = screen.getByText(/genres/i);
      const expectedRoles = screen.getByText(/roles/i);

      expect(expectedGenres).toBeInTheDocument();
      expect(expectedRoles).toBeInTheDocument();
    });
  });

  describe("When it's invoked and the user clicks on 'genres'", () => {
    test("Then it should show a clickable list with all the genres that call dispatch when clicked", () => {
      const mockQuery = "mockQuery";
      const dispatch = jest.fn();
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Filter queryPrefix={mockQuery} />
          </BrowserRouter>
        </Provider>
      );

      const expectedGenres = screen.getByText(/roles/i);
      userEvent.click(expectedGenres);

      const expectedRockListElement = screen.getByRole("listitem", {
        name: /rock/i,
      });
      userEvent.click(expectedRockListElement);

      const expectedBluesListElement = screen.getByRole("listitem", {
        name: /blues/i,
      });
      userEvent.click(expectedBluesListElement);

      const expectedPopListElement = screen.getByRole("listitem", {
        name: /pop/i,
      });
      userEvent.click(expectedPopListElement);

      const expectedFolkListElement = screen.getByRole("listitem", {
        name: /folk/i,
      });
      userEvent.click(expectedFolkListElement);

      const expectedAllListElement = screen.getByRole("listitem", {
        name: /allgenres/i,
      });
      userEvent.click(expectedAllListElement);

      dispatch(loadProjectsThunkbyQuery(mockQuery));

      expect(expectedGenres).toBeInTheDocument();
      expect(expectedRockListElement).toBeInTheDocument();
      expect(expectedBluesListElement).toBeInTheDocument();
      expect(expectedPopListElement).toBeInTheDocument();
      expect(expectedFolkListElement).toBeInTheDocument();
      expect(expectedAllListElement).toBeInTheDocument();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and the user clicks on 'roles'", () => {
    test("Then it should show a clickable list with all the roles that call dispatch when clicked", () => {
      const mockQuery = "mockQuery";
      const dispatch = jest.fn();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Filter queryPrefix={mockQuery} />
          </BrowserRouter>
        </Provider>
      );

      const expectedRoles = screen.getByText(/roles/i);
      userEvent.click(expectedRoles);

      const expectedGuitarristListElement = screen.getByRole("listitem", {
        name: /guitarrist/i,
      });
      userEvent.click(expectedGuitarristListElement);

      const expectedSingerListElement = screen.getByRole("listitem", {
        name: /singer/i,
      });
      userEvent.click(expectedSingerListElement);

      const expectedBassPlayerListElement = screen.getByRole("listitem", {
        name: /bassplayer/i,
      });
      userEvent.click(expectedBassPlayerListElement);

      const expectedDrummerListElement = screen.getByRole("listitem", {
        name: /drummer/i,
      });
      userEvent.click(expectedDrummerListElement);

      const expectedKeyboardListElement = screen.getByRole("listitem", {
        name: /keyboard/i,
      });
      userEvent.click(expectedKeyboardListElement);

      const expectedOtherListElement = screen.getByRole("listitem", {
        name: /other/i,
      });
      userEvent.click(expectedOtherListElement);

      const expectedAllListElement = screen.getByRole("listitem", {
        name: /allroles/i,
      });
      userEvent.click(expectedAllListElement);

      dispatch(loadProjectsThunkbyQuery(mockQuery));

      expect(expectedRoles).toBeInTheDocument();
      expect(expectedGuitarristListElement).toBeInTheDocument();
      expect(expectedSingerListElement).toBeInTheDocument();
      expect(expectedBassPlayerListElement).toBeInTheDocument();
      expect(expectedDrummerListElement).toBeInTheDocument();
      expect(expectedKeyboardListElement).toBeInTheDocument();
      expect(expectedOtherListElement).toBeInTheDocument();
      expect(expectedAllListElement).toBeInTheDocument();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import FormProject from "./FormProject";

describe("Given a FormProject component", () => {
  describe("When an user only types 'Rock project' in the project name input field", () => {
    test("Then the value of the name input field should be 'Rock project' but the create buttom shall remain disable", () => {
      const projectNameTextField = "Project name";
      const inputUserNAme = "Rock project";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormProject />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /create/i,
      });

      const usernameField = screen.getByLabelText(projectNameTextField);
      userEvent.type(usernameField, inputUserNAme);

      expect(usernameField).toHaveValue(inputUserNAme);
      expect(createdButton).toBeDisabled();
    });
  });

  describe("When a user types a name, username and a password in the respective form fields", () => {
    test("Then the button register should be able and the user should be able to click it", () => {
      const projectNameTextField = "Project name";
      const projectNameUserInput = "Rock Project";

      const descriptionTextField = "Description";
      const descriptionUserInput = "marta";

      const imageTextField = "Choose image";
      const imageUserInput = "rockimage.jpg" as unknown as File;

      const projectRockGenreLabelText = "Rock";
      const projectRoleLabelText = "Guitarrist";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormProject />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /create/i,
      });

      const projectnameField = screen.getByLabelText(projectNameTextField);
      userEvent.type(projectnameField, projectNameUserInput);
      const projectDescriptionField =
        screen.getByLabelText(descriptionTextField);
      userEvent.type(projectDescriptionField, descriptionUserInput);
      const projectImageField = screen.getByLabelText(imageTextField);
      userEvent.upload(projectImageField, imageUserInput);
      const projectGenreField = screen.getByLabelText(
        projectRockGenreLabelText
      );
      userEvent.click(projectGenreField);

      const projectRoleField = screen.getByLabelText(projectRoleLabelText);
      userEvent.click(projectRoleField);

      expect(projectnameField).toHaveValue(projectNameUserInput);
      expect(projectDescriptionField).toHaveValue(descriptionUserInput);
      expect(projectImageField).not.toBeNull();
      expect(projectGenreField).toBeChecked();

      expect(createdButton).toBeEnabled();
      userEvent.click(createdButton);
      expect(projectnameField).toHaveValue("");
      expect(projectDescriptionField).toHaveValue("");
    });
  });
});

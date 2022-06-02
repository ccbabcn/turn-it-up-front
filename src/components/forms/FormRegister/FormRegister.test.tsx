import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import FormRegister from "./FormRegister";

describe("Given a FormRegister component", () => {
  describe("When an user only types 'hello wolrd' in the username input field", () => {
    test("Then the value of the username input field should be 'hello wolrd' but the register buttom shall remain disable", () => {
      const usernameTextField = "Username";
      const inputUserNAme = "hello wolrd";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormRegister />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /register/i,
      });

      const usernameField = screen.getByLabelText(usernameTextField);
      userEvent.type(usernameField, inputUserNAme);

      expect(usernameField).toHaveValue(inputUserNAme);
      expect(createdButton).toBeDisabled();
    });
  });

  describe("When a user types a name, username and a password in the respective form fields", () => {
    test("Then the button register should be able and the user should be able to click it", () => {
      const nameTextField = "Name";
      const inputNAme = "marta";
      const usernameTextField = "Username";
      const inputUserNAme = "marta";
      const passwordTextField = "Password";
      const inputpassword = "marta";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormRegister />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /register/i,
      });

      const nameField = screen.getByLabelText(nameTextField);
      userEvent.type(nameField, inputNAme);
      const usernameField = screen.getByLabelText(usernameTextField);
      userEvent.type(usernameField, inputUserNAme);
      const pasdwordField = screen.getByLabelText(passwordTextField);
      userEvent.type(pasdwordField, inputpassword);

      expect(nameField).toHaveValue(inputNAme);
      expect(usernameField).toHaveValue(inputUserNAme);
      expect(pasdwordField).toHaveValue(inputpassword);

      expect(createdButton).toBeEnabled();
      userEvent.click(createdButton);
      expect(nameField).toHaveValue("");
      expect(usernameField).toHaveValue("");
      expect(pasdwordField).toHaveValue("");
    });
  });
});

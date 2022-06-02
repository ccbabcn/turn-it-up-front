import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import FormLogin from "./FormLogin";

describe("Given a FormLogin component", () => {
  describe("When an user only types 'hello wolrd' in the username input field", () => {
    test("Then the value of the username input field should be 'hello wolrd' but the register buttom shall remain disable", () => {
      const usernameTextField = "Username";
      const inputUserNAme = "hello wolrd";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormLogin />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /login/i,
      });

      const usernameField = screen.getByLabelText(usernameTextField);
      userEvent.type(usernameField, inputUserNAme);

      expect(usernameField).toHaveValue(inputUserNAme);
      expect(createdButton).toBeDisabled();
    });
  });

  describe("When a user types a username and a password in the respective form fields", () => {
    test("Then the button login should be enable and the user should be able to click it", () => {
      const usernameTextField = "Username";
      const inputUserNAme = "marta";
      const passwordTextField = "Password";
      const inputpassword = "marta";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FormLogin />
          </BrowserRouter>
        </Provider>
      );

      const createdButton = screen.getByRole("button", {
        name: /login/i,
      });

      const usernameField = screen.getByLabelText(usernameTextField);
      userEvent.type(usernameField, inputUserNAme);
      const pasdwordField = screen.getByLabelText(passwordTextField);
      userEvent.type(pasdwordField, inputpassword);

      expect(usernameField).toHaveValue(inputUserNAme);
      expect(pasdwordField).toHaveValue(inputpassword);

      expect(createdButton).toBeEnabled();
      userEvent.click(createdButton);
      expect(usernameField).toHaveValue("");
      expect(pasdwordField).toHaveValue("");
    });
  });
});

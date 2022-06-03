import axios from "axios";
import {
  UserLoggedIn,
  UserLogIn,
  UserRegister,
} from "../../../types/UserTypes";
import {
  loadingOffActionCreator,
  UiState,
} from "../../features/uiSlice/uiSlice";
import { userLoginActionCreator } from "../../features/userSlice/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

const userLoggedIn: UserLoggedIn = {
  username: "testuser",
  id: "testID",
};

jest.mock("jwt-decode", () => () => userLoggedIn);

describe("Given a userThunks", () => {
  describe("When loginThunk it's invoked with a correct username and correct password", () => {
    test("Then it should call dispatch with loginActionCreator with those", async () => {
      const dispatch = jest.fn();

      const userData: UserLogIn = {
        username: "testuser",
        password: "testuser",
      };
      const expectedAction = userLoginActionCreator(userLoggedIn);
      axios.post = jest
        .fn()
        .mockResolvedValue({ data: { token: "toquencito" } });

      const thunk = await loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When registerThunk it's invoked with correct name, username and password", () => {
    test("Then it should call dispatch with loadingOffActionCreator", async () => {
      const dispatch = jest.fn();

      const userToRegister: UserRegister = {
        name: "paco",
        username: "paco",
        password: "paco",
      };
      const loadingOf: UiState = {
        loading: false,
      };
      axios.post = jest.fn();

      const expectedAction = loadingOffActionCreator(loadingOf);
      const thunk = await registerThunk(userToRegister);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When registerThunk it's invoked with incorrect data", () => {
    test("Then it should call dispatch with loadingOffActionCreator", async () => {
      const dispatch = jest.fn();

      const userToRegister: UserRegister = {
        name: "",
        username: "",
        password: "",
      };
      const loadingOf: UiState = {
        loading: false,
      };
      axios.post = jest.fn().mockRejectedValueOnce(new Error());

      const expectedAction = loadingOffActionCreator(loadingOf);
      const thunk = await registerThunk(userToRegister);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

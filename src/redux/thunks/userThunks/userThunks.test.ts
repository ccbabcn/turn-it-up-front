import axios from "axios";
import { UserLoggedIn, UserLogIn } from "../../../types/UserTypes";
import { userLoginActionCreator } from "../../features/userSlice/userSlice";
import { loginThunk } from "./userThunks";

const userLoggedIn: UserLoggedIn = {
  username: "testuser",
  id: "testID",
};

jest.mock("jwt-decode", () => () => userLoggedIn);

describe("Given the a userThunks", () => {
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
});

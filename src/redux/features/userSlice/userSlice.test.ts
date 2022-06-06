import {
  mockInitialUserState,
  mockUserLogged,
} from "../../../mocks/mockUsers/mockUsers";
import { UserState } from "../../../types/UserTypes";
import userReducer, {
  userLoginActionCreator,
  userLogOutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with a userLogInAction and a user", () => {
    test("Then it should return the user loggedIn", () => {
      const userInitialState: UserState = {
        id: "1",
        username: "user89",
        logged: false,
      };
      const userLoggedState: UserState = {
        id: "1",
        username: "user89",
        logged: true,
      };

      const userLogInAction = userLoginActionCreator(userInitialState);
      const userLogged = userReducer(userInitialState, userLogInAction);

      expect(userLogged).toEqual(userLoggedState);
    });
  });

  describe("When its invoked with a userLogOut action and the state has a user loged in", () => {
    test("Then it should return the initial state without an logged in user", () => {
      const userLogOutAction = userLogOutActionCreator(mockUserLogged);
      const expectedState = userReducer(mockUserLogged, userLogOutAction);

      expect(expectedState).toEqual(mockInitialUserState);
    });
  });
});

import { UserLogIn, UserState } from "../../types/UserTypes";

export const mockUserNotLogged: UserState = {
  username: "username",
  id: "userId",
  logged: false,
};

export const mockUserLogged: UserState = {
  username: "username",
  id: "userId",
  logged: true,
};

export const mockInitialUserState: UserState = {
  username: "",
  id: "",
  logged: false,
};

export const userToLogIn: UserLogIn = {
  username: "testuser",
  password: "testuser",
};

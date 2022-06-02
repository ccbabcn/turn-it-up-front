import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoggedIn, UserState } from "../../../types/UserTypes";

const initialState: UserState = {
  username: "",
  id: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogIn: (user, action: PayloadAction<UserLoggedIn>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export const { userLogIn: userLoginActionCreator } = userSlice.actions;

export default userSlice.reducer;

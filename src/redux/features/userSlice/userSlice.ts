import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../interfaces/UserInterfaces";

const initialState: UserState = {
  name: "",
  username: "",
  id: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogIn: (user, action: PayloadAction<UserState>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export const { userLogIn: userLoginUserActionCreator } = userSlice.actions;

export default userSlice.reducer;

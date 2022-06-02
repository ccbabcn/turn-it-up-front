import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/uiSlice/uiSlice";
import userReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

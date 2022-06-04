import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projectsSlice/projectsSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import userReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface UiState {
  loading: boolean;
}

const initialState: UiState = {
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    loadingOn: (ui, action: PayloadAction<UiState>) => ({
      ...action.payload,
      loading: true,
    }),
    loadingOff: (ui, action: PayloadAction<UiState>) => ({
      ...action.payload,
      loading: false,
    }),
  },
});

export const {
  loadingOn: loadingOnActionCreator,
  loadingOff: loadingOffActionCreator,
} = uiSlice.actions;

export default uiSlice.reducer;

export const spinnerState = (state: RootState) => state.ui.loading;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const { loadingOn: loadingOnActionCreator } = uiSlice.actions;

export default uiSlice.reducer;

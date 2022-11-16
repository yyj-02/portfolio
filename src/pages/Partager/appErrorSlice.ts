import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface appErrorState {
  visible: boolean;
  name: string;
  message: string;
  actionTitle: string;
  canIgnore: boolean;
}

const initialState = {
  visible: false,
  name: "",
  message: "",
  actionTitle: "",
  canIgnore: true,
} as appErrorState;

const appErrorSlice = createSlice({
  name: "appError",
  initialState,
  reducers: {
    clearAppError(state) {
      state.visible = false;
      state.name = "";
      state.message = "";
      state.actionTitle = "";
      state.canIgnore = true;
    },
    setAppError(state, action: PayloadAction<appErrorState>) {
      state = action.payload;
    },
    toggleAppError(state) {
      state.visible = !state.visible;
    },
  },
});

export const { clearAppError, setAppError, toggleAppError } =
  appErrorSlice.actions;
export default appErrorSlice.reducer;

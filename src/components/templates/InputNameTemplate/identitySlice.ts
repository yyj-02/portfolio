import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IdentityState {
  value: string;
}

const initialState = { value: "" } as IdentityState;

const identitySlice = createSlice({
  name: "identity",
  initialState,
  reducers: {
    changeIdentity(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeIdentity } = identitySlice.actions;
export default identitySlice.reducer;

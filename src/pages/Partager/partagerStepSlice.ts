import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PartagerStepState {
  value: number;
}

const initialState = { value: 1 } as PartagerStepState;

const partagerStepSlice = createSlice({
  name: "partagerStep",
  initialState,
  reducers: {
    increasePartagerStep(state) {
      state.value++;
    },
    decreasePartagerStep(state) {
      state.value--;
    },
  },
});

export const { increasePartagerStep, decreasePartagerStep } =
  partagerStepSlice.actions;
export default partagerStepSlice.reducer;

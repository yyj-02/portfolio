import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  availability: boolean;
  latitude: number;
  longitude: number;
  lastUpdated: number;
}

interface Location {
  latitude: number;
  longitude: number;
}

const initialState = {
  availability: false,
  latitude: 0,
  longitude: 0,
  lastUpdated: Date.now(),
} as LocationState;

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    clearLocation(state) {
      state.availability = false;
      state.latitude = 0;
      state.longitude = 0;
      state.lastUpdated = Date.now();
    },
    setLocation(state, action: PayloadAction<Location>) {
      state.availability = true;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.lastUpdated = Date.now();
    },
  },
});

export const { clearLocation, setLocation } = locationSlice.actions;
export default locationSlice.reducer;

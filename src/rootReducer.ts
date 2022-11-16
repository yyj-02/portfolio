import { combineReducers } from "@reduxjs/toolkit";

import identitySlice from "./components/templates/InputNameTemplate/identitySlice";
import partagerStepSlice from "./pages/Partager/partagerStepSlice";
import appErrorSlice from "./pages/Partager/appErrorSlice";
import locationSlice from "./pages/Partager/locationSlice";

export default combineReducers({
  identitySlice,
  partagerStepSlice,
  appErrorSlice,
  locationSlice,
});

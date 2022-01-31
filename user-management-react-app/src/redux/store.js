import { configureStore } from "@reduxjs/toolkit";
import { signUpFormReducer } from "./Slices/signUpFormSlice";

export const store = configureStore({
  reducer: {
    signUpForm: signUpFormReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import fleekReducer from "../pages/FleekSlice";
export const store = configureStore({
  reducer: {
    fleek: fleekReducer
  },
});
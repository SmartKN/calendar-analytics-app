import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from './calendarslice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});

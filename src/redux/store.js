import { configureStore } from "@reduxjs/toolkit";
import CalendarSliceReducer from "./Calendarslice";

export const store = configureStore({
  reducer: {
    calendar: CalendarSliceReducer,
  },
});

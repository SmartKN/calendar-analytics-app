import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
  modalOpen: false,
};

const CalendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.selectedDate = null;
    },
  },
});

export const { setSelectedDate, closeModal } = CalendarSlice.actions;
export default CalendarSlice.reducer;

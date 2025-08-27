import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import data from "../data";
import BarGraphModal from "./BarGraphModel";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../redux/Calendarslice";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const dispatch = useDispatch();
  const { selectedDate, modalOpen } = useSelector((state) => state.calendar);

  const events = Object.keys(data).map((date) => ({
    title: "Data Available",
    start: moment(date, "DD-MM-YYYY").toDate(),
    end: moment(date, "DD-MM-YYYY").toDate(),
    allDay: true,
  }));

  const handleSelectSlot = ({ start }) => {
    const formattedDate = moment(start).format("DD-MM-YYYY");
    if (data[formattedDate]) {
      dispatch(setSelectedDate(formattedDate));
    } else {
      alert("No data found for the selected date.");
    }
  };

  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        views={["month", "week", "day"]}
        popup
      />
      {modalOpen && selectedDate && (
        <BarGraphModal date={selectedDate} data={data[selectedDate]} />
      )}
    </div>
  );
};

export default CalendarView;

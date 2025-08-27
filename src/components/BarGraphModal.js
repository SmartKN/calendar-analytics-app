import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "../styles.css";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/calendarslice"

const BarGraphModal = ({ date, data }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Data for {date}</h3>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="user" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" />
        </BarChart>
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BarGraphModal;

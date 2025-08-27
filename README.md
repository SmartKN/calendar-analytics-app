# 📅 React Big Calendar with Redux + Bar Graph

This project demonstrates integration of **React Big Calendar** with **Recharts** and **Redux Toolkit** for state management.  

It highlights selected dates in the calendar, and on click, opens a popup with a bar graph of user stats.  
If no data exists for that date, a warning message is shown.

---

## 🚀 Features
- Month/Week/Day Calendar view
- Highlighted events from dummy JSON
- Redux Toolkit for global state (selected date & modal)
- Bar Graph popup (Recharts)
- Graceful handling of "no data found"

---

## 🛠️ Tech Stack
- React 18
- Redux Toolkit
- React Big Calendar
- Recharts
- Moment.js

---

## 📂 Project Structure
│── package.json
│── README.md
│── public/
│ └── index.html
└── src/
├── components/
│ ├── CalendarView.js
│ └── BarGraphModal.js
├── redux/
│ ├── store.js
│ └── calendarSlice.js
├── data.js
├── App.js
├── index.js
└── styles.css
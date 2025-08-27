📅 React Big Calendar with Bar Graph

A React project that integrates React Big Calendar and Recharts to visualize date-wise data.
Users can view data in day, week, or month views, click a highlighted date, and see a popup with a bar graph of user statistics.
If no data exists for the selected date, a warning message is shown.

✨ Features

📅 React Big Calendar Integration — month, week, and day views

📊 Bar Graph (Recharts) — visualize user data for selected date

🗂️ Redux Toolkit — manage calendar state and modal popup

⚡ Dummy JSON Data — random date-based data for demo

🎨 UI Enhancements — highlighted selected date, clean modal popup

🚨 Error Handling — alert when no data is found

🛠️ Tech Stack

React 18

React Big Calendar

Recharts

Redux Toolkit + React-Redux

Tailwind CSS / CSS Modules (styling)

📂 Project Structure
react-big-calendar-bar-graph/
│── public/
│── src/
│   ├── components/
│   │   ├── CalendarView.js      # Calendar with events
│   │   ├── BarGraphModal.js     # Modal with Bar Graph
│   ├── redux/
│   │   ├── store.js             # Redux store setup
│   │   ├── calendarSlice.js     # Reducer for selected date + modal state
│   ├── data/
│   │   ├── dummyData.js         # JSON data with random dates
│   ├── App.js                   # Root component
│   ├── index.js                 # Entry point
│── package.json
│── README.md

📊 Example Dummy Data
{
  "01-09-2025": [
    {"user_1": 1},
    {"user_2": 2},
    {"user_3": 3},
    {"user_4": 4}
  ],
  "02-09-2025": [
    {"user_1": 5},
    {"user_2": 3},
    {"user_3": 7},
    {"user_4": 2}
  ]
}

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd react-big-calendar-bar-graph

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm start


Now open 👉 http://localhost:3000/
 in your browser.

🧪 Usage

Navigate through Month / Week / Day views in the calendar.

Dates with data will be highlighted.

Click on a date:

If data exists → a popup bar graph opens.

If no data → an alert message appears.

🛠️ Available Scripts

npm start → Run the app in development mode

npm run build → Build the app for production

npm test → Run tests

📝 Commit Guide (for assignment)

Follow meaningful commits (at least 5):

chore: initialize React project with basic setup

feat: integrate React Big Calendar with default views

feat: add dummy JSON data and display events in calendar

feat: add Bar Graph modal with Recharts for selected date

feat: integrate Redux Toolkit for calendar and modal state

(Optional) style: improve UI with date highlighting and no-data alert

📦 Dependencies
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-big-calendar": "^1.8.4",
  "recharts": "^2.12.0",
  "react-redux": "^8.1.2",
  "@reduxjs/toolkit": "^2.2.3"
}

⚡ Compatibility

Runs smoothly on Windows, macOS, and Linux

Works with latest Node.js (>=16)

👨‍💻 Author

Developed by Kishore P S ✨
📌 GitHub: SmartKN Kishore
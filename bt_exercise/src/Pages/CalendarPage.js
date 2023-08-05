import React from "react";
import Header from "../Components/Header";
const CalendarPage = ({currentUser}) => {
  return (
    <div>
      <Header currentUser={currentUser} />

      <h2>Calendar Page</h2>
    </div>
  );
};

export default CalendarPage;

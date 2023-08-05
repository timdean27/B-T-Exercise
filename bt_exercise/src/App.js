import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import FireBaseLogin from "./Authentication/FireBaseLogin";
import { AuthContext } from "./Authentication/Context/AuthContext";
import CalendarPage from "./Pages/CalendarPage"; // Import the CalendarPage component
import JoinLivePage from "./Pages/JoinLivePage"; // Import the JoinLivePage component

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FireBaseLogin currentUser={currentUser} />} />
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/calendar" element={<CalendarPage currentUser={currentUser}/>} /> {/* Add this route */}
        <Route path="/join-live" element={<JoinLivePage currentUser={currentUser}/>} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;





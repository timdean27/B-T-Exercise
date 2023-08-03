import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import FireBaseLogin from "./Authentication/FireBaseLogin";
import { AuthContext } from "./Authentication/Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/FireBaseLogin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the FireBaseLogin component */}
        <Route path="/FireBaseLogin" element={<FireBaseLogin currentUser={currentUser} />} />
        
        {/* Default route with nested route */}
        <Route path="/" element={<RequireAuth><Home currentUser={currentUser} /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





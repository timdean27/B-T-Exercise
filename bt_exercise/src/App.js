import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import Home from "./Home";
import FireBaseLogin from "./Authentication/FireBaseLogin";
import FireBaseCreateUser from "./Authentication/FireBaseCreateUser";
import { AuthContext } from "./Authentication/Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log("currentUser in app page" ,currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/FireBaseLogin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="FireBaseLogin" element={<FireBaseLogin currentUser={currentUser}/>} />
          <Route
            element={
              <RequireAuth>
                <Home currentUser={currentUser}/>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




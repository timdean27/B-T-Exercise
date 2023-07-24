import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Authentication/Context/AuthContext";
import Home from "./Home";
import BackButton from "./Components/BackButton";
import FireBaseLogin from "./Authentication/FireBaseLogin";
import FireBaseCreateUser from "./Authentication/FireBaseCreateUser";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/FireBaseLogin" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <BackButton />
      <Routes>
        <Route path="/FireBaseLogin" element={<FireBaseLogin />} />
        <Route path="/create-user" element={<FireBaseCreateUser />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



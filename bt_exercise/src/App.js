import React, { useContext, useEffect, useState } from "react";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Authentication/Context/AuthContext";
import { checkUserProfileExists, createUserProfile } from "./firebase";
import Home from "./Home";
import BackButton from "./Components/BackButton";
import ProfileCreation from "./Components/ProfileCreation";
import FireBaseLogin from './Authentication/FireBaseLogin';
import FireBaseCreateUser from "./Authentication/FireBaseCreateUser";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/FireBaseLogin" />;
};
const App = () => {
  const { currentUser } = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState(null);
  const [profileExists, setProfileExists] = useState(false);

  useEffect(() => {
    const checkUserProfile = async () => {
      if (currentUser) {
        const exists = await checkUserProfileExists(currentUser.uid);
        setProfileExists(exists);
      }
    };
    checkUserProfile();
  }, [currentUser]);
  const handleProfileCreation = async (profileData) => {
    await createUserProfile(currentUser.uid, profileData);
    setProfileExists(true);
  };
  return (
    <BrowserRouter>
      <BackButton /> {/* Back button available on all pages */}
      <Routes>
        <Route path="/FireBaseLogin" element={<FireBaseLogin />} />
        <Route path="/create-user" element={<FireBaseCreateUser />} />
        <Route
          path="/"
          element={
            profileExists ? (
              <RequireAuth>
                <Home
                  currentUser={currentUser}
                />
              </RequireAuth>
            ) : (
              <ProfileCreation
                currentUser={currentUser}
                onCreateProfile={handleProfileCreation}
              />
            )
          }
        />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


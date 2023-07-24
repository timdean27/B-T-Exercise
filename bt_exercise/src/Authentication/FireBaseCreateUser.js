import React, { useContext, useState } from "react"; // Import the 'useState' hook
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth"; // Import the required functions from firebase/auth
import { auth, googleProvider } from "../firebase";
import { AuthContext } from "./Context/AuthContext";

const FireBaseCreateUser = ({ currentUser }) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log("user Credentials from email sign in", user);
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log("user Credentials from google sign in", user);
        navigate("/");
      });
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/FireBaseLogin");
    } catch (err) {
      console.error(err);
    }
  };

  console.log("currentUser in login page", currentUser);
  return <div>FireBaseCreateUser</div>;
};

export default FireBaseCreateUser;

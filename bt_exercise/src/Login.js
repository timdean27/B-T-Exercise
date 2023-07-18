import React, { useState } from 'react';
import { app, GoogleAuthProvider } from './firebase'; // Import the app and GoogleAuthProvider objects from firebase.js

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous error

    app.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        // Handle login errors
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    app.auth().signInWithPopup(provider)
      .then((result) => {
        // Handle successful Google login
        console.log('Google user logged in:', result.user);
      })
      .catch((error) => {
        // Handle Google login errors
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* ... (rest of the login form) ... */}
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;


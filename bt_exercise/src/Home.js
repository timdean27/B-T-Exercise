import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header";
import VideoViewer from "./Pages/VideoViewer";

import "./Styles/Home.css"; // Corrected import statement for Home.css

const Home = ({ currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />

      <h2>Welcome to the Home Page</h2>
      <div className="buttons">
        <Link to="/calendar" className="home-link">
          Calendar
        </Link>
        <Link to="/join-live" className="home-link">
          Join Live
        </Link>
      </div>
      <div className="video-slider">
        <VideoViewer />
      </div>
    </div>
  );
};

export default Home;


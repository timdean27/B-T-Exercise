// Home.js

import React, { useContext } from "react";
import Header from "./Components/Header";
import VideoViewer from "./Pages/VideoViewer";
import BackButton from "./Components/BackButton";


const Home = ({ currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <BackButton />
      <h2>Welcome to the Home Page</h2>
      <div className="video-slider">
        <VideoViewer />
      </div>
    </div>
  );
};

export default Home;

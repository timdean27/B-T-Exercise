import React, { useState } from "react";
import "../Styles/VideoViewer.css";

const VideoViewer = () => {
  // Dummy video data for demonstration
  const videos = [
    { id: 1, title: "Video 1", url: "https://example.com/video1.mp4" },
    { id: 2, title: "Video 2", url: "https://example.com/video2.mp4" },
    { id: 3, title: "Video 3", url: "https://example.com/video3.mp4" },
    { id: 4, title: "Video 4", url: "https://example.com/video4.mp4" },

  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <div className="video-viewer">
      <h1>Video Viewer</h1>
      <div className="video-container">
        <div className="video">
          <video controls>
            <source src={videos[currentVideoIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>{videos[currentVideoIndex].title}</h3>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePrevVideo} disabled={currentVideoIndex === 0}>
          Previous Video
        </button>
        <button
          onClick={handleNextVideo}
          disabled={currentVideoIndex === videos.length - 1}
        >
          Next Video
        </button>
      </div>
    </div>
  );
};

export default VideoViewer;

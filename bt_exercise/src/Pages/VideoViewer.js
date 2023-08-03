import React, { useRef, useState, useEffect } from "react";
import "../Styles/VideoViewer.css";

const VideoViewer = () => {
  // Dummy video data for demonstration
  const videos = [
    { id: 1, title: "Video 1", url: "https://example.com/video1.mp4" },
    { id: 2, title: "Video 2", url: "https://example.com/video2.mp4" },
    { id: 3, title: "Video 3", url: "https://example.com/video3.mp4" },
    { id: 4, title: "Video 4", url: "https://example.com/video4.mp4" },
    { id: 5, title: "Video 5", url: "https://example.com/video5.mp4" },
    // Add more video data here
  ];

  // State to keep track of the currently visible video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Ref to access the video container element
  const videoContainerRef = useRef(null);

  // Function to handle clicking the right arrow
  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  // Function to handle clicking the left arrow
  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  useEffect(() => {

  }, [currentVideoIndex]);

  return (
    <div className="video-viewer">
      <h1>Video Viewer</h1>
      <div className="video-slider-container">
        <div className="video-slider" ref={videoContainerRef}>

            <div className="video">
              <video controls>
                <source src={videos[currentVideoIndex].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>{videos[currentVideoIndex].title}</h3>
            </div>

        </div>
      </div>
      {currentVideoIndex > 0 && (
        <div className="arrow-container left" onClick={handlePrevVideo}>
          <span className="arrow">&#10094;</span>
        </div>
      )}
      {currentVideoIndex < videos.length - 1 && (
        <div className="arrow-container right" onClick={handleNextVideo}>
          <span className="arrow">&#10095;</span>
        </div>
      )}
    </div>
  );
};

export default VideoViewer;

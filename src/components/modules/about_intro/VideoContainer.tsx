import React from "react";

const VideoContainer = () => {
  return (
    <>
      <div className="videocustom-container">
        <video autoPlay loop muted>
          <source src="/intro.mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoContainer;

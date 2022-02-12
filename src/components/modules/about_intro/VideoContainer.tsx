import React from "react";

const VideoContainer = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src="/intro.mp4" />
      </video>
    </>
  );
};

export default VideoContainer;

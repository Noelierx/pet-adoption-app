import React, { useRef, useState } from 'react';

const Video = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseToggle = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <video
        ref={videoRef}
        src={src}
        controls
        controlslist="nowdownload"
        aria-label={title}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>
      <button onClick={playPauseToggle}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Video;

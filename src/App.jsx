import React, { useRef, useState } from 'react';

const App = () => {
  
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  const imageRef = useRef(null);

  const zoomIn = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.5)';
      imageRef.current.style.transition = 'transform 0.3s ease';
    }
  };

  const zoomOut = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1)';
    }
  };

  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <h2>Timer</h2>
        <p>{time} seconds</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      
      <div style={{ marginTop: '20px' }}>
        <h2>Hover to Zoom Image</h2>
        <img
          ref={imageRef}
          src="/assets/racha.jpg"
          alt="Zoomable"
          style={{ width: '300px', cursor: 'pointer' }}
          onMouseEnter={zoomIn}
          onMouseLeave={zoomOut}
        />
      </div>

      
      <div style={{ marginTop: '20px' }}>
        <h2>Custom Video Controls</h2>
        <video
          ref={videoRef}
          width="400"
          src="/assets/Download (5).mp4"
          controls={false} 
        />
        <div>
          <button onClick={playVideo}>Play</button>
          <button onClick={pauseVideo}>Pause</button>
        </div>
      </div>
    </div>
  );
};

export default App;

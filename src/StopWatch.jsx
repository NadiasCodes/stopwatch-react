import React, {useState,useEffect,useRef } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false); //checking if the stopwatch is currently running
  const [timeElapsed, setTimeElapsed] = useState(0); // keep a track of how much time it elapsed
  const intervalIdRef = useRef(null); // We are working with intervals and we need to clear it if we are not using it
  const startTimeRef = useRef(0); // When we start the stopwatch, we will have to get the current time.

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - timeElapsed;
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeElapsed(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let hours = Math.floor(timeElapsed / (1000 * 60 * 60));
    let minutes = Math.floor(timeElapsed / (1000 * 60) % 60);
    let seconds = Math.floor(timeElapsed / (1000) % 60);
    let milliseconds = Math.floor((timeElapsed % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={handleStart} className="start-button">
          Start
        </button>
        <button onClick={handleStop} className="stop-button">
          Stop
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

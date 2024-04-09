import React, { useRef, useState, useEffect } from "react";




const StopWatch = () => {

const [isRunning, setIsRunning] = useState(false); //checking if the stopwatch is currently running
const [timeElapsed, setTimeElapsed] = useState(0); // keep a track of how much time it elapsed
const intervalIdRef = useRef(null); // We are working with intervals and we need to clear it if we are not using it
const startTimeRef = useRef(0); // When we start the stopwatch, we will have to get the current time.

useEffect(()=>{

}, [isRunning])
  const handleStart = () => {};

  const handleStop = () => {};

  const handleReset = () => {};

  const formatTime = () => {
    return "00:00:00";
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

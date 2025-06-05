import React, { useState } from "react";
import "./stopWatch.css";

function Stopwatch() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });
  const [intervalid, setIntervalid] = useState();

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };

      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }
      return newTime;
    });
  };

  const pauseOrResume = () => {
    if (!intervalid) {
      let id = setInterval(updateTimer, 1000);
      setIntervalid(id);
    } else {
      clearInterval(intervalid);
      setIntervalid("");
    }
  };

  const reset = () => {
    clearInterval(intervalid);
    setTime({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };
  return (
    // <div>Stopwatch</div>
    <div className="time-stamp">
      <h1 className="swheding">StopWatch</h1>
      <h2 className="swtimer">{`${time.hr < 10 ? 0 : ""}${time.hr} : ${
        time.min < 10 ? 0 : ""
      }${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>
      <button className="swbtn" onClick={pauseOrResume}>
        Pause/un-Pause
      </button>
      <button className="swbtn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;

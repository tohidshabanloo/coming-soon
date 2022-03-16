import "./Countdown.css";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  // const targetDate = new Date("2022/03/20");
  const nowDate = new Date();
  const [diffrence, setDiffrence] = useState(0);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDiffrence(target - nowDate);
    }, 1000);
    return () => clearTimeout(timer);
  }, [diffrence, target]);

  const days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffrence / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffrence / (1000 * 60)) % 60);
  const seconds = Math.floor((diffrence / 1000) % 60);
  console.log();
  return (
    <div>
      <h1>Not Soon</h1>

      <input
        type="date"
        onChange={(event) => setTarget(new Date(event.target.value))}
      ></input>
      {diffrence > 0 ? (
        <div>
          <div className="days">Days {days}</div>

          <div className="days">Hours {hours}</div>

          <div className="days">Minutes {minutes}</div>

          <div className="days">Seconds {seconds}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Countdown;

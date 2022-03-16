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

  return (
    <div>
      <div className="contet">
        <div>
          <h2>
            Comming <span className="son">Soon</span>
          </h2>
          <h3 className={`timeContent ${target > 0 && "visible"}`}>
            Choose Your Date Here
          </h3>
          <input
            className="input"
            type="date"
            onChange={(event) => setTarget(new Date(event.target.value))}
          />
        </div>
        <div className={`timeContent ${target > 0 && "visible"}`}>
          <div className="chileContent">
            <div>Day</div>
            <div className="num">{days}</div>
          </div>
          <div className="chileContent">
            <div>Hour</div>
            <div className="num">{hours}</div>
          </div>
          <div className="chileContent">
            <div>Minute</div>
            <div className="num">{minutes}</div>
          </div>
          <div className="chileContent">
            <div>Second</div>
            <div className="num">{seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

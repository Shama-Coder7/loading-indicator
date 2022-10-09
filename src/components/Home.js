import React, { useState, useEffect } from 'react';
import './Indicator.css';

// const cn = (...args) => {
//   return args.filter((x) => x).join(' ');
// };
function Home() {
  const [percent, setPercent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (percent < 100 && isRunning) {
      setTimeout(() => setPercent((prev) => (prev += 2)), 100);
    }
  }, [percent, isRunning]);

  return (
    <div class="circular">
      <div className="inner">
        <div className="time">{percent} %</div>
      </div>
      <div className="outer"></div>

      <div className="circle">
        <div
          className="dot"
          style={{
            zIndex: 2,
            position: 'relative',
            // left: '1%',
            // top: '10%',
            height: '100px',
            borderRadius: '50%',
            background: 'red',
            width: `${percent}%`,
            marginTop: '-5px',
            animation: 'dot 4s linear both',
            transition: 'width 0.5s',
            clip: 'rect(0px, 50px, 100px, 0px)',

          }}
        >
          {/* <span></span> */}
        </div>
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>

      <div className="buttons">
        {isRunning ? (
          <button
            className="pause"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            Pause
          </button>
        ) : (
          <button className="start" onClick={() => setIsRunning(true)}>
            Start
          </button>
        )}

        <button
          className="reset"
          onClick={() => {
            setIsRunning(false);
            setPercent(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Home;

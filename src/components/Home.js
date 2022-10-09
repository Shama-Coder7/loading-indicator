// import React from "react";

// import {
//   CircularProgressbar,
//   buildStyles
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// import ChangingProgressProvider from "./ChangingProgressProvider";

// // Radial separators

// const Home = () => (
//   <div>

//     <Example>
//       <ChangingProgressProvider values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}>
//         {percentage => (
//           <CircularProgressbar
//             value={percentage}
//             text={`${percentage}%`}
//             styles={buildStyles({
//               pathTransitionDuration: 0.15
//             })}
//           />
//         )}
//       </ChangingProgressProvider>
//     </Example>

//   </div>
// );

// function Example(props) {
//   return (
//     <div style={{ marginBottom: 80 }}>
//       <hr style={{ border: "2px solid #ddd" }} />
//       <div style={{ marginTop: 30, display: "flex" }}>
//         <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
//         <div style={{ width: "70%" }}>
//           <h3 className="h5">{props.label}</h3>
//           <p>{props.description}</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Home;

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
        {/* <div className={cn('time-circle', !isRunning && 'paused')}> */}
        <div className="time">{percent} %</div>
        {/* </div> */}
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

            // transformOrigin: '0%',
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

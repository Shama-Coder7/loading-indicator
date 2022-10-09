import React, { useState, useEffect } from 'react';
import './Indicator.css';

const cn = (...args) => {
  return args.filter((x) => x).join(' ');
};
function Indicator() {
  const [percent, setPercent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    //   if (isRunning) {
    //     const id = window.setInterval(() => {
    //       // setPercent(percent + 1);
    //       setPercent((percent) => percent + 1);

    //       // setPercent(0);
    //       // clearInterval(id);
    //     }, 1000);
    //     return () => window.clearInterval(id);
    //   }
    //   return undefined;
    // }, [isRunning]);

    if (percent < 100 && isRunning) {
      setTimeout(() => setPercent((prev) => (prev += 2)), 100);
    }
  }, [percent, isRunning]);

  //   const wheel = (numb) => {
  //   let percent = 0;
  //   setInterval(()=>{
  //     if(percent == 10){
  //       clearInterval();
  //     }else{
  //       percent+=1;
  //       numb.textContent = percent + "%";
  //     }
  //   }, 80);
  // }

  return (
    <div className='circular'>
      <div className="inner"></div>
      <div className="outer">
        <div className={cn('time-circle', !isRunning && 'paused')}>
          {/* <h2 className='inside-circle'>{percent < 100 ?  '%' + percent : percent + '%'}</h2> */}

          <div className="time">{percent} %</div>
          
          {/* <div
            className="wheel"
            style={{
              height: '100%',
              borderRadius: '50%',
              width: `${percent}%`,
              backgroundColor: '#a66cff',
              transition: 'width 0.5s',
            }}
          ></div> */}
          <div
          className="circle-progress"
          style={{
            height: '25%',
            // borderRadius: '30% 40%',
            width: `${percent}%`,
            backgroundColor: '#a66cff',
            transition: 'width 0.5s',

            // top: '1%',
            // left: '1%',
            // zIndex: 1,
            height: '30px',
            
            // margin: '15px',
            position: 'relative',

            borderRadius: '50%',
            boxShadow: 'none',
          }}
        ></div>

        </div>
        
      </div>

      {/* <div className="circle">
        
        <div className="bar left">
          <div className="progress"></div>
        </div>

        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div> */}

      

      

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

export default Indicator;

// <Example label="Custom animation speed">
// <ChangingProgressProvider values={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}>
//   {percentage => (
//     <CircularProgressbar
//       value={percentage}
//       text={`${percentage}%`}
//       styles={buildStyles({
//         pathTransitionDuration: 0.15
//       })}
//     />
//   )}
// </ChangingProgressProvider>
// </Example>

import { useState, useEffect } from 'react';

const Exerciess2 = () => {
  const [minutes, setMinutes] = useState(4); 
  const [seconds, setSeconds] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000); 

    return () => clearInterval(timer); 
  }, [seconds, minutes]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div style={{ textAlign: 'center', fontSize: '2rem', marginTop: '50px' }}>
      <p>Countdown Timer</p>
      <p>
        {formatTime(minutes)}:{formatTime(seconds)}
      </p>
    </div>
  );
};

export default Exerciess2;

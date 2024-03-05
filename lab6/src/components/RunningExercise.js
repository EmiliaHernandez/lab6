import React, { useState } from 'react';
import RunningImage from '../RunningImage.jpg';

function RunningExercise() {
    const [lapTimes, setLapTimes] = useState([]);

  const addLapTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLapTimes(lastTime => [...lastTime, currentTime]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Running Exercise</h1>
        <img src={RunningImage} alt="Man running" width="200px"/>
        <button onClick={addLapTime}>Time Lap</button>
        <h3>Lap List</h3>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>{lapTime}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default RunningExercise;
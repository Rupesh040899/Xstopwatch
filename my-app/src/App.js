
import { useEffect, useState } from "react";
export default function App() {
  const [time, setTime] = useState(0);
  const [val, setVal] = useState(false);

  const handleChange = () => {
    setVal((prevVal) => !prevVal);
  };

  const reset = () => {
    setTime(0);
    setVal(false);
  };

  useEffect(() => {
    let intervalId;
    if (val) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [val]);

  const formatedTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const secondsRemain = seconds % 60;
    return `${min}:${secondsRemain < 10 ? "0" : ""}${secondsRemain}`;
  };
  return (
    <div className="App">
      <h1>Stopwatch </h1>
      Time: {formatedTime(time)}
      <br />
      <button onClick={handleChange}>{val ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

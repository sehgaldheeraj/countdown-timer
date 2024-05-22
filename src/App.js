import "./App.css";
import { useState } from "react";
import DateInput from "./components/DateInput";
import Countdown from "./components/Countdown";
function App() {
  const [target, setTarget] = useState(null);
  const [isCancel, setIsCancel] = useState(true);
  const handleCancel = () => {
    setTarget(null);
    setIsCancel(true);
  };

  return (
    <div className="App">
      <h1>
        Countdown <span className="subheading">Timer</span>
      </h1>
      <DateInput
        setTarget={setTarget}
        isCancel={isCancel}
        setIsCancel={setIsCancel}
        handleCancel={handleCancel}
      />
      <Countdown target={target} />
    </div>
  );
}

export default App;

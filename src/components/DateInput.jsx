import { useState } from "react";

const DateInput = ({ setTarget, isCancel, setIsCancel, handleCancel }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetDateTime = new Date(`${date}T${time}`);
    setTarget(targetDateTime);
    setIsCancel(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="target-input">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        {isCancel ? (
          <button type="submit" className="btn">
            Start Timer
          </button>
        ) : (
          <></>
        )}
      </form>
      {!isCancel ? (
        <button onClick={handleCancel} className="btn">
          Cancel Timer
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DateInput;

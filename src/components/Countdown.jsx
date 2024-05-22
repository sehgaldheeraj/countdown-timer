import { useState, useEffect } from "react";

const Countdown = ({ target }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(target) - +new Date();
    if (difference > 0) {
      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      return timeLeft;
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <div className="countdown">
        <div className="countdown-box">
          <div className="count">{days}</div>
          <div className="label">Days</div>
        </div>
        <div className="countdown-box">
          <div className="count">{hours}</div>
          <div className="label">Hours</div>
        </div>
        <div className="countdown-box">
          <div className="count">{minutes}</div>
          <div className="label">Minutes</div>
        </div>
        <div className="countdown-box">
          <div className="count">{seconds}</div>
          <div className="label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

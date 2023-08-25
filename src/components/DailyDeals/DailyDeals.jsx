import React, { useState, useEffect } from "react";
import dailyDealsImage from "../../assets/images/Daily-Deal.webp";
import "./dailydeals.css";

const DailyDeals = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeftUntilSale());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeftUntilSale());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeftUntilSale() {
    const saleDate = new Date("2023-09-01T12:00:00"); // Replace with your sale's start date
    const now = new Date();
    const timeDifference = saleDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="daily-deals-container">
      <div className="image-container">
        <img src={dailyDealsImage} alt="Sale Banner" className="image" />
        <div className="text-container">
          <div className="sales">
            <h2>Summer Sales with Upto 80% off is here</h2>
          </div>
          <div className="timer">
           <div>
             <h2>
              {timeLeft.days} days : {timeLeft.hours}hr : {timeLeft.minutes}m{" "}:
              {timeLeft.seconds}s
            </h2>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;

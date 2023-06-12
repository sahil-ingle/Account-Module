import React, { useState, useEffect } from "react";
// import "./Maincontent.css";
import Dashboard from "./Dashboard";

const MainContent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };
  const formatTime = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };
  const formatWeekday = () => {
    const options = {
      // year: 'numeric',
      // month: 'long',
      // day: 'numeric',
      weekday: "long",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  return (
    <div style={styles.mainContent}>
      <div style={styles.greeting}>
        <h1>Hello, User</h1>
        <div className="dt" style={styles.dt}>
          <p className="para">{formatDate()}</p>
          <p className="para">{formatWeekday()}</p>
          <p className="para">{formatTime()}</p>
        </div>
      </div>
      <hr style={styles.horizontalLine} />

      {/* Your main content goes here */}
      {/* <div className="amountcard">
        <div className="selectperiod">
          <span>Amount Collected</span>
          <i class="fa-solid fa-calendar-days "></i>
          <select className="period">
            <option value="Today">Today</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </select>
        </div>
        <span>$12,88,910/-</span>
      </div> */}

      <Dashboard/>
    </div>
  );
};

export default MainContent;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },
};

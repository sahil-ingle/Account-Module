import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  // Fetch the necessary data from backend or use dummy data
  const [transactions, setTransactions] = useState([]);
  const [sum, setsum] = useState(0)
  const [period, setPeriod] = useState("Today");

  const calculateAmountByToday = () => {
    let s = 0;
    const dt = new Date();
    const t = [];
    const filteredTransactions = transactions.filter((transaction) => {
      return (new Date(transaction.date.toString()).getDate() === dt.getDate());
    });
    filteredTransactions.forEach((transaction) => {
      s += transaction.amount;
    })
    setsum(s);
  }

  const calculateAmountByMonth = () => {
    let s = 0;
    const dt = new Date();
    const t = [];
    const filteredTransactions = transactions.filter((transaction) => {
      return (new Date(transaction.date.toString()).getMonth() === dt.getMonth());
    });
    filteredTransactions.forEach((transaction) => {
      s += transaction.amount;
    })
    setsum(s);
  }

  const calculateAmountByYear = () => {
    let s = 0;
    const dt = new Date();
    const t = [];
    const filteredTransactions = transactions.filter((transaction) => {
      return (new Date(transaction.date.toString()).getFullYear() === dt.getFullYear());
    });
    filteredTransactions.forEach((transaction) => {
      s += transaction.amount;
    })
    setsum(s);
  }

  const FetchAllReceipts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/fetchReceipts`);
      if (!data.found) console.log(data.error);
      else {
        setTransactions(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    FetchAllReceipts();
  }, [transactions]);

  useEffect(() => {
    if (period === "Year") {
      calculateAmountByYear();
    } else if (period === "Month") {
      calculateAmountByMonth();
    } else {
      calculateAmountByToday();
    }
  }, [period]);  

  return (
    <>
      <div className="amountcard">
        <div className="topsec">
          <span>Amount Collected</span>
          <div className="selectperiod">
            <i className="fa-solid fa-calendar-days "></i>
            <select className="period" onChange={(e) => setPeriod(e.target.value)}>
              <option value="Today">Today</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
        </div>
        <span>₹ {sum} /-</span>
      </div>

      {/* <div style={styles.dashboard}>
        <h2>Welcome to the Dashboard</h2>
        <div style={styles.amountSection}>
          <div style={styles.amountBox}>
            <h3>Today's Collection</h3>
            <p style={styles.amount}>${amountCollectedToday}</p>
          </div>
          <div style={styles.amountBox}>
            <h3>Monthly Collection</h3>
            <p style={styles.amount}>${amountCollectedMonth}</p>
          </div>
          <div style={styles.amountBox}>
            <h3>Yearly Collection</h3>
            <p style={styles.amount}>${amountCollectedYear}</p>
          </div>
        </div>
        <div style={styles.userDetails}>
          <h3>User Details</h3>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;

const styles = {
  dashboard: {
    padding: "20px",
  },
  amountSection: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  amountBox: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    flex: 1,
    marginRight: "10px",
  },
  amount: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#00b8b8",
  },
  userDetails: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

import React, { useState, useEffect } from "react";

const MapFeeHeadsForm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [feeHead, setFeeHead] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [tableData, setTableData] = useState([]);


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
      weekday: "long",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRow = {
      feeHead: feeHead,
      amount: amount,
    };
    setTableData([...tableData, newRow]);
    setFeeHead("");
    setAmount("");
  };


  const handleDelete = () => {
    const updatedTableData = [...tableData];
    updatedTableData.pop();
    setTableData(updatedTableData);
  };


  const handleSaveTable = () => {
    console.log("Table Data:", tableData);
  };

  return (
    <div style={styles.mainContent}>

      <h3>Master {'>'} Mapping fee Heads to Categories</h3>

      <div style={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            >
              <option value="" disabled hidden>Select Category</option>
              <option value="open">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="feeHead">Fee Head:</label>
            <input
              type="text"
              id="feeHead"
              value={feeHead}
              placeholder="Development Fees"
              onChange={(e) => setFeeHead(e.target.value)}
              style={styles.input}
            />
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              placeholder="12345"
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Add Line
            </button>
            <button type="button" style={styles.submitButton} onClick={handleDelete}>
              Delete Line
            </button>


          </div>
        </form>

        {tableData.length > 0 && (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Fee Head</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>

                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td style={styles.tableCell}>{data.feeHead}</td>
                    <td style={styles.tableCell}>{data.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}
        <button type="submit" style={{ ...styles.submitButton, marginTop: " 30px" }} onClick={handleSaveTable}>Save</button>
      </div>
    </div>
  );
};

export default MapFeeHeadsForm;


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

  formContainer: {
    padding: "20px",
    borderRadius: "4px",
  },

  inputGroup: {
    display: "flex",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  label: {
    marginRight: "10px",
    padding: "10px",
  },
  input: {
    padding: "5px",
    marginRight: "30px",
    marginBottom: "30px",
    marginLeft: "30px"
  },
  buttonContainer: {
    display: "flex",

  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#00b695",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "70px",
    marginBottom: "30px",
    flex:"2",
  },


  tableContainer: { 
    maxHeight: "400px", 
    border: "1px solid #ccc",
    maxWidth: "40%", 

  },

  table: {
    borderCollapse: "separate", 
    width: "100%", 
  },

  tableCell: {
    border: "1px solid #ccc",
    padding: "8px",
  },

};


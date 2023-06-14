import React, { useState, useEffect } from "react";

const MapFeeHeadsForm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [feeHead, setFeeHead] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [tableData, setTableData] = useState([]);


  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if (feeHead.trim() !== '' && amount.trim() !== '') {
      const newRow = {
        feeHead: feeHead,
        amount: amount,
      };
      setTableData([...tableData, newRow]);
      setFeeHead("");
      setAmount("");
    } else {
      window.alert("Please fill in all the fields.");
    }
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
                  <th style={{...styles.tableCell, textAlign: "left",}}>Fee Head</th>
                  <th style={{...styles.tableCell, textAlign: "left",}}>Amount</th>
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

  formContainer: {
    padding: "20px",
    borderRadius: "4px",
    flex: "none",
  },

  inputGroup: {
    marginBottom: "10px",
    fontWeight: "bold",

  },
  label: {
    marginRight: "10px",
    padding: "10px",
    marginBottom: "20px",
    marginTop: "20px",
  },
  input: {
    flex: "0 0 60px",
    border: "1px solid #ccc",
    transition: "border-color 0.3s ease",
    padding: "8px",
    marginRight: "30px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginTop: "20px",
    borderRadius: "4px",
    borderColor: "#4d4d4d",
  },
  buttonContainer: {
    display: "flex",

  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#00b695",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "70px",
    marginBottom: "30px",
  },


  tableContainer: {
    maxHeight: "400px",
    border: "0.5px solid #e6e6e6",
    maxWidth: "40%",
    background: "white",
    borderRadius: "4px",
    overflow: "hidden",
    margin: "10px 0", // Increase the margin to create a bigger cell gap
  },

  table: {
    borderCollapse: "collapse",
    width: "100%",
  },

  tableCell: {
    border: "1px solid #e6e6e6",
    padding: "8px",
  },

};


import axios from "axios";
import React, { useState, useEffect } from "react";

const MapFeeHeadsForm = () => {
  const [feeHead, setFeeHead] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [tableData, setTableData] = useState([]);
  const [catid, setCatid] = useState(0);
  const [feeid, setFeeid] = useState(0);
  const [allCat, setallCat] = useState([]);
  const [allFee, setallFee] = useState([]);


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
    FetchCatid();
    tableData.forEach((e) => {
      FetchFeeid(e.feeHead);
      if (feeid !== 0 && catid !== 0) {
        addData(e.amount);
        setCatid(0);
        setFeeid(0);
      }
    });
  };

  const FetchCatid = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/fetchCatid", {
        category: category,
      });
      if (!data.found) console.log(data.error);
      else setCatid(data.result[0].cat_id);
    } catch (error) {
      console.log(error);
    }
  };

  const FetchFeeid = async (fh) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/fetchFhid`, {
        feehead: fh,
      });
      if (!data.found) console.log(data.error);
      else setFeeid(data.result[0].fh_id);
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async (amt) => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/mapcattofeehead`,
        {
          cat_id: catid,
          fh_id: feeid,
          amount: amt,
        }
        // config
      );
      if (data.success === true) {
        console.log("Data Saved successfully");
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FetchAllCat = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/fetchAllCat`);
      if (!data.found) console.log(data.error);
      else {
        setallCat(data.result, ...allCat);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const FetchAllFh = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/fetchAllFh`);
      if (!data.found) console.log(data.error);
      else {
        setallFee(data.result, ...allFee);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchAllCat();
    FetchAllFh();
    // console.log(allCat)
  }, []);

  return (
    <div style={styles.mainContent}>

      <h3 style={{ letterSpacing: 3,fontWeight: "bolder" }}>Master Tab {'>'} Mapping fee Heads to Categories</h3>

      <div style={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="category">Select Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              {allCat.length > 0 &&
                allCat.map((cat) => {
                  return (
                    <option key={cat.cat_id} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="feeHead">Enter Fee Head:</label>
            <select
              id="feeHead"
              value={feeHead}
              onChange={(e) => setFeeHead(e.target.value)}
              style={styles.input}
            >
              <option value="" disabled hidden>
                Select Fee Head
              </option>
              {allFee.length > 0 &&
                allFee.map((fee) => {
                  return (
                    <option key={fee.fh_id} value={fee.name}>
                      {fee.name}
                    </option>
                  );
                })}
            </select>

            <label htmlFor="amount">Amount:</label>
            
            <label htmlFor="amount">Enter Amount:</label>
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
            <button
              type="button"
              style={styles.submitButton}
              onClick={handleDelete}
            >
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
        <button
          type="submit"
          style={{ ...styles.submitButton, marginTop: " 30px" }}
          onClick={handleSaveTable}
        >
          Save
        </button>
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

import React, { useEffect, useState } from "react";

const CollectFee = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [receiptNo, setReceiptNo] = useState("");
  const [date, setDate] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [collegeYear, setCollegeYear] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [chequeDate, setChequeDate] = useState("");
  const [chequeNo, setChequeNo] = useState("");
  const [tableData, setTableData] = useState([]);
  const [feeHead, setFeeHead] = useState("");
  const [amount, setAmount] = useState("");



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

  const handleFormSubmit2 = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log("Receipt No:", receiptNo);
    console.log("Date:", date);
    console.log("Academic Year:", academicYear);
    console.log("Name:", name);
    console.log("Branch:", branch);
    console.log("College Year:", collegeYear);
    console.log("Bank Name:", bankName);
    console.log("Bank Branch:", bankBranch);
    console.log("Cheque Date:", chequeDate);
    console.log("Cheque No:", chequeNo);
  };

  return (
    <div style={styles.mainContent}>
      <div style={styles.formContainer}>
        <h2> COLLECT STUDENT FEE </h2>
        <form onSubmit={handleFormSubmit2} style={styles.form}>
          <div style={styles.gridContainer}>
            <div style={styles.inputGroup}>
              <h3>Basic Details</h3>
              <div style={styles.inputBox}>
                <div style={styles.gridInputContainer}>
                  <div style={styles.label}>
                    <label htmlFor="receiptNo">Receipt No:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="receiptNo"
                      value={receiptNo}
                      onChange={(e) => setReceiptNo(e.target.value)}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label htmlFor="date">Date:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label htmlFor="academicYear">Academic Year:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="academicYear"
                      value={academicYear}
                      onChange={(e) => setAcademicYear(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <h3>Student Details </h3>
              <div style={styles.inputBox}>
                <div style={styles.gridInputContainer}>
                  <div style={styles.label}>
                    <label htmlFor="name">Name:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label htmlFor="branch">Branch:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="branch"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label htmlFor="collegeYear">College Year:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="number"
                      id="collegeYear"
                      value={collegeYear}
                      onChange={(e) => setCollegeYear(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <h3>Bank Details </h3>
              <div style={styles.inputBox}>
                <div style={styles.gridInputContainer}>
                  <div style={styles.label}>
                    <label htmlFor="bankName">Bank Name:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="bankName"
                      value={bankName}
                      onChange={(e) => setBankName((e.target.value))}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label htmlFor="bankBranch">Bank Branch:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="bankBranch"
                      value={bankBranch}
                      onChange={(e) => setBankBranch(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label htmlFor="chequeDate">Cheque Date:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="date"
                      id="chequeDate"
                      value={chequeDate}
                      onChange={(e) => setChequeDate(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label htmlFor="chequeNo">Cheque No:</label>
                  </div>
                  <div style={styles.inputGroup}>
                    <input
                      type="text"
                      id="chequeNo"
                      value={chequeNo}
                      onChange={(e) => setChequeNo(e.target.value)}
                      style={styles.input}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ ...styles.inputGroup, gridColumn: "span 2" }}>
              <div style={styles.inputBox}>
                <div style={{ ...styles.gridInputContainer, height: "210px" }}>
                  <div style={{}}>
                    {tableData.length > 0 && (
                      <div style={styles.tableContainer}>
                        <table style={styles.table}>
                          <thead>
                            <tr>
                              <th>Description</th>
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
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div style={styles.inputGroup}>
                      <label htmlFor="feeHead">Add Desc:</label>
                      <input
                        type="text"
                        id="feeHead"
                        value={feeHead}
                        placeholder="Development Fees"
                        onChange={(e) => setFeeHead(e.target.value)}
                        style={{ ...styles.input, width: "225px" }}
                      />
                    </div>
                    <div style={styles.buttonContainer}>
                      <button
                        type="submit"
                        style={{...styles.submitButton, backgroundColor:"#e6e6e6", color:"black"}}
                        onClick={handleFormSubmit2}
                      >
                        Add Line
                      </button>
                      <button
                        type="button"
                        style={{...styles.submitButton, backgroundColor:"#e6e6e6", color:"black"}}
                        onClick={handleDelete}
                      >
                        Delete Line
                      </button>
                    </div>
                    <label htmlFor="amount">Select Fee Heads:</label>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      placeholder="12345"
                      onChange={(e) => setAmount(e.target.value)}
                      style={styles.input}
                    />
                    <div style={styles.buttonContainer}>
                      <button
                        type="submit"
                        style={styles.submitButton}
                        onClick={handleSaveTable}
                      >
                        Print Receipt
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectFee;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
  },

  form:{
    marginTop: "20px"
  },

  formContainer: {
    padding: "0px 20px 0px 0px",
    borderRadius: "4px",
    display: "inline-block",
    width: "100%",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "10px",
  },

  gridInputContainer: {
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr",
    alignItems: "center",
    height: "150px",
  },

  inputGroup: {
    fontWeight: "bold",
    alignItems: "center",
  },

  inputBox: {
    backgroundColor: "#f6f6f6",
    padding: "20px",
    borderRadius: "10px",
  },

  label: {
    width: "120px",
  },
  input: {
    flex: "0 0 60px",
    border: "1px solid #ccc",
    transition: "border-color 0.3s ease",
    borderRadius: "4px",
    borderColor: "#4d4d4d",
    padding: "5px",
    margin: "5px 5px 5px 5px",
    borderColor: "#4d4d4d",
  },
  buttonContainer: {
    display: "flex",
    margin: "20px 0px 20px 0px",
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    padding: "10px 35px",
    backgroundColor: "#00b695",
    boxShadow: '1px 2px 9px #F4AAB9',
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "20px",
  },

  tableContainer: {
    maxHeight: "400px",
    border: "1px solid #ccc",
    maxWidth: "90%",
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

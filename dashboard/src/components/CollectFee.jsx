import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const CollectFee = () => {
  const [receiptNo, setReceiptNo] = useState('');
  const [date, setDate] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [collegeYear, setCollegeYear] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [chequeDate, setChequeDate] = useState('');
  const [chequeNo, setChequeNo] = useState('');
  const [tableData, setTableData] = useState([]);
  const [feeHead, setFeeHead] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!feeHead || !amount) {
      alert('Please fill in all the fields.');
      return;
    }
    const newRow = {
      feeHead: feeHead,
      amount: amount,
    };
    setTableData([...tableData, newRow]);
    setFeeHead('');
    setAmount('');
  };

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setName(value);
  };

  const handleBranchChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setBranch(value);
  };

  const handleBankNameChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setBankName(value);
  };

  const handleBankBranchChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setBankBranch(value);
  };

  const handleDelete = () => {
    if (tableData.length > 0) {
      const updatedTableData = [...tableData];
      updatedTableData.pop();
      setTableData(updatedTableData);
    }
  };

  const handlePrint = () => {
    if (!receiptNo || !date || !academicYear || !name || !branch || !collegeYear || !bankName || !bankBranch || !chequeDate || !chequeNo) {
      alert('Please fill in all the fields.');
      return;
    }
  
    if (tableData.length === 0) {
      alert('Please add at least one fee head.');
      return;
    }
  
    const doc = new jsPDF();
    doc.setFontSize(12);
  
    doc.text(`Receipt No: ${receiptNo}`, 10, 10);
    doc.text(`Date: ${date}`, 10, 20);
    doc.text(`Academic Year: ${academicYear}`, 10, 30);
    doc.text(`Name: ${name}`, 10, 40);
    doc.text(`Branch: ${branch}`, 10, 50);
    doc.text(`College Year: ${collegeYear}`, 10, 60);
    doc.text(`Bank Name: ${bankName}`, 10, 70);
    doc.text(`Bank Branch: ${bankBranch}`, 10, 80);
    doc.text(`Cheque Date: ${chequeDate}`, 10, 90);
    doc.text(`Cheque No: ${chequeNo}`, 10, 100);
  
    if (tableData.length > 0) {
      doc.autoTable({
        startY: 110,
        head: [['Fee Head', 'Amount']],
        body: tableData.map(({ feeHead, amount }) => [feeHead, amount]),
      });
    }
  
    doc.save('receipt.pdf');
  };
  

  return (
    <div style={styles.mainContent}>

      <div style={styles.formContainer}>

        <h1 > COLLECT STUDENT FEE </h1>

        <div style={styles.gridContainer}>
          <div style={styles.inputGroup}>
            <h2>Basic Details</h2>
            <div style={styles.inputBox}>
              <div style={styles.gridInputContainer}>
                <div style={styles.label}>
                  <label htmlFor="receiptNo">Receipt No:</label>
                </div>
                <div style={styles.inputGroup}>
                  <input
                    type="number"
                    id="receiptNo"
                    value={receiptNo}
                    onChange={(e) => setReceiptNo(parseInt(e.target.value))}
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="sate">Date:</label>
                </div>
                <div style={styles.inputGroup}>
                  <input
                    type="number"
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
                    type="number"
                    id="academicYear"
                    value={academicYear}
                    onChange={(e) => setAcademicYear(parseInt(e.target.value))}
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <h2>Student Details </h2>
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
                    onChange={handleNameChange}
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
                    onChange={handleBranchChange}
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
                    onChange={(e) => setCollegeYear(parseInt(e.target.value))}
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <h2>Bank Details </h2>
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
                    onChange={handleBankNameChange}
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
                    onChange={handleBankBranchChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label htmlFor="chequeDate">Cheque Date:</label>
                </div>
                <div style={styles.inputGroup}>
                  <input
                    type="number"
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
                    type="number"
                    id="chequeNo"
                    value={chequeNo}
                    onChange={(e) => setChequeNo(parseInt(e.target.value))}
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ ...styles.inputGroup, gridColumn: 'span 2' }}>
            <div style={styles.inputBox}>
              <div style={{...styles.gridInputContainer, height: "210px",}}>
                <div style={{}}>
                  {tableData.length > 0 && (
                    <div style={styles.tableContainer}>
                      <table style={styles.table}>
                        <thead>
                          <tr>
                            <th style={{...styles.tableCell, background: "#f6f6f6", textAlign: "left",}}>Description</th>
                            <th style={{...styles.tableCell, background: "#f6f6f6", textAlign: "left",}}>Amount</th>
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
                      style={{...styles.input,width:"225px"}}
                    />
                  </div>
                  <div style={styles.buttonContainer}>
                    <button type="submit" style={{...styles.submitButton, backgroundColor:"#e6e6e6", color:"black"}}>
                      Add Line
                    </button>
                    <button type="button" style={{...styles.submitButton, backgroundColor:"#e6e6e6", color:"black"}} onClick={handleDelete}>
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
                    <button type="submit" style={styles.submitButton} onClick={handlePrint}>
                      Print Receipt
                    </button>
                  </div>
                </form>

              </div>

            </div>
          </div>
        </div>
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
    paddingTop: " 20px",
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
    border: "5px solid #f6f6f6",
    maxWidth: "90%",
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
    border: "5px solid #f6f6f6",
    padding: "8px",
  },
};

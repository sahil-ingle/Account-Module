import React, { useEffect, useState } from 'react';

const GenerateReceipt = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReport, setSelectedReport] = useState('');


  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch transaction records from the database
    // Replace the following code with your actual database fetch logic
    const dummyData = [
      {
        id: 1,
        receiptNo: '2023001',
        name: 'John Doe',
        branch: 'Computer Science',
        academicYear: '2023',
        phoneNumber: '1234567890',
      },
      {
        id: 2,
        receiptNo: '2023002',
        name: 'Jane Smith',
        branch: 'Electrical Engineering',
        academicYear: '2023',
        phoneNumber: '9876543210',
      },
      // Add more dummy transaction records
    ];
    setTransactions(dummyData);
  };

  const handlePrint = (receiptNo) => {
    // Add your printing logic here based on the receiptNo
    console.log(`Printing receipt: ${receiptNo}`);
  };

  const handleReportSelection = (event) => {
    setSelectedReport(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.receiptNo.includes(searchQuery)
  );

  return (
    <div style={styles.mainContent}>
      <div style={styles.formContainer}>
        <h2>Generate Fee Receipt</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Search by Receipt No"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              style={styles.input}
            />
          </div>
        </form>
        {filteredTransactions.length > 0 ? (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableCell}>Receipt No</th>
                  <th style={styles.tableCell}>Name</th>
                  <th style={styles.tableCell}>Branch</th>
                  <th style={styles.tableCell}>Academic Year</th>
                  <th style={styles.tableCell}>Phone Number</th>
                  <th style={styles.tableCell}>Print</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td style={styles.tableCell}>{transaction.receiptNo}</td>
                    <td style={styles.tableCell}>{transaction.name}</td>
                    <td style={styles.tableCell}>{transaction.branch}</td>
                    <td style={styles.tableCell}>{transaction.academicYear}</td>
                    <td style={styles.tableCell}>{transaction.phoneNumber}</td>
                    <td style={styles.tableCell}>
                      <button style={styles.submitButton} onClick={() => handlePrint(transaction.receiptNo)}>
                        Print
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No transactions found.</p>
        )}
        <div style={styles.formContainer}>
          <label htmlFor="report">Select Report:</label>
          <select
            id="report"
            value={selectedReport}
            onChange={handleReportSelection}
            style={{ ...styles.input, backgroundImage: 'none',   marginLeft: "30px", }} // Remove the search icon
          >
            <option value="report" disabled hidden>Select Report</option>
            <option value="report1">Report 1</option>
            <option value="report2">Report 2</option>
            <option value="report3">Report 3</option>
          </select>
        </div>
        <div style={{ ...styles.formContainer, paddingTop: '20px' }}> {/* Add padding */}
          <button style={{ ...styles.submitButton, width: '150px' }} disabled={!selectedReport}>
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateReceipt;


const styles = {
  
  h2: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  formContainer: {
    padding: "20px 20px 0px 0px",
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
    alignItems: 'center',
    height: "150px",
  },

  inputGroup: {
    fontWeight: "bold",
    alignItems: 'center'
  },

  inputBox: {
    backgroundColor: "#f6f6f6",
    padding: "20px",
    borderRadius: "10px",
  },
  form: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  label: {
    width: "120px",
  },
  input: {
    flex: "0 0 60px",
    padding: "10px 35px 10px 10px",
    paddingLeft: "45px",
    border: "1px solid #ccc",
    transition: "border-color 0.3s ease",
    backgroundImage: "url(/search_icon.png)",
    backgroundPosition: "left 10px center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    borderRadius: "4px",
    borderColor: "#4d4d4d",
  },
  buttonContainer: {
    display: "flex",
    margin: "20px 0px 20px 0px",
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#00b695",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "20px",
    width: "100%",
  },

  tableContainer: {
    maxHeight: '400px',
    border: '1px solid #ccc',
    maxWidth: '90%',
    marginTop: '20px', // Add margin top

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

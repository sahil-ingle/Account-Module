import React, { useState } from 'react';

const GenerateReceipt = () => {
  const [clgId, setClgId] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleClgIdChange = (event) => {
    setClgId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch transaction records from the database based on clgId
    // Replace the following code with your actual database fetch logic
    const dummyData = [
      {
        id: 1,
        date: '2023-05-20',
        amount: 100,
        description: 'Tuition Fee',
      },
      {
        id: 2,
        date: '2023-05-22',
        amount: 50,
        description: 'Library Fee',
      },
      // Add more dummy transaction records
    ];
    setTransactions(dummyData);
  };

  return (
    <div style={styles.container}>
      <h2>Generate Receipt</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="clgId" style={styles.label}>
            College ID:
          </label>
          <input
            type="text"
            id="clgId"
            value={clgId}
            onChange={handleClgIdChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Generate Receipt
        </button>
      </form>
      {transactions.length > 0 && (
        <div style={styles.receiptContainer}>
          <h3>Transaction Records for College ID: {clgId}</h3>
          {transactions.map((transaction) => (
            <div key={transaction.id} style={styles.receipt}>
              <p>Date: {transaction.date}</p>
              <p>Amount: ${transaction.amount}</p>
              <p>Description: {transaction.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenerateReceipt;

const styles = {
  container: {
    padding: '20px',
    width: '100%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '310px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    paddingRight: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#00b8b8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  receiptContainer: {
    marginTop: '20px',
  },
  receipt: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  },
};

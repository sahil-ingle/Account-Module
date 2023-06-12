import React, { useState } from 'react';

const CollectFee = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform fee collection logic here
    console.log(`Fee collected: $${amount}`);
    // Reset the form
    setAmount('');
  };

  return (
    <div style={styles.container}>
      <h2>Collect Fee</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="amount" style={styles.label}>
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Collect
        </button>
      </form>
    </div>
  );
};

export default CollectFee;

const styles = {
  container: {
    padding: '20px',
    width: '100%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
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
};
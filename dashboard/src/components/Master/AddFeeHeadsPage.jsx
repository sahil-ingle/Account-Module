import React, { useState } from 'react';
import './Fee.css';

const AddFeeHeadsPage = () => {
  const [feeHead, setFeeHead] = useState('');
  const [message, setMessage] = useState('');

  const handleFeeHeadChange = (event) => {
    setFeeHead(event.target.value);
  };

  const handleAddFeeHead = () => {
    if (feeHead) {
      setMessage(`Fee head "${feeHead}" added successfully!`);
    } else {
      setMessage('Please enter a fee head.');
    }
  };

  return (
    <div>
      <h1>Add Fee Heads</h1>
      Fee Head : 
      <input
        type="text"
        placeholder="Tuition Fees"
        value={feeHead}
        onChange={handleFeeHeadChange}
      />
      <div>
      <button className="add-fee-head-button" onClick={handleAddFeeHead}>
        Add Fee Head
      </button>
      <p className='messagepara'>{message}</p>
      </div>
    </div>
  );
};

export default AddFeeHeadsPage;

import React, { useState } from 'react';
import "./Mastertab.css"

const AddFeeHeadForm = () => {
  const [feeHead, setFeeHead] = useState('');

  const handleFeeHeadChange = (event) => {
    setFeeHead(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform fee head addition logic here
    console.log(`Fee head added: ${feeHead}`);
    // Reset the form
    setFeeHead('');
  };

  return (
    <form className='AddFeeForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="feeHead">Fee Head:</label>
        <input type="text" id="feeHead" value={feeHead} onChange={handleFeeHeadChange} required />
      </div>
      <button type="submit">Add Fee Head</button>
    </form>
  );
};

export default AddFeeHeadForm;

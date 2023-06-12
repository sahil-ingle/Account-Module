import React, { useState } from 'react';
import "./Mastertab.css"

const MapFeeHeadsForm = () => {
  const [feeHead, setFeeHead] = useState('');
  const [category, setCategory] = useState('');

  const handleFeeHeadChange = (event) => {
    setFeeHead(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform fee head mapping logic here
    console.log(`Fee head mapped: ${feeHead} to category ${category}`);
    // Reset the form
    setFeeHead('');
    setCategory('');
  };

  return (
    <form className='MapFeeHeadsForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="feeHead">Fee Head:</label>
        <input type="text" id="feeHead" value={feeHead} onChange={handleFeeHeadChange} required />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} required />
      </div>
      <button type="submit">Map Fee Head to Category</button>
    </form>
  );
};

export default MapFeeHeadsForm;

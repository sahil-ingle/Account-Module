import React, { useState } from 'react';
import "./Mastertab.css"

const AddBranchForm = () => {
  const [branch, setBranch] = useState('');

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform branch addition logic here
    console.log(`Branch added: ${branch}`);
    // Reset the form
    setBranch('');
  };

  return (
    <form className='AddBranchForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="branch">Branch:</label>
        <input type="text" id="branch" value={branch} onChange={handleBranchChange} required />
      </div>
      <button type="submit">Add Branch</button>
    </form>
  );
};

export default AddBranchForm;

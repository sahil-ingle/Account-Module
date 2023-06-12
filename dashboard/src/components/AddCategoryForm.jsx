import React, { useState } from 'react';
import "./Mastertab.css"

const AddCategoryForm = () => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform category addition logic here
    console.log(`Category added: ${category}`);
    // Reset the form
    setCategory('');
  };

  return (
    <form className='AddCategoryForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} required />
      </div>
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategoryForm;

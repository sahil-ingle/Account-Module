import React, { useState } from 'react';
import './Category.css';

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [message, setMessage] = useState('');

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = () => {
    if (categoryName) {
      setMessage(`Category "${categoryName}" added successfully!`);
    } else {
      setMessage('Please enter a category name.');
    }
  };

  return (
    <div>
      <h1>Add Category</h1>
      Category Name :
      <input
        type="text"
        className='catinput'
        placeholder="Enter category name"
        value={categoryName}
        onChange={handleCategoryNameChange}
      />
      <div>
      <button className="add-category-button" onClick={handleAddCategory}>
        Add Category
      </button>
      <p className='messagepara'>{message}</p>
      </div>
    </div>
  );
};

export default AddCategoryPage;

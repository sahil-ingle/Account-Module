import React, { useState } from 'react';
import "./Mastertab.css"

const AddAcademicYearForm = () => {
  const [academicYear, setAcademicYear] = useState('');

  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform academic year addition logic here
    console.log(`Academic year added: ${academicYear}`);
    // Reset the form
    setAcademicYear('');
  };

  return (
    <form className='AddAcademicYearForm' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="academicYear">Academic Year:</label>
        <input
          type="text"
          id="academicYear"
          value={academicYear}
          onChange={handleAcademicYearChange}
          required
        />
      </div>
      <button type="submit">Add Academic Year</button>
    </form>
  );
};

export default AddAcademicYearForm;

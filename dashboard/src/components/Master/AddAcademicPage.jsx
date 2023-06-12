import React, { useState } from 'react';
import './AddAcademicYear.css';

const AcademicYearPage = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [message, setMessage] = useState('');
  const [isYearListOpen, setIsYearListOpen] = useState(false);

  const years = [
    '2016-2017',
    '2017-2018',
    '2018-2019',
    '2019-2020',
    '2020-2021',
    '2021-2022',
    // Add more years as needed
  ];

  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setIsYearListOpen(false);
  };

  const handleAddYear = () => {
    if (selectedYear) {
      setMessage(`Academic year ${selectedYear} added successfully!`);
    } else {
      setMessage('Please select an academic year.');
    }
  };

  const toggleYearList = () => {
    setIsYearListOpen(!isYearListOpen);
  };

  return (
    <div>
      <h1>Add Academic Year</h1>
      <div className={`year-selector ${isYearListOpen ? 'is-open' : ''}`}>
        <button className="year-button" onClick={toggleYearList}>
        {selectedYear ? selectedYear : 'Select Year'}
        </button>
        {isYearListOpen && (
          <ul className="year-list">
            {years.map((year) => (
              <li key={year} onClick={() => handleYearSelection(year)}>
                {year}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
      <button className="add-year-button" onClick={handleAddYear}>
        Add Year
      </button>
      <p className='messagepara'>{message}</p>
      </div>
    </div>
  );
};

export default AcademicYearPage;
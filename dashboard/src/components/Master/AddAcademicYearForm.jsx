import { useState } from "react";
import "./AddAcademicYear.css"
import axios from "axios";

const AddAcademicYearForm = () => {
  // const [academicYear, setAcademicYear] = useState("");

  // //academic year selector
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the form data
  //   console.log("Academic Year:", academicYear);
  // };
  const [selectedYear, setSelectedYear] = useState("");
  const [message, setMessage] = useState("");
  const [isYearListOpen, setIsYearListOpen] = useState(false);

  const years = [
    "2016-2020",
    "2020-2024",
    "2024-2028",
    "2028-2032",
    // Add more years as needed
  ];

  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setIsYearListOpen(false);
  };

  const handleAddYear = (e) => {
    e.preventDefault()
    if (selectedYear) {
      setMessage(`Academic year ${selectedYear} added successfully!`);
      addData();
    } else {
      setMessage("Please select an academic year.");
    }
  };

  const toggleYearList = () => {
    setIsYearListOpen(!isYearListOpen);
  };

  const addData = async () => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/addAcademicYear`,
        {year: selectedYear}
        // config
      );
      if (data.success === true) {
        console.log("Data Saved successfully");
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="mainContent">
      <h3>Master {">"} Add Academic Year</h3>

      <div className="formContainer">
        <form onSubmit={handleAddYear}>
          <div className="inputGroup">
            <label htmlFor="academicYear">Academic Year:</label>
            <div className={`year-selector ${isYearListOpen ? "is-open" : ""}`}>
              <input
                className="year-button"
                value={selectedYear ? selectedYear : "Select Year"}
                onClick={toggleYearList}
                readOnly
              />
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
          </div>
          <div className="buttonContainer">
            <button type="submit" className="submitButton">
              Add Year
            </button>
          </div>
        </form>
        <p className='messagepara'>{message}</p>
      </div>
    </div>
  );
};

export default AddAcademicYearForm;

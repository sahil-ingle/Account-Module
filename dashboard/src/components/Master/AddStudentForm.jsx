import React, { useState, useEffect } from "react";
import "./AddStudentForm.css";
import axios from "axios";

const AddStudentForm = () => {
  const [studentData, setStudentData] = useState({
    title: "Mr",
    name: "",
    telephone: "",
    email: "",
    dob: "",
    pin: 0,
    addr1: "",
    addr2: "",
    previous_institute: "",
    previous_education: "",
    gradeofmarks: 0,
    yearofadmission: 0,
    yearofpassing: 0,
    current_status: "",
    category: "General",
    seatType: "General",
    collegeYear: 0,
    branch: "Computer Science",
    admittedtoacademicyear: 0,
  });
  const [allCat, setallCat] = useState([]);
  const [allFee, setallFee] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleTextInputChange = (e) => {
    const { name, value } = e.target;
    const onlyText = value.replace(/[^A-Za-z ]/g, ""); // Remove any non-text characters
    setStudentData((prevState) => ({
      ...prevState,
      [name]: onlyText,
    }));
  };

  function generateAcademicYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10; // Adjust the range as needed
    const endYear = currentYear;

    const options = [];

    for (let year = startYear; year <= endYear; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return options;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    const requiredFields = [
      "name",
      "telephone",
      "email",
      "dob",
      "pin",
      "addr1",
      "previous_institute",
      "previous_education",
      "gradeofmarks",
      "yearofadmission",
      "yearofpassing",
      "collegeYear",
      "current_status",
    ];

    const hasEmptyFields = requiredFields.some((field) => {
      return !studentData[field];
    });

    if (hasEmptyFields) {
      alert("Please fill in all required fields.");
      return;
    }

    addData();
  };

  const addData = async () => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/addstudent`,
        studentData
        // config
      );
      if (data.success === true) {
        console.log("Data Saved successfully");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FetchAllCat = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/fetchAllCat`);
      if (!data.found) console.log(data.error);
      else {
        setallCat(data.result, ...allCat);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const FetchAllFh = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/fetchAllFh`);
      if (!data.found) console.log(data.error);
      else {
        setallFee(data.result, ...allFee);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchAllCat();
    FetchAllFh();
    // console.log(allCat)
  }, []);

  return (
    <div className="add-student-form">
      {/* <h2>Add Student Form</h2> */}
      <h3>Master {">"} Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-section required-fields">
          {/* <h3>Personal Information</h3> */}
          <div id="form-group1" className="form-group">
            <div className="form-item">
              <label>Name</label>
              <select
                name="title"
                value={studentData.title}
                onChange={handleInputChange}
                required
                style={{ borderRadius: "4px 0px 0px 4px" }}
              >
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
              </select>
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleTextInputChange}
                placeholder="putyourname"
                required
                style={{ marginLeft: 0, borderRadius: "0px 4px 4px 0px" }}
              />
            </div>
            <div className="form-item">
              <label>Telephone</label>
              <input
                type="number"
                name="telephone"
                value={studentData.telephone}
                onChange={handleInputChange}
                placeholder="88888888"
              />
            </div>
            <div className="form-item">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleInputChange}
                placeholder="yourmail@gmail.com"
              />
            </div>
          </div>
          <div id="form-group2" className="form-group">
            <div className="form-item">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={studentData.dob}
                onChange={handleInputChange}
                placeholder="01/12/2002"
              />
            </div>
            <div className="form-item">
              <label>Pin</label>
              <input
                type="number"
                name="pin"
                value={studentData.pin}
                onChange={handleInputChange}
                placeholder="400004"
              />
            </div>
            <div className="form-item">
              <label>Address Line 1</label>
              <input
                type="text"
                name="addr1"
                value={studentData.addr1}
                onChange={handleInputChange}
                placeholder="400004"
              />
            </div>
            <div className="form-item">
              <label>Address Line 2</label>
              <input
                type="text"
                name="addr2"
                value={studentData.addr2}
                onChange={handleInputChange}
                placeholder="400004"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="form-section required-fields">
          <div className="form-group">
            <div className="form-item">
              <label>Previous Institute</label>
              <input
                type="text"
                name="previous_institute"
                value={studentData.previous_institute}
                onChange={handleTextInputChange}
              />{" "}
            </div>
            <div className="form-item">
              <label>Previous Education</label>
              <input
                type="text"
                name="previous_education"
                value={studentData.previous_education}
                onChange={handleTextInputChange}
              />{" "}
            </div>
            <div className="form-item">
              <label>Grade of Marks</label>
              <input
                type="number"
                name="gradeofmarks"
                value={studentData.gradeofmarks}
                onChange={handleInputChange}
                placeholder="999"
              />
            </div>{" "}
          </div>
          <div id="form-group4" className="form-group">
            <div className="form-item">
              <label>Year of Admission</label>
              <input
                type="number"
                name="yearofadmission"
                value={studentData.yearofadmission}
                onChange={handleInputChange}
                placeholder="1999"
              />{" "}
            </div>
            <div className="form-item">
              <label>Year of Passing</label>
              <input
                type="number"
                name="yearofpassing"
                value={studentData.yearofpassing}
                onChange={handleInputChange}
                placeholder="2002"
              />{" "}
            </div>
            <div className="form-item">
              <label>Current Status</label>
              <input
                type="text"
                name="current_status"
                value={studentData.current_status}
                onChange={handleTextInputChange}
              />{" "}
            </div>
            <div className="form-item">
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                id="category"
                value={studentData.category}
                onChange={handleInputChange}
                // style={styles.input}
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                {allCat.length > 0 &&
                  allCat.map((cat) => {
                    return (
                      <option key={cat.cat_id} value={cat.name}>
                        {cat.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div  className="form-section required-fields">
          <div id="form-group5" className="form-group">
            <div className="form-item">
              <label>Seat Types</label>
              <select
                name="seatType"
                value={studentData.seatType}
                onChange={handleInputChange}
              >
                <option value="General">General</option>
                <option value="Management Quota">Management Quota</option>
                <option value="Reserved Category">Reserved Category</option>
                <option value="NRI Quota">NRI Quota</option>
              </select>
            </div>
            <div className="form-item">
              <label>College Year</label>
              <select
                type="number"
                name="collegeYear"
                value={studentData.collegeYear}
                onChange={handleInputChange}
              >
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="form-item">
              <label>Branch</label>
              <select
                name="branch"
                value={studentData.branch}
                onChange={handleInputChange}
              >
                <option value="">Select Branch</option>
                <option value="Computer">Computer Science</option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Chemical">Chemical Engineering</option>
                <option value="Aerospace">Aerospace Engineering</option>
                {/* Add more options for other engineering branches */}
              </select>
            </div>
            <div className="form-item">
              <label>Admitted to Academic Year</label>
              <select
                name="admittedtoacademicyear"
                type="number"
                value={studentData.admittedtoacademicyear}
                onChange={handleInputChange}
              >
                <option value="">Select Academic Year</option>
                {generateAcademicYearOptions()}
              </select>
            </div>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddStudentForm;

import axios from "axios";
import React, { useState, useEffect } from "react";

const AddBranchForm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [branch, setBranch] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  const formatTime = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  const formatWeekday = () => {
    const options = {
      weekday: "long",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  //academic year selector
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    // console.log("Branch:", branch);
    addData();
  };

  const addData = async () => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/addBranch`,
        {name: branch}
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
    <div style={styles.mainContent}>
      <h3>Master {'>'} Add Branch</h3>

      <div style={styles.formContainer}>
      <form onSubmit={handleFormSubmit}>

          <div style={styles.inputGroup}>
          <label htmlFor="branch">Branch Name:</label>
            <select
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              style={styles.input}
            >
              <option value="branch" disabled hidden>Select Branch</option>
              <option value="Computer">Computer Science</option>
              <option value="IT">IT</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="AI & DS">AI & DS</option>
            </select>
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Add Branch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBranchForm;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
  },

  formContainer: {
    padding: "20px",
    borderRadius: "4px",
    flex: "none",
  },

  inputGroup: {
    marginBottom: "10px",
    fontWeight: "bold",

  },
  label: {
    marginRight: "10px",
    padding: "10px",
    marginBottom: "20px",
    marginTop: "20px",
  },
  input: {
    flex: "0 0 60px",
    border: "1px solid #ccc",
    transition: "border-color 0.3s ease",
    padding: "8px",
    marginRight: "30px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginTop: "20px",
    borderRadius: "4px",
    borderColor: "#4d4d4d",
  },
  buttonContainer: {
    display: "flex",

  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#00b695",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "70px",
    marginBottom: "30px",
  },
};
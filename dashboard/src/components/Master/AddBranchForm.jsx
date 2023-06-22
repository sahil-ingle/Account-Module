import axios from "axios";
import React, { useState, useEffect } from "react";

const AddBranchForm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [branch, setBranch] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherBranch, setOtherBranch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isOtherSelected && otherBranch.trim() === "") {
      setErrorMessage("Please enter a branch name.");
    } else if (!isOtherSelected && branch === "") {
      setErrorMessage("Please select a branch.");
    } else {
      setErrorMessage("");
      addData();
    }
  };

  const addData = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/addBranch", {
        name: isOtherSelected ? otherBranch : branch,
      });
      if (data.success === true) {
        console.log("Data saved successfully");
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    if (e.target.value === "other") {
      setIsOtherSelected(true);
    } else {
      setIsOtherSelected(false);
    }
  };

  const handleOtherBranchChange = (e) => {
    setOtherBranch(e.target.value);
  };

  return (
    <div style={styles.mainContent}>
      <h3 style={{ letterSpacing: 3, fontWeight: "bolder" }}>
        Master Tab &gt; Add Branch
      </h3>

      <div style={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="branch">Branch Name:</label>
            {isOtherSelected ? (
              <input
                type="text"
                id="branch"
                value={otherBranch}
                onChange={handleOtherBranchChange}
                style={styles.input}
                placeholder="Enter branch name"
              />
            ) : (
              <select
                id="branch"
                value={branch}
                onChange={handleBranchChange}
                style={styles.input}
              >
                <option value="" disabled hidden>
                  Select Branch
                </option>
                <option value="computer">Computer Science</option>
                <option value="it">IT</option>
                <option value="electrical">Electrical</option>
                <option value="mechanical">Mechanical</option>
                <option value="civil">Civil</option>
                <option value="ai_ds">AI & DS</option>
                <option value="other">Other</option>
              </select>
            )}
          </div>
          {errorMessage && <p style={styles.error}>{errorMessage}</p>}
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
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

import React, { useState, useEffect } from "react";

const AddCategoryForm = () => {

  const [category, setCategory] = useState("");

  //academic year selector
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log("Category:", category);
  };



  return (
    <div style={styles.mainContent}>

      <h3>Master {'>'} Add Category</h3>

      <div style={styles.formContainer}>
      <form onSubmit={handleFormSubmit}>

          <div style={styles.inputGroup}>
          <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            >
              <option value="category" disabled hidden>Select Category</option>
              <option value="open">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Add Category
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default AddCategoryForm;


const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },

  formContainer: {
    padding: "20px",
    borderRadius: "4px",
  },

  inputGroup: {
    display: "flex",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  label: {
    marginRight: "10px",
    padding: "10px",
  },
  input: {
    padding: "5px",
    marginRight: "30px",
    marginBottom: "30px",
    marginLeft: "30px"
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
  },
};


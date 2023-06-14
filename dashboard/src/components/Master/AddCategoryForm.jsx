import { useState } from "react";
import "./AddCategoryForm.css";
import axios from "axios";

const AddCategoryForm = () => {
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleAddCat = (e) => {
    e.preventDefault();
    if (category) {
      setMessage(`Category ${category} added successfully!`);
      addData();
    } else {
      setMessage("Please enter a Fee Head");
    }
  };

  const addData = async () => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/addCategory`,
        { name: category }
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
      <h3>Master {">"} Add Category</h3>

      <div className="formContainer">
        <form onSubmit={handleAddCat}>
          <div className="inputGroup">
            <label htmlFor="category">Category:</label>
            <div className="cat-selector">
              <input
                className="cat-input"
                type="text"
                name="category"
                placeholder="General"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button type="submit" className="submitButton">
              Add Category
            </button>
          </div>
        </form>
        <p className="messagepara">{message}</p>
      </div>
    </div>
  );
};

export default AddCategoryForm;

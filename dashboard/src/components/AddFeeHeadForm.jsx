import { useState } from "react";
import "./AddFeeForm.css";
import axios from "axios";

const AddFeeHeadForm = () => {
  const [feehead, setFeehead] = useState("");
  const [message, setMessage] = useState("");

  const handleFeeHead = (e) => {
    setFeehead(e.target.value);
  };

  const handleAddYear = (e) => {
    e.preventDefault();
    if (feehead) {
      setMessage(`Fee Head ${feehead} added successfully!`);
      addData();
    } else {
      setMessage("Please enter a Fee Head");
    }
  };

  const addData = async () => {
    try {
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:4000/addFeeHead`,
        { name: feehead }
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
      <h3>Master {">"} Add Fee Heads</h3>

      <div className="formContainer">
        <form onSubmit={handleAddYear}>
          <div className="inputGroup">
            <label htmlFor="feehead">Fee Head:</label>
            <div className="fee-selector">
              <input
                className="fee-input"
                type="text"
                name="feehead"
                placeholder="Tuition Fees"
                value={feehead}
                onChange={(e) => {
                  setFeehead(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button type="submit" className="submitButton">
              Add Fee Head
            </button>
          </div>
        </form>
        <p className="messagepara">{message}</p>
      </div>
    </div>
  );
};

export default AddFeeHeadForm;

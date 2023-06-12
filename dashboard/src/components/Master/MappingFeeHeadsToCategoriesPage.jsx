import React, { useState } from "react";
import "./Map.css";

const MappingFeeHeadsToCategoriesPage = () => {
  const [category, setCategory] = useState("General");
  const [feeHeads, setFeeHeads] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFeeHeadChange = (index, value) => {
    const updatedFeeHeads = [...feeHeads];
    updatedFeeHeads[index] = value;
    setFeeHeads(updatedFeeHeads);
  };

  const handleAmountChange = (index, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].amount = value;
    setTableData(updatedTableData);
  };

  const handleAddRow = () => {
    const newTableData = [...tableData];
    newTableData.push({ feeHead: "", amount: "" });
    setTableData(newTableData);
  };

  const handleDeleteRow = (index) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
  };

  const handleSave = () => {
    // Handle save functionality here
    console.log("Saved:", tableData);
  };

  return (
    <div>
      <h1>Mapping Fee Heads to Categories</h1>
      <div>
        <label>Select Category: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="General">General</option>
          <option value="Regular">Regular</option>
        </select>
      </div>
      {tableData.map((row, index) => (
        <div key={index}>
          <label>Fee Head: </label>
          <input
            type="text"
            placeholder="Developement Fe"
            value={feeHeads[index] || ""}
            onChange={(event) => handleFeeHeadChange(index, event.target.value)}
          />
          <label>Amount: </label>
          <input
            placeholder="12345"
            type="number"
            value={row.amount || ""}
            onChange={(event) => handleAmountChange(index, event.target.value)}
          />
          <div>
            <button className="mybtn" onClick={handleAddRow}>Add</button>
            <button className="mybtn" onClick={() => handleDeleteRow(index)}>Delete line </button>
          </div>
        </div>
      ))}
      <table>
        <thead>
          <tr>
            <th>Fee Head</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{feeHeads[index] || ""}</td>
              <td>{row.amount || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Save</button>
    </div>
  );
};

export default MappingFeeHeadsToCategoriesPage;

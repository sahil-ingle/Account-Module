import React, { useState } from 'react';
import './Branch.css';

const AddBranchPage = () => {
    const [selectedBranch, setSelectedBranch] = useState('');
    const [message, setMessage] = useState('');
    const [isBranchListOpen, setIsBranchListOpen] = useState(false);
  
    const engineeringBranches = [
      'Computer Science',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Biomedical Engineering',
      // Add more branches as needed
    ];
  
    const handleBranchSelection = (branch) => {
      setSelectedBranch(branch);
      setIsBranchListOpen(false);
    };
  
    const handleAddBranch = () => {
      if (selectedBranch) {
        setMessage(`Branch ${selectedBranch} added successfully!`);
      } else {
        setMessage('Please select a branch.');
      }
    };
  
    const toggleBranchList = () => {
      setIsBranchListOpen(!isBranchListOpen);
    };
  
    return (
      <div>
        <h1>Add Branch</h1>
        <div className={`branch-selector ${isBranchListOpen ? 'is-open' : ''}`}>
            Branch Name:  
          <button className="branch-button" onClick={toggleBranchList}>
            {selectedBranch ? selectedBranch : 'Select Branch'}
          </button>
          {isBranchListOpen && (
            <ul className="branch-list">
              {engineeringBranches.map((branch) => (
                <li key={branch} onClick={() => handleBranchSelection(branch)}>
                  {branch}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
        <button className="add-branch-button" onClick={handleAddBranch}>
          Add Branch
        </button>
        <p className='messagepara'>{message}</p>
        </div>
      </div>
    );
  };
  
  export default AddBranchPage;
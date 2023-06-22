import React from 'react';

const ReceiptTemplate = ({ receiptNo, date, academicYear, name, branch, collegeYear, bankName, bankBranch, chequeDate, chequeNo, tableData }) => {
  return (
    <div>
      <h1>Receipt</h1>
      <p>Receipt No: {receiptNo}</p>
      <p>Date: {date}</p>
      <p>Academic Year: {academicYear}</p>
      <p>Name: {name}</p>
      <p>Branch: {branch}</p>
      <p>College Year: {collegeYear}</p>
      <p>Bank Name: {bankName}</p>
      <p>Bank Branch: {bankBranch}</p>
      <p>Cheque Date: {chequeDate}</p>
      <p>Cheque No: {chequeNo}</p>
      
      <table>
        <thead>
          <tr>
            <th>Fee Head</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ feeHead, amount }, index) => (
            <tr key={index}>
              <td>{feeHead}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptTemplate;

import React from "react";

const PrintReceipt = ({ transaction }) => {
  return (
    <html>
      <head>
        <title>Receipt Print</title>
        <style>
          {/* Define your print styles here */}
          {/* For example, hide unnecessary elements */}
          table {'{'} display: none; {'}'}
          {/* Or apply custom styles for printing */}
          {/* For example, adjust font size and layout */}
          body {'{'} font-size: 12px; {'}'}
          {/* Add any other print-specific styles you need */}
        </style>
      </head>
      <body>
        <h2>Receipt No: {transaction.receiptNo}</h2>
        <p>Name: {transaction.name}</p>
        <p>Branch: {transaction.branch}</p>
        <p>Academic Year: {transaction.academicYear}</p>
        <p>Phone Number: {transaction.phone}</p>
        {/* Include other transaction details as needed */}
      </body>
    </html>
  );
};

export default PrintReceipt;

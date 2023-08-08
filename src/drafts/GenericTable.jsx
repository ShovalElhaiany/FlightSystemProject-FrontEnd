import React from 'react';
import '../../css/table/GenericTable.css';

const GenericTable = ({ data, columns }) => {
  const handleRowClick = (rowData) => {
    console.log('Row clicked:', rowData);
  };

  return (
    <div className="generic-table-container">
      <table className="generic-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => handleRowClick(row)} className="row-button">
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  <div className="cell-content">{row[column.field]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;

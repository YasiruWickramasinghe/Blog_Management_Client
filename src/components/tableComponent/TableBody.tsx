import React from 'react';

interface TableBodyProps {
  data: any[];
  columns: string[];
  renderActionColumn: (row: any) => React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns, renderActionColumn }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, columnIndex) => {
            if (column === 'Action') {
              return (
                <td key={columnIndex}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {renderActionColumn(row)}
                  </div>
                </td>
              );
            } else if (column === 'id') {
              return <td key={columnIndex}>{rowIndex + 1}</td>; 
            } else {
              return <td key={columnIndex}>{row[column]}</td>;
            }
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

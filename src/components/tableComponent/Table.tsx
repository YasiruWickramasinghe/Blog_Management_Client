import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface TableProps {
  data: any[];
  columns: string[];
  renderActionColumn: (row: any) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ data, columns, renderActionColumn }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} renderActionColumn={renderActionColumn} />
    </table>
  );
};

export default Table;

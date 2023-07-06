import React from 'react';
import Button from '../Button';
import Table from '../tableComponents/Table';
import { Blog } from '../../types/blogTypes';

interface TableViewProps {
  blogs: Blog[];
  currentPage: number;
  rowsPerPage: number;
  handleShowClick: (id: string) => void;
  handleUpdateClick: (id: string) => void;
  handleDeleteClick: (id: string) => void;
}

const TableView: React.FC<TableViewProps> = ({
  blogs,
  currentPage,
  rowsPerPage,
  handleShowClick,
  handleUpdateClick,
  handleDeleteClick,
}) => {
  const bodyColumns = ['id', 'name', 'author', 'Action'];
  const headColumns = ['ID', 'NAME', 'AUTHOR', 'ACTION'];

  return (
    <Table
      data={blogs}
      bodyColumns={bodyColumns}
      headColumns={headColumns}
      currentPage={currentPage}
      rowsPerPage={rowsPerPage}
      renderActionColumn={(_row) => (
        <>
          <Button
            buttonStyle={'btn btn-outline-primary btn-sm'}
            onClick={() => handleShowClick(_row._id)}
          >
            SHOW
          </Button>
          <Button
            buttonStyle={'btn btn-outline-warning btn-sm'}
            onClick={() => handleUpdateClick(_row._id)}
          >
            UPDATE
          </Button>
          <Button
            buttonStyle={'btn btn-outline-danger btn-sm'}
            onClick={() => handleDeleteClick(_row._id)}
          >
            DELETE
          </Button>
        </>
      )}
    />
  );
};

export default TableView;

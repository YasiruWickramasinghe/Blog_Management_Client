import React from 'react';
import { Blog } from '../../types/blogTypes';
import Button from '../Button';

interface CardViewProps {
  blogs: Blog[];
  onDelete: (id: string) => void;
  onShow: (id: string) => void;
  onUpdate: (id: string) => void;
}

const CardView: React.FC<CardViewProps> = ({ blogs, onDelete, onShow, onUpdate }) => {

  return (
    <div className="row">
      {blogs.map((blog) => (
        <div className="col-md-4" key={blog._id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{blog.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{blog.author}</h6>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button
                buttonStyle="btn btn-outline-primary btn-sm"
                onClick={() => onShow(blog._id)}
              >
                SHOW
              </Button>
              <Button
                buttonStyle="btn btn-outline-warning btn-sm"
                onClick={() => onUpdate(blog._id)}
              >
                UPDATE
              </Button>
              <Button
                buttonStyle="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(blog._id)}
              >
                DELETE
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;

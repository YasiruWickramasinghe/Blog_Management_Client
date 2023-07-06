import React from 'react';
import BlogForm from '../../components/blogComponents/BlogForm';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const NewBlog: React.FC = () => {
  return (
    <div className="container">
      <Link to="/blogstableview">
        <Button buttonStyle={'btn btn-outline-secondary btn-sm mb-3'}>Back</Button>
      </Link>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Card header={<h2>CREATE BLOG</h2>}>
            <BlogForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;

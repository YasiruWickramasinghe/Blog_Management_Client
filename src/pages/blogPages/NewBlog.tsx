import React from 'react';
import BlogForm from '../../components/blogComponents/BlogForm';
import Card from '../../components/Card';

const NewBlog: React.FC = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Card header={<h2>Create Blog</h2>}>
            <BlogForm />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;

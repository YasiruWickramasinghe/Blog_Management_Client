import React, { useEffect, useState } from 'react';
import BlogForm from '../../components/blogComponents/BlogForm';
import Card from '../../components/Card';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../service/blogAPI';
import { Blog } from '../../types/blogTypes';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


const UpdateBlog: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const fetchedBlog = await getBlogById(id);
          setBlog(fetchedBlog);
        } catch (error) {
          console.error('Error fetching blog:', error);
          // Handle error if necessary
        }
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="container">
      <Link to="/blogstableview">
        <Button buttonStyle={'btn btn-outline-secondary btn-sm mb-3'}>Back</Button>
      </Link>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Card header={<h2>UPDATE BLOG</h2>}>
            {blog && <BlogForm isUpdateForm initialData={blog} />}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;

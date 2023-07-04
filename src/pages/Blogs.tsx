import React, { useEffect, useState } from 'react';
import { getBlogs } from '../service/blogAPI';
import { Blog } from '../types/blogTypes';
import Button from '../components/Button'

const Blogs: React.FC = () => {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response: Blog[] = await getBlogs();
                setBlogs(response.data);

            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    const handleClickShow = () => {
        console.log('Show Clicked!');
      };

      const handleClickUpdate = () => {
        console.log('Update Clicked!');
      };

      const handleClickDelete = () => {
        console.log('Delete Clicked!');
      };

    return (
        <>
            <h1 className="text-center">BLOGS PAGE</h1>
            <br />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col" colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={blog._id}>
                            <th>{index + 1}</th>
                            <td>{blog.name}</td>
                            <td>{blog.author}</td>
                            <td><Button buttonStyle={'btn btn-outline-primary btn-sm'} onClick={handleClickShow}>SHOW</Button></td>
                            <td><Button buttonStyle={'btn btn-outline-warning btn-sm'} onClick={handleClickUpdate}>UPDATE</Button></td>
                            <td><Button buttonStyle={'btn btn-outline-danger btn-sm'} onClick={handleClickDelete}>DELETE</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Blogs;

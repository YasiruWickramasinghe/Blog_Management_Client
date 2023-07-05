import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getBlogs, deleteBlog } from '../../service/blogAPI';
import { Blog } from '../../types/blogTypes';
import Button from '../../components/Button';
import Table from '../../components/tableComponent/Table';
import Swal from 'sweetalert2';

const BlogList: React.FC = () => {
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

    const navigateTo = useNavigate();

    const handleShowClick = (id: string) => {
        // Redirect to the BlogItem page with the blog ID in the URL
        navigateTo(`/blogitem/${id}`);
    };


    const handleUpdateClick = (id: string) => {
        // Redirect to the UpdateBlog page with the blog ID in the URL
        navigateTo(`/updateblog/${id}`);
    };

    const handleDeleteClick = async (id: string) => {
        try {
            // Show SweetAlert confirmation dialog
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Delete the blog
                    handleDeleteConfirmation(id);
                }
            });
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const handleDeleteConfirmation = (id: string) => {
        // Perform the delete operation
        deleteBlog(id)
            .then(() => {
                setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: "Your blog has been deleted.",
                    showConfirmButton: false,
                    timer: 1000,
                  });

                
            })
            .catch((error) => {
                console.error('Error deleting blog:', error);
                // Show error message
                Swal.fire(
                    'Error',
                    'An error occurred while deleting the blog.',
                    'error'
                );
            });
    };



    const bodyColumns = ['id', 'name', 'author', 'Action'];
    const headColumns = ['ID', 'NAME', 'AUTHOR', 'ACTION'];

    return (
        <>
            <div className="d-flex justify-content-end">
                <Link to="/newblog">
                    <Button buttonStyle={'btn btn-primary'}>NEW BLOG</Button>
                </Link>
            </div>
            <h1 className="text-center">BLOGS PAGE</h1>
            <Table
                data={blogs}
                bodyColumns={bodyColumns}
                headColumns={headColumns}
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
        </>
    );
};

export default BlogList;

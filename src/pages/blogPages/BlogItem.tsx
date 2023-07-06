import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBlogById, deleteBlog } from '../../service/blogAPI';
import { Blog } from '../../types/blogTypes';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlogItem: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const navigateTo = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (id) {
                    const response: Blog = await getBlogById(id);
                    setBlog(response);
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlog();
    }, [id]);

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
                navigateTo('/blogstableview');

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



    return (
        <>
            <div className="container">
                <Link to="/blogstableview">
                    <Button buttonStyle={'btn btn-outline-secondary btn-sm'}>Back</Button>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Card header="BLOG DETAILS">
                            {blog ? (
                                <>
                                    <h2 className="text-center">{blog.name}</h2>
                                    <p>Name: {blog.name}</p>
                                    <p>Author: {blog.author}</p>
                                </>
                            ) : (
                                <p>Loading blog...</p>
                            )}
                            <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <Button
                                        buttonStyle={'btn btn-outline-warning btn-block'}
                                        onClick={() => handleUpdateClick(id!)}
                                    >
                                        UPDATE
                                    </Button>

                                </div>
                                <div className="col-md-6">
                                    <Button
                                        buttonStyle={'btn btn-outline-danger btn-block'}
                                        onClick={() => handleDeleteClick(id!)}
                                    >
                                        DELETE
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogItem;

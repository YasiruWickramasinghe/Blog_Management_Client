import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../service/blogAPI';
import { Blog } from '../../types/blogTypes';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const BlogItem: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);

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

    const handleUpdateClick = () => {
        console.log('Update Clicked!');
    };

    const handleDeleteClick = () => {
        console.log('Delete Clicked!');
    };

    return (
        <>
            <div className="container">
            <Link to="/bloglist">
                    <Button buttonStyle={'btn btn-outline-secondary btn-sm'}>Back</Button>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Card header="BLOG DETAILS">
                            {blog ? (
                                <>
                                    <h2>{blog.name}</h2>
                                    <p>{blog.author}</p>
                                    <p>Author: {blog.author}</p>
                                </>
                            ) : (
                                <p>Loading blog...</p>
                            )}
                            <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <Button
                                        buttonStyle={'btn btn-outline-warning btn-block'}
                                        onClick={handleUpdateClick}
                                    >
                                        UPDATE
                                    </Button>

                                </div>
                                <div className="col-md-6">
                                    <Button
                                        buttonStyle={'btn btn-outline-danger btn-block'}
                                        onClick={handleDeleteClick}
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

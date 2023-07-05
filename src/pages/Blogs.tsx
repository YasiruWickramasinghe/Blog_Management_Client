import React, { useEffect, useState } from 'react';
import { getBlogs } from '../service/blogAPI';
import { Blog } from '../types/blogTypes';
import Button from '../components/Button';
import Table from '../components/tableComponent/Table';

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

    const bodyColumns = ['id', 'name', 'author', 'Action'];
    const headColumns = ['ID', 'NAME', 'AUTHOR', 'ACTION'];

    const handleShowClick = () => {
        console.log('Show Clicked!');
    };

    const handleUpdateClick = () => {
        console.log('Update Clicked!');
    };

    const handleDeleteClick = () => {
        console.log('Delete Clicked!');
    };

    return (
        <>
            <h1 className="text-center">BLOGS PAGE</h1>
            <br />
            <Table
                data={blogs}
                bodyColumns={bodyColumns}
                headColumns={headColumns}
                renderActionColumn={(_row) => (
                    <>
                        <Button
                            buttonStyle={'btn btn-outline-primary btn-sm'}
                            onClick={handleShowClick}
                        >
                            SHOW
                        </Button>
                        <Button
                            buttonStyle={'btn btn-outline-warning btn-sm'}
                            onClick={handleUpdateClick}
                        >
                            UPDATE
                        </Button>
                        <Button
                            buttonStyle={'btn btn-outline-danger btn-sm'}
                            onClick={handleDeleteClick}
                        >
                            DELETE
                        </Button>
                    </>
                )}
            />
        </>
    );
};

export default Blogs;

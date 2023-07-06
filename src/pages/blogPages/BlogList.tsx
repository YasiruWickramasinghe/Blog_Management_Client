import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getBlogs, deleteBlog, searchBlogs } from '../../service/blogAPI';
import { Blog } from '../../types/blogTypes';
import Button from '../../components/Button';
import Table from '../../components/tableComponent/Table';
import TablePagination from '../../components/tableComponent/TablePagination';
import Swal from 'sweetalert2';

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(1);

    const navigateTo = useNavigate();

    //Retreve data Function
    useEffect(() => {
        fetchBlogs(currentPage);
    }, [currentPage]);

    const fetchBlogs = async (page: number) => {
        try {
            const response = await getBlogs({ page });
            setBlogs(response.data);
            setTotalPages(response.totalPages);
            setRowsPerPage(response.limit);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const [searchQuery, setSearchQuery] = useState('');

    //Search Function
    const handleSearchClick = async (searchQuery: string) => {
        try {
            const response: Blog[] = await searchBlogs(searchQuery);
            setBlogs(response);
            setSearchQuery('');
            if (response.length === 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'Blogs Not Found!',
                }).then(() => {
                    fetchBlogs(currentPage);
                });
            }
        } catch (error) {
            console.error('Error searching blogs:', error);
        }
    };

    //Show Function
    const handleShowClick = (id: string) => {
        navigateTo(`/blogitem/${id}`);
    };

    //Update Function
    const handleUpdateClick = (id: string) => {
        navigateTo(`/updateblog/${id}`);
    };

    //Delete Function
    const handleDeleteClick = async (id: string) => {
        try {
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
                    handleDeleteConfirmation(id);
                }
            });
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const handleDeleteConfirmation = async (id: string) => {
        try {
          await deleteBlog(id);
          const updatedBlogs = blogs.filter(blog => blog._id !== id);
          setBlogs(updatedBlogs);
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your blog has been deleted.',
            showConfirmButton: false,
            timer: 1000,
          });
      
          // Check if the current page's blogs are empty
          if (updatedBlogs.length === 0 && currentPage > 1) {
            const previousPage = currentPage - 1;
            fetchBlogs(previousPage);
          }
        } catch (error) {
          console.error('Error deleting blog:', error);
          Swal.fire('Error', 'An error occurred while deleting the blog.', 'error');
        }
      };
      

      
    //Pagination
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="text-center">BLOGS</h1>
                </div>
                <div>
                    <form
                        className="form-inline"
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            const searchQuery = (e.currentTarget.elements.namedItem(
                                'search'
                            ) as HTMLInputElement).value;
                            handleSearchClick(searchQuery);
                        }}
                    >
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="SEARCH BLOG"
                            name="search"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button buttonStyle={'btn btn-success my-2 my-sm-4'} type="submit">
                            SEARCH
                        </Button>
                    </form>
                </div>
            </div>
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
            <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default BlogList;

import axios, { AxiosResponse } from 'axios';
import { Blog } from '../types/blogTypes';

const BASE_URL = 'http://localhost:3000';

const blogAPI = axios.create({
    baseURL: BASE_URL,
});

interface GetBlogsOptions {
    page?: number;
    limit?: number;
    sort?: Record<string, number>;
    filter?: Record<string, any>;
    search?: string;
}

export const getBlogs = async ({
    page = 1,
    limit = 10,
    sort = {},
    filter = {},
    search = '',
}: GetBlogsOptions = {}): Promise<Blog[]> => {
    try {
        const response: AxiosResponse<Blog[]> = await blogAPI.get('/blogs', {
            params: {
                page,
                limit,
                sort: JSON.stringify(sort),
                filter: JSON.stringify(filter),
                search,
            },
        });
        return response.data;
    } catch (error: any) {
        handleRequestError(error);
        throw error;
    }
};

export const getBlogById = async (id: string): Promise<Blog> => {
    try {
        const response: AxiosResponse<Blog> = await blogAPI.get(`/blogs/${id}`);
        return response.data;
    } catch (error: any) {
        handleRequestError(error);
        throw error;
    }
};

export const createBlog = async (blogData: Partial<Blog>): Promise<Blog> => {
    try {
        const response: AxiosResponse<Blog> = await blogAPI.post('/blogs', blogData);
        return response.data;
    } catch (error: any) {
        handleRequestError(error);
        throw error;
    }
};

export const updateBlog = async (id: string, blogData: Partial<Blog>): Promise<Blog> => {
    try {
        const response: AxiosResponse<Blog> = await blogAPI.put(`/blogs/${id}`, blogData);
        return response.data;
    } catch (error: any) {
        handleRequestError(error);
        throw error;
    }
};

export const deleteBlog = async (id: string): Promise<void> => {
    try {
        await blogAPI.delete(`/blogs/${id}`);
    } catch (error: any) {
        handleRequestError(error);
        throw error;
    }
};

export const searchBlogs = async (searchQuery: string): Promise<Blog[]> => {
    try {
        const response: AxiosResponse<Blog[]> = await blogAPI.get('/blogs/search', {
            params: { searchQuery },
        });
        return response.data;
    } catch (error: any) {
        handleRequestError(error);
        throw error;
    }
};

const handleRequestError = (error: any) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Request error:', error.response.status, error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response:', error.request);
    } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
    }
};

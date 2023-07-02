import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000';

interface Blog {
    id: string;
    name: string;
    author: string;
    // Add other properties as needed
}

const blogAPI = axios.create({
    baseURL: BASE_URL,
});

// Retrieve all blogs with pagination, sorting, filtering, and search
export const getBlogs = async (
    page = 1,
    limit = 10,
    sort: Record<string, number> = {},
    filter: Record<string, any> = {},
    search = ''
): Promise<Blog[]> => {
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
    } catch (error) {
        // Handle error
        throw error;
    }
};

// Retrieve a specific blog by ID
export const getBlogById = async (id: string): Promise<Blog> => {
    try {
        const response: AxiosResponse<Blog> = await blogAPI.get(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
};

// Create a new blog
export const createBlog = async (blogData: Partial<Blog>): Promise<Blog> => {
    try {
        const response: AxiosResponse<Blog> = await blogAPI.post('/blogs', blogData);
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
};

// Update a blog by ID
export const updateBlog = async (id: string, blogData: Partial<Blog>): Promise<Blog> => {
    try {
        const response: AxiosResponse<Blog> = await blogAPI.put(`/blogs/${id}`, blogData);
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
};

// Delete a blog by ID
export const deleteBlog = async (id: string): Promise<void> => {
    try {
        await blogAPI.delete(`/blogs/${id}`);
        return; // Return nothing if successful
    } catch (error) {
        // Handle error
        throw error;
    }
};

// Search blogs by name or author
export const searchBlogs = async (searchQuery: string): Promise<Blog[]> => {
    try {
        const response: AxiosResponse<Blog[]> = await blogAPI.get(`/blogs/search`, {
            params: { searchQuery },
        });
        return response.data;
    } catch (error) {
        // Handle error
        throw error;
    }
};

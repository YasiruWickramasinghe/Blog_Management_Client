// import React, { useEffect, useState } from 'react';
// import { getBlogs, createBlog } from '../service/blogAPI';

// interface Blog {
//   id: string;
//   name: string;
//   author: string;
//   // Add other properties as needed
// }

// const BlogList: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   console.log('Blogs:', blogs);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const fetchedBlogs = await getBlogs();
//         console.log('Fetched blogs:', fetchedBlogs);
//         setBlogs(fetchedBlogs);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const handleCreateBlog = async () => {
//     const newBlogData: Partial<Blog> = {
//       name: 'New Blog',
//       author: 'John Doe',
//     };

//     try {
//       const createdBlog = await createBlog(newBlogData);
//       setBlogs([...blogs, createdBlog]);
//       console.log('Created blog:', createdBlog);
//     } catch (error) {
//       console.error('Error creating blog:', error);
//     }
//   };

//   // console.log('Render blogs:', blogs.map);
  

//   return (
//     <div>
//       <h2>Blog List</h2>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h3>{blog.name}</h3>
//           <p>Author: {blog.author}</p>
//           {/* Add other blog details */}
//         </div>
//       ))}
//       <button onClick={handleCreateBlog}>Create Blog</button>
//     </div>
//   );
// };

// export default BlogList;

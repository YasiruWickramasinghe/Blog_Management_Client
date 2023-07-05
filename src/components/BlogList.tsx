// import { useEffect, useState } from 'react';
// import { getBlogs } from '../service/blogAPI';
// import { Blog } from '../types/blogTypes';

// const BlogList: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response: Blog[] = await getBlogs();
//         setBlogs(response.data);

//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <>
//       <h2>Blog List</h2>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog._id}>
//             <strong>{blog.name}</strong> by {blog.author}
//           </li>
//         ))}
//       </ul>
//       <button>Create Blog</button>
//     </>
//   );
// };

// export default BlogList;

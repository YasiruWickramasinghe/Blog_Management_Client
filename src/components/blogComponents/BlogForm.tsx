// BlogForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormField from '../formComponents/FormField';
import Button from '../Button';
import Swal from 'sweetalert2';
import { createBlog, updateBlog } from '../../service/blogAPI';
import { Blog } from '../../types/blogTypes';

type FormData = {
  name: string;
  author: string;
};

type BlogFormProps = {
  isUpdateForm?: boolean;
  initialData?: Blog;
};

const BlogForm: React.FC<BlogFormProps> = ({ isUpdateForm = false, initialData }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const navigateTo = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      if (isUpdateForm && initialData && initialData._id) {
        // Update the blog
        await updateBlog(initialData._id, data);

        // Show update completed message
        Swal.fire({
          icon: 'warning',
          title: 'Updated!',
          text: "Your blog has been updated.",
          showConfirmButton: false,
          timer: 1000,
        });

      } else {
        // Create the blog
        await createBlog(data);

        // Show creation completed message
        Swal.fire({
          icon: 'success',
          title: 'Created!',
          text: "Your blog has been created.",
          showConfirmButton: false,
          timer: 1000,
        });
      }

      // Clear form fields
      reset();

      // Show submission completed message
      setSubmissionCompleted(true);

      // Reset message after 2 seconds
      setTimeout(() => {
        setSubmissionCompleted(false);
        navigateTo('/bloglist');
      }, 2000);
    } catch (error) {
      console.error('Error creating/updating blog:', error);
      // Handle error if necessary
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Name"
        name="name"
        defaultValue={isUpdateForm && initialData ? initialData.name : ''}
        register={register('name', { required: 'Name is required' })}
        error={errors.name}
      />

      <FormField
        label="Author"
        name="author"
        defaultValue={isUpdateForm && initialData ? initialData.author : ''}
        register={register('author', { required: 'Author is required' })}
        error={errors.author}
      />

      <div className="d-flex justify-content-center mt-5">
        <Button onClick={handleSubmit(onSubmit)} buttonStyle={`btn btn-${isUpdateForm ? 'warning' : 'success'} btn-block`}>
          {isUpdateForm ? 'UPDATE' : 'CREATE'}
        </Button>
      </div>


      {submissionCompleted}
    </form>
  );
};

export default BlogForm;

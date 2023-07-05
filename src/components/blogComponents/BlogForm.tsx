import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormField from '../formComponent/FormField';
import Button from '../Button';
import Swal from 'sweetalert2';
import { createBlog } from '../../service/blogAPI';

type FormData = {
    name: string;
    author: string;
};

const BlogForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [submissionCompleted, setSubmissionCompleted] = useState(false);
    const navigateTo = useNavigate();

    const onSubmit = async (data: FormData) => {
        try {
            // Create the blog
            await createBlog(data);

            // Show submission completed message
            Swal.fire({
                icon: 'success',
                title: 'Blog Created Successfully',
                showConfirmButton: false,
                timer: 1500
            });

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
            console.error('Error creating blog:', error);
            // Handle error if necessary
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                label="Name"
                name="name"
                register={register('name', { required: 'Name is required' })}
                error={errors.name}
            />

            <FormField
                label="Author"
                name="author"
                register={register('author', { required: 'Author is required' })}
                error={errors.author}
            />

            <div className="d-flex justify-content-center mt-5">
                <Button onClick={handleSubmit(onSubmit)} buttonStyle="btn btn-primary btn-block">
                    SUBMIT
                </Button>
            </div>

            {submissionCompleted}
        </form>
    );
};

export default BlogForm;

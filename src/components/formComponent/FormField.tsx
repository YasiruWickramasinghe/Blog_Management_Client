import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormFieldProps = {
  label: string;
  name: string;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
};

const FormField: React.FC<FormFieldProps> = ({ label, name, defaultValue, register, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        defaultValue={defaultValue} // Use defaultValue prop here
        {...register}
      />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
};

export default FormField;

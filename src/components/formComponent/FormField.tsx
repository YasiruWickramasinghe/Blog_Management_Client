import React from 'react';

type FormFieldProps = {
  label: string;
  name: string;
  register: any;
  error: any;
};

const FormField: React.FC<FormFieldProps> = ({ label, name, register, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        {...register}
      />
      {error && <p className="invalid-feedback">{error.message}</p>}
    </div>
  );
};

export default FormField;

import React from 'react';

const TextInput = ({
  name,
  label,
  register,
  errors,
  required,
  placeholder,
  type,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
        className="w-3/4 p-2 rounded-md text-gray-900"
      />
      {errors && <span>{errors.message}</span>}
    </div>
  );
};

export default TextInput;

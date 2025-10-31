import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, name, error, required, children, ...props }) => {
  const selectId = props.id || name;
  return (
    <div>
      <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={selectId}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
        className={`mt-1 block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all duration-200 ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...props}
      >
        {children}
      </select>
      {error && <p id={`${selectId}-error`} className="mt-1 text-sm text-red-600" role="alert">{error}</p>}
    </div>
  );
};

export default Select;

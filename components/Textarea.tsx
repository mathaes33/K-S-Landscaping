import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, error, required, ...props }) => {
  const textareaId = props.id || name;
  return (
    <div>
      <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={textareaId}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition-all duration-200 ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...props}
      ></textarea>
      {error && <p id={`${textareaId}-error`} className="mt-1 text-sm text-red-600" role="alert">{error}</p>}
    </div>
  );
};

export default Textarea;

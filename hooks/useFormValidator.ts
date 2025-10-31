import React, { useState, useCallback } from 'react';

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K], allValues: T) => string | undefined;
};

type FormErrors<T> = {
  [K in keyof T]?: string;
};

export const useFormValidator = <T extends Record<string, any>>(
  initialState: T,
  validationRules: ValidationRules<T>
) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const validate = useCallback(() => {
    const newErrors: FormErrors<T> = {};
    let isValid = true;

    for (const key in validationRules) {
      const rule = validationRules[key as keyof T];
      if (rule) {
        const error = rule(formData[key], formData);
        if (error) {
          newErrors[key as keyof T] = error;
          isValid = false;
        }
      }
    }
    
    setErrors(newErrors);
    return isValid;
  }, [formData, validationRules]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: fileInput.files ? fileInput.files[0] : undefined }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof T]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);
  
  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
  }, [initialState]);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    validate,
    resetForm,
  };
};

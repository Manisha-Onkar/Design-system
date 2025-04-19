import React from 'react';

export interface InputProps {
  id?: string; // ✅ New: add id prop
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password';
}

export const Input: React.FC<InputProps> = ({
  id, // ✅ New: destructure id
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id} // ✅ New: link label to input
        type={type}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

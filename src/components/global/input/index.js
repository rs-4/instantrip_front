import React from 'react';

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-[#D9D9D9] w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
    />
  );
};

export default Input;

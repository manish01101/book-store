
import React from 'react';

const Input = React.forwardRef(({ labelName, labelFor, inputType, placeholder, ...rest }, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor={labelFor} className="block text-gray-700 text-sm font-bold mb-2">
        {labelName}
      </label>
      <input
        id={labelFor}
        type={inputType}
        placeholder={placeholder}
        ref={ref} 
        {...rest} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
});

export default Input;




import React from 'react';


const Input = React.forwardRef(({ label, type = 'text', placeholder,value,onChange,className='', ...rest }, ref) => {
  return (
    <>
      {label && <label className="mb-2 d-block" htmlFor={rest.id}>{label}</label>}
      <input
        ref={ref}  
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`px-form-input  m-auto ${className}`}
        {...rest} 
      />
    </>
  );
});
Input.displayName = 'Input'
export default Input;


import React from 'react';


const Input = React.forwardRef(({ label, type = 'text', placeholder, ...rest }, ref) => {
  return (
    <>
      {label && <label className="mb-2" htmlFor={rest.id}>{label}</label>}
      <input
        ref={ref}  // This forwards the ref from React Hook Form
        type={type}
        placeholder={placeholder}
        className="px-form-input w-100 m-auto"
        {...rest}  // Spread other props (including register from React Hook Form)
      />
    </>
  );
});
Input.displayName = 'Input'
export default Input;
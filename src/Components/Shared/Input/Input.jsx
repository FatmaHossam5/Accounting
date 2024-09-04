import React from 'react'

export default function Input({label,type, placeholder, value, onChange,...rest}) {
  return (
    <>
    
    
   
        {label&& <label className="mb-2" htmlFor={rest.id}>{label}</label>}
          <input type={type}
           placeholder={placeholder}
            className="px-form-input w-100 m-auto" 
            value={value}
            onChange={onChange}
            {...rest}
            />
         
     
    
    </>
  )
}


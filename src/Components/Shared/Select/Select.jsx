import React, { useState } from 'react'

export default function Select({label,options,value,onChange,...rest}) {
 
  return (
    <>
    
    
  
     { label&&  <label htmlFor={rest.id} className='mb-2'>{label}</label>}
        <select id="companyIndustry" 
        type="text" 
        className="px-login-input w-100 ts"
        value={value}
        onChange={onChange}
        {...rest}
        >
            {options?.map((option,index)=>(
   <option key={index} value={option.value}>

    
    
    {option.label}</option>
            ))}
       
       
        </select>
    
    
    
    </>
  )
}
    {/* {option.flag&&(
      <img
      src={option.flag}
      alt={`${option.label} flag`}
      style={{
        width:"20px",
        marginRight:"8px",
        verticalAlign:"middle"
      }}
      />
    )}
     */}
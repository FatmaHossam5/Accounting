import React from 'react'

export default function SearchBar({placeholder,value,onChange}) {
  return (
    <>




 
        <div className="table-search w-50 ">
            <input
                type="search"
                className="px-form-input w-100 ps-5"
                placeholder={placeholder || "Search"}
                value={value}
                onChange={onChange}
            />
            <svg className="search-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.8055" cy="9.8055" r="7.49047" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
 



    </>
  )
}

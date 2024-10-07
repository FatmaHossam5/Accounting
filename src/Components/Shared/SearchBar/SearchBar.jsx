import React, { useState } from 'react'

import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
export default function SearchBar({ placeholder, value, onChange,filterGroups, onApply }) {
  const [openFilter, setOpenFilter] = useState(false);
  const toggleFilter = () => {
    setOpenFilter(prev => !prev)
  };
  const { control, reset, handleSubmit } = useForm();
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleApply = (data) => {
      onApply(data)
  }
  return (
    <>
      <div className="table-search w-50 position-relative ">
        <input
          type="search"
          className="px-form-input w-100 ps-5"
          placeholder={placeholder || "Search"}
          value={value}
          onChange={onChange}
        />
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '10px', top: '20px', transform: 'translateY(-50%)' }}>
          <circle cx="9.8055" cy="9.8055" r="7.49047" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '95%', top: '10px' }} onClick={toggleFilter}>
          <path fillRule="evenodd" clipRule="evenodd" d="M4.56517 3C3.70108 3 3 3.71286 3 4.5904V5.52644C3 6.17647 3.24719 6.80158 3.68936 7.27177L8.5351 12.4243L8.53723 12.4211C9.47271 13.3788 9.99905 14.6734 9.99905 16.0233V20.5952C9.99905 20.9007 10.3187 21.0957 10.584 20.9516L13.3436 19.4479C13.7602 19.2204 14.0201 18.7784 14.0201 18.2984V16.0114C14.0201 14.6691 14.539 13.3799 15.466 12.4243L20.3117 7.27177C20.7528 6.80158 21 6.17647 21 5.52644V4.5904C21 3.71286 20.3 3 19.4359 3H4.56517Z" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {openFilter && (<div className='filter-model'>
          <form onSubmit={handleSubmit(handleApply)}>
                {filterGroups?.map((group) => (
                    <div key={group.label}>
                        <label>{group.label}</label>
                        <Controller
                            name={group.name}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={group.options}
                                    isMulti
                                    onChange={(selected) => {
                                        field.onChange(selected);
                                        setSelectedOptions((prev) => ({
                                            ...prev, [group.name]: selected,
                                        }))
                                    }}
                                    value={selectedOptions[group.name]}
                                />
                            )}
                        />
                    </div>
                ))}

                <button type='button' onClick={() => reset()}>Reset </button>
                <button type='submit'>Apply</button>

            </form>


        </div>)}
      </div>
    </>
  )
}

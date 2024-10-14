import React, { useState } from 'react'
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';


export default function ManageColumns({ columns, onColumnToggle }) {
  const [visibleColumns, setVisibleColumns] = useState(columns);
  const [checked, setChecked] = useState(visibleColumns);



  const handleToggle = (columnId) => {
    const updatedColumns = visibleColumns.map((col) =>
      col.id === columnId ? { ...col, visible: !col.visible } : col
    );
    setVisibleColumns(updatedColumns);
    onColumnToggle(updatedColumns);
  };
  const handleSelectAll = () => {
    const allSelected = visibleColumns.every((col) => col.visible);
    const updatedColumns = visibleColumns.map((col) => ({
      ...col,
      visible: !allSelected,
    }));
    setVisibleColumns(updatedColumns);
    onColumnToggle(updatedColumns);
  };

  {/* SVG Icons */ }
  const gridIcon = (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_215_904)">
        <path d="M2.91667 20H1.25C0.560833 20 0 19.4392 0 18.75V1.25C0 0.560833 0.560833 0 1.25 0H2.91667C3.60583 0 4.16667 0.560833 4.16667 1.25V18.75C4.16667 19.4392 3.60583 20 2.91667 20ZM1.25 0.833333C1.13949 0.833333 1.03351 0.877232 0.955372 0.955372C0.877232 1.03351 0.833333 1.13949 0.833333 1.25V18.75C0.833333 18.8605 0.877232 18.9665 0.955372 19.0446C1.03351 19.1228 1.13949 19.1667 1.25 19.1667H2.91667C3.02717 19.1667 3.13315 19.1228 3.21129 19.0446C3.28943 18.9665 3.33333 18.8605 3.33333 18.75V1.25C3.33333 1.13949 3.28943 1.03351 3.21129 0.955372C3.13315 0.877232 3.02717 0.833333 2.91667 0.833333H1.25ZM18.75 20H17.0833C16.3942 20 15.8333 19.4392 15.8333 18.75V1.25C15.8333 0.560833 16.3942 0 17.0833 0H18.75C19.4392 0 20 0.560833 20 1.25V18.75C20 19.4392 19.4392 20 18.75 20ZM17.0833 0.833333C16.9728 0.833333 16.8668 0.877232 16.7887 0.955372C16.7106 1.03351 16.6667 1.13949 16.6667 1.25V18.75C16.6667 18.8605 16.7106 18.9665 16.7887 19.0446C16.8668 19.1228 16.9728 19.1667 17.0833 19.1667H18.75C18.8605 19.1667 18.9665 19.1228 19.0446 19.0446C19.1228 18.9665 19.1667 18.8605 19.1667 18.75V1.25C19.1667 1.13949 19.1228 1.03351 19.0446 0.955372C18.9665 0.877232 18.8605 0.833333 18.75 0.833333H17.0833ZM12.9167 20H7.08333C6.39417 20 5.83333 19.4392 5.83333 18.75V1.25C5.83333 0.560833 6.39417 0 7.08333 0H12.9167C13.6058 0 14.1667 0.560833 14.1667 1.25V18.75C14.1667 19.4392 13.6058 20 12.9167 20ZM7.08333 0.833333C6.97283 0.833333 6.86685 0.877232 6.7887 0.955372C6.71057 1.03351 6.66667 1.13949 6.66667 1.25V18.75C6.66667 18.8605 6.71057 18.9665 6.7887 19.0446C6.86685 19.1228 6.97283 19.1667 7.08333 19.1667H12.9167C13.0272 19.1667 13.1332 19.1228 13.2113 19.0446C13.2894 18.9665 13.3333 18.8605 13.3333 18.75V1.25C13.3333 1.13949 13.2894 1.03351 13.2113 0.955372C13.1332 0.877232 13.0272 0.833333 12.9167 0.833333H7.08333Z" fill="#4B4F56" />
      </g>
      <defs>
        <clipPath id="clip0_215_904">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
  const dropdownArrowIcon = (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.25 6.375L9 11.625L3.75 6.375" stroke="#4B4F56" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  )



  return (

    <DropdownButton id="dropdown-basic-button" 
    drop='down'
     title={<span>{gridIcon} <span className='mx-2'> Manage Columns </span> {dropdownArrowIcon}</span>} 
     className='px-btn px-gray-btn text-capitalize d-flex manage'
     onClick={(e) => e.stopPropagation()}
  
     >
<div className='w-100 p-2 dropdown-menu-custom'>
<ul className='w-100 p-2'>
  {/*Select All Checkbox */}
  <li className='mb-3'>
  <Form.Check
        type="checkbox"
        label="Select All"
        checked={visibleColumns?.every((col) => col.visible)}
        onChange={handleSelectAll}
        className="px-3"
      />
  </li>
  {/* Individual Column Checkboxes */}
  {visibleColumns.map((col) => (
    <li key={col.id} className='my-3'>
        <Form.Check
          
          type="checkbox"
          label={col.label}
          checked={col.visible}
          onChange={() => handleToggle(col.id)}
          className="px-3"
        />
    </li>

      ))}
</ul>
</div>


   



    </DropdownButton>


  )
}

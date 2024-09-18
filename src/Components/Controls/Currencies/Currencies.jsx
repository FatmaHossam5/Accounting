import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'

export default function Currencies() {
    const [openDropdownId, setopenDropdownId] = useState(null)
    const columns = [
      {
        name: " Id",
        selector: (row) => { row.id },
        sortable: true,
        cell: (row) => (
          <div className="d-flex align-items-center ">
            <span className="me-2">
              {row.id}
            </span>
            <Dropdown
  
              dropdownContent={
                <div>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-pencil-fill me-2 text-warning" />
                    Update
                  </a>
                  <a className="dropdown-item mt-1" href="#">
                    <i className="bi bi-trash-fill me-2 text-danger" />
                    Remove
                  </a>
  
                </div>
              }
              id={row.id}
              openDropdownId={openDropdownId}
              setOpenDropdownId={setopenDropdownId}
            />
          
          </div>
        ),
  
        style: {
          minWidth: '100px',
        }
  
      },
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "isActive",
        selector: (row) => row.isactive,
        sortable: true,
      },
   
   
    ];
  
    const data = [
      {
        id: 1,
        name:'EGP',
        isactive: "1",
      },
      {
        id: 2,
        name:'USD',
        isactive: "1",
      },
      {
        id: 3,
        name:'EGP',
        isactive: "1",
      },
    
    ];

    const handleClose = () => alert('close')

  const handleSave = () => alert('save')
  return (
    <>
      <CustomPage 
    title='currencies'
        ButtonName='Createcurrencies'
        ModalTitle='Create currencies'
        target='#createcurrencies'
      columns={columns}
      data={data}
      />
    {/* <Modal id='createcurrencies'title='currencies' onSave={handleSave} onCancel={handleClose} className='w-40'>
    <form action>
  <div className="  ">
    <div className="">
      <div className="form-inputs d-flex w-100">
        <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
          <Input placeholder='Name ' className="px-form-input w-100 m-auto" />
        </div>
   </div>
    </div>
  </div>
  <div className="modal-footer w-100">
    <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
    <button type="button" className="px-btn px-blue-btn">save</button>
  </div>
</form>
    </Modal> */}

    </>
    
    
    
  
  )
}

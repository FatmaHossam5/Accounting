import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'

export default function Taxs() {


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
        name: "Value",
        selector: (row) => row.value,
        sortable: true,
      },
      {
        name: "ValueType",
        selector: (row) => row.valuetype,
        sortable: true,
      },
   
    ];
  
    const data = [
      {
        id: 1,
        name:'pixi1',
        value: "20",
        valuetype: "percentage",  
      },
      {
        id: 2,
        name:'pixi1',
        value: "30",
        valuetype: "amount",  
      },
      {
        id: 3,
        name:'pixi1',
        value: "45",
        valuetype: "percentage",  
      },
    
    ];



    const handleClose = () => alert('close')

  const handleSave = () => alert('save')
  return (
    <>
    
    <CustomPage 
    title='Tax'
        ButtonName='CreateTax'
        ModalTitle='Create Tax'
        target='#createTax'
      columns={columns}
      data={data}
      />
    {/* <Modal id='createTax'title='Tax' onSave={handleSave} onCancel={handleClose} className='w-40'>
    <form action>
  <div className="  ">
    <div className="">
      <div className="form-inputs d-flex w-100">
        <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
          <Input label='NAME' placeholder='Name ' className="px-form-input w-100 m-auto" />
        </div>
        <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
          <Input label='Value' placeholder='value' className="px-form-input w-100 m-auto" />
        </div>
      </div>
      <div className="input-package my-3  d-flex flex-column w-100">
        <Select label='Value Type'
          htmlFor='valuetype'
          name='valuetype'
          id="valuetype"
          type="text"
          className="px-login-input w-100 "
          options={[
            { value: '', label: '...' },
            { value: 'Percentage', label: 'Percentage' },
            { value: 'amount', label: 'amount' },
          

          ]} />
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

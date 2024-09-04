import React, { useState } from 'react'
import Dropdown from '../../Shared/Dropdown/Dropdown';
import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';
import Modal from '../../Shared/Modal/Modal';
import CustomPage from '../../Shared/CustomPage/CustomPage';

export default function Departments() {

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
     



    ];

    const data = [
        {
            id: 1,
            name: 'Department 1',
       
        },

        {
            id: 2,
            name: 'Department 2',
         
        },
        {
            id: 3,
            name: 'Department 3',
          
        },

    ];



    const handleClose = () => alert('close')

    const handleSave = () => alert('save')
  return (
    <>
    
    <CustomPage
                title='Departments'
                ButtonName='Create Departments'
                ModalTitle='Create Departments'
                target='#createdepartments'
                columns={columns}
                data={data}
            />
            <Modal id='createdepartments' title='currencies' onSave={handleSave} onCancel={handleClose} className='w-40'>
                <form action>
                    <div className="  ">
                        <div className="">

                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label=' Name' placeholder=' Name ' className="px-form-input w-100 m-auto" />
                            </div>

                     




                        </div>
                    </div>

                    <div className="modal-footer w-100">
                        <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="px-btn px-blue-btn">save</button>
                    </div>
                </form>
            </Modal>
    
    </>
  )
}

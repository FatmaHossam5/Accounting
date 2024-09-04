import React, { useState } from 'react'
import Select from '../../Shared/Select/Select'
import Input from '../../Shared/Input/Input'
import Modal from '../../Shared/Modal/Modal'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'

export default function Categories() {
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
            name: "Parent",
            selector: (row) => row.parent,
            sortable: true,
        },
      



    ];

    const data = [
        {
            id: 1,
            name: 'category 1',
            parent: "Pixi",
           
        },

        {
            id: 2,
            name: 'category 2',
            parent: "Pixi",
          
        },
        {
            id: 3,
            name: 'category 3',
            parent: "Pixi",
       
        },

    ];



    const handleClose = () => alert('close')

    const handleSave = () => alert('save')
  return (
    <>
              <CustomPage
                title='Categories'
                ButtonName='Create Category'
                ModalTitle='Create Category'
                target='#createcategory'
                columns={columns}
                data={data}
            />
            <Modal id='createcategory' title='Categories' onSave={handleSave} onCancel={handleClose} className='w-40'>
                <form action>
                    <div className="  ">
                        <div className="">

                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label=' Name' placeholder=' Name ' className="px-form-input w-100 m-auto" />
                            </div>

                            <div className="input-package my-3  d-flex flex-column w-70 m-auto">
                                <Select label='Categories'
                                    htmlFor='Categories'
                                    name='Categories'
                                    id="Categories"
                                    type="text"
                                    className="px-login-input w-100 "
                                    options={[
                                        { value: '', label: '...' },
                                        { value: 'category1', label: 'category1' },
                                        { value: 'category2', label: 'category2' },
                                        { value: 'category3', label: 'category3' },

                                     


                                    ]} />
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

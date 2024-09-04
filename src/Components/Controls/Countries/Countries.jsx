import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Modal from '../../Shared/Modal/Modal'
import Input from '../../Shared/Input/Input'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import Select from '../../Shared/Select/Select'

export default function Countries() {
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
            name: "Code",
            selector: (row) => row.code,
            sortable: true,
        },
        {
            name: "Slug",
            selector: (row) => row.slug,
            sortable: true,
        },
        {
            name: "Currency",
            selector: (row) => row.currency,
            sortable: true,
        },


    ];

    const data = [
        {
            id: 1,
            name: 'EGP',
            code: "20",
            slug: 'eg',
            currency: 1,
        },

        {
            id: 2,
            name: 'EGP',
            code: "20",
            slug: 'eg',
            currency: 1,
        },
        {
            id: 3,
            name: 'USD',
            code: "96",
            slug: 'US',
            currency: 2,
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
                <Modal id='createcurrencies' title='currencies' onSave={handleSave} onCancel={handleClose} className='w-40'>
                    <form action>
                        <div className="  ">
                            <div className="">

                                <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                    <Input label=' Name' placeholder=' Name ' className="px-form-input w-100 m-auto" />
                                </div>
                                <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                    <Input label='Commercial Register' placeholder='Commercial Register ' className="px-form-input w-100 m-auto" />
                                </div>
                                <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                    <Input label='Logo' placeholder='Logo ' className="px-form-input w-100 m-auto" />
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

import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Modal from '../../Shared/Modal/Modal'
import Input from '../../Shared/Input/Input'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import Select from '../../Shared/Select/Select'

export default function Branches() {
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
        {
            name: "Company",
            selector: (row) => row.company,
            sortable: true,
        },
        {
            name: "Type",
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: "Postal Code",
            selector: (row) => row.postal,
            sortable: true,
        }, 
        



    ];

    const data = [
        {
            id: 1,
            name: 'Nasr',
            parent: "Pixi",
            company: 'Pixi',
            type: '1',
            postal:'6666'
        },

        {
            id: 2,
            name: 'Dokki',
            parent: "Pixi",
            company: 'eg',
            type: '2',
            postal:'6666'
        },
        {
            id: 3,
            name: 'Korba',
            parent: "Pixi",
            company: 'Pixi',
            type: '1',
            postal:'6666'
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

                            <div className="input-package my-3  d-flex flex-column w-70 m-auto">
                                <Select label='Branches'
                                    htmlFor='Branches'
                                    name='Branches'
                                    id="Branches"
                                    type="text"
                                    className="px-login-input w-100 "
                                    options={[
                                        { value: '', label: '...' },
                                     


                                    ]} />
                            </div>
                            <div className="input-package my-3  d-flex flex-column w-70  m-auto">
                                <Select label=' Companies'
                                    htmlFor='companies'
                                    name='companies'
                                    id="companies"
                                    type="text"
                                    className="px-login-input w-100 "
                                    options={[
                                        { value: '', label: '...' },
                                        { value: 'Egypt', label: 'Egypt' },
                                        { value: 'USA', label: 'USA' },


                                    ]} />
                            </div>
                            <div className="input-package my-3  d-flex flex-column w-70  m-auto">
                                <Select label='Address Type'
                                    htmlFor='address'
                                    name='address'
                                    id="address"
                                    type="text"
                                    className="px-login-input w-100 "
                                    options={[
                                        { value: '', label: '...' },
                                        { value: 'Home', label: 'Home' },
                                        { value: 'Company', label: 'Company' },


                                    ]} />
                            </div>
                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label='Postal Code' placeholder='Postal Code ' className="px-form-input w-100 m-auto" />
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

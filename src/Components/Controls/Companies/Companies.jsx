import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'

export default function Companies() {
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
            name: "Commercial Register",
            selector: (row) => row.commercial,
            sortable: true,
        },
        {
            name: "Logo",
            selector: (row) => row.logo,
            sortable: true,
        },
        {
            name: "Start of Finincial Year",
            selector: (row) => row.start,
            sortable: true,
        },
        {
            name: "End of Finincial Year",
            selector: (row) => row.end,
            sortable: true,
        },


    ];
    const data = [
        {
            id: 1,
            name: 'PIXI',
            commercial: "20047",
            logo: 'F',
            start: '2022',
            end: '2029'
        },

        {
            id: 1,
            name: 'PIXI',
            commercial: "20729",
            logo: 'S',
            start: '2020',
            end: '2030'
        },
        {
            id: 1,
            name: 'PIXI',
            commercial: "20686",
            logo: 'p',
            start: '2018',
            end: '2020'
        },

    ];

    const handleClose = () => alert('close')

    const handleSave = () => alert('save')
    return (
        <>
            <CustomPage
                title='Companies'
                ButtonName='Create Companies'
                ModalTitle='Create companies'
                target='#createcompanies'
                columns={columns}
                data={data}
            />

            
           {/* <Modal id='createcompanies' title='Companies' onSave={handleSave} onCancel={handleClose} className='w-40'>
                <form action>
                    <div className="  ">
                        <div className="">
                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label='Country Name' placeholder='Country Name ' className="px-form-input w-100 m-auto" />
                            </div>
                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label='Country Code' placeholder='Country Code ' className="px-form-input w-100 m-auto" />
                            </div>
                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label='Country Slug' placeholder='Country Slug ' className="px-form-input w-100 m-auto" />
                            </div>
                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label='Start Of Finanicail Year' className="px-form-input w-100 m-auto" placeholder="YY/MM/DD" id="fromDate" type="date" />
                               
                            </div>
                            <div className="input-package my-3 pe-2 d-flex flex-column w-70 m-auto">
                                <Input label='End Of Financial Year' className="px-form-input w-100" placeholder="YY/MM/DD" id="toDate" type="date" />
                               
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

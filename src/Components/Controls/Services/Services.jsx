import React, { useState } from 'react'
import Dropdown from '../../Shared/Dropdown/Dropdown';
import CustomPage from '../../Shared/CustomPage/CustomPage';

export default function Services() {
  const [openDropdownId, setopenDropdownId] = useState(null)
  const columns = [
    {
      name: " Name",
      selector: (row) => { row.name },
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center ">
          <span className="me-2">
            {row.name}
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
      name: "BRAND",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "TAX",
      selector: (row) => row.tax,
      sortable: true,
    },
    {
      name: "Taxable",
      selector: (row) => row.Taxable,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "STOCK",
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: "Daily Income",
      selector: (row) => row.daily,
      sortable: true,
    },
    {
      name: "Weekly Income",
      selector: (row) => row.weekly,
      sortable: true,
    },
    {
      name: "Monthly Income",
      selector: (row) => row.monthly,
      sortable: true,
    },
    {
      name: "Yearly Income",
      selector: (row) => row.yearly,
      sortable: true,
    },
    {
      name: "App Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Contact Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
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
      name:'pixi1',
      brand: "PIXI",
      tax: "25",
      Taxable: "YES",
      description: "Good",
      stock: "yes",
      daily: "1500",
      weekly: '2500',
      monthly: '5000',
      yearly: '1000000',
      category: '1',
      email: "tomafhf@gmail.com",
      address: 'Nasr',
      postal: '154759',
      
    },
    {
      id: 2,
      name:'pixi2',
      brand: "PIXI",
      tax: "25",
      Taxable: "YES",
      description: "Good",
      stock: "yes",
      daily: "1500",
      weekly: '2500',
      monthly: '5000',
      yearly: '1000000',
      category: '1',
      email: "tomafhf@gmail.com",
      address: 'Nasr',
      postal: '154759',
      
    },

    {
      id: 3,
      name:'pixi3',
      brand: "PIXI",
      tax: "25",
      Taxable: "YES",
      description: "Good",
      stock: "yes",
      daily: "1500",
      weekly: '2500',
      monthly: '5000',
      yearly: '1000000',
      category: '1',
      email: "tomafhf@gmail.com",
      address: 'Nasr',
      postal: '154759',
      
    },
  ];
  return (
    <>
      <CustomPage data={data}
        columns={columns}
        title='Services'
        ButtonName='CreateService'
        ModalTitle='CreateService'
        target='#createService'
        targetId='createService'
      />
    
    
    </>
  )
}

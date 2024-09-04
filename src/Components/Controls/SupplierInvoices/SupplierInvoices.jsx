import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../Shared/Dropdown/Dropdown';

export default function SupplierInvoices() {
  const navigate=useNavigate();
  const [openDropdownId, setopenDropdownId] = useState(null)
  const columns = [
    


    {
      name: "ID",
      selector: (row) => {row.id},
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



      style:{minWidth:'100px',
       }
    
    },
    {
      name: "TotalInvoice",
      selector: (row) => row.totalInvoce,
      sortable: true,
    },
    {
      name: "Reversed",
      selector: (row) => row.reversed,
      sortable: true,
    },
    {
      name: "DueDate",
      selector: (row) => row.DueDate,
      sortable: true,
    },
    {
      name: "CreationDate",
      selector: (row) => row.creationDate,
      sortable: true,
    },
    {
      name: "customerID",
      selector: (row) => row.customerId,
      sortable: true,
    },
  ];

  const data = [
    {
      id: '1',
      totalInvoce: '50',
      reversed: '70',
      DueDate: '11/5/2024',
      creationDate: '25/8/2024',
      customerId:' 2',
      
    },
    {
      id: '2',
      totalInvoce: '50',
      reversed: '70',
      DueDate: '11/5/2024',
      creationDate: '25/8/2024',
      customerId:' 2',
      
    },
    {
      id: '3',
      totalInvoce: '50',
      reversed: '70',
      DueDate: '11/5/2024',
      creationDate: '25/8/2024',
      customerId:' 2',
      
    },
    {
      id: '4',
      totalInvoce: '50',
      reversed: '70',
      DueDate: '11/5/2024',
      creationDate: '25/8/2024',
      customerId:' 2',
      
    },
    {
      id: '5',
      totalInvoce: '50',
      reversed: '70',
      DueDate: '11/5/2024',
      creationDate: '25/8/2024',
      customerId:' 2',
      
    },
 
 
  ];

      const handleNavigate=()=>{
        navigate('/AddSupplierInvoice')
      }
  return (
    <>
          <CustomPage
        data={data}
        columns={columns}
        title="Invoices"
        ButtonName="Create Supplier Invoice"
        target='#createSupplierInvoice'
    buttonAction={handleNavigate}
        ModalTitle="Create Supplier Invoice"
      />
    
    </>
  )
}

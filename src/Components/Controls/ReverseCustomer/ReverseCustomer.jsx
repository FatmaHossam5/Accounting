import React from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown';
import { useState } from 'react';
import AddInvoice from '../../Shared/AddInvoice/AddInvoice';
import { useNavigate } from 'react-router-dom';

export default function ReverseCustomer() {
  const [openDropdownId, setopenDropdownId] = useState(null);
  const navigate = useNavigate();
  const columns = [
    {
      name: "Customer Name",
      selector: (row) => { row.name },
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-between" style={{ minWidth: '150px' }}>
          <span className="text-truncate" style={{ maxWidth: '150px' }}>
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
      name: "Cost Center",
      selector: (row) => row.center,
      sortable: true,
    },
    {
      name: "Invoice Number",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "Creation Date",
      selector: (row) => row.date
      ,
      sortable: true,
    },
    {
      name: "Reversed Items",
      selector: (row) => row.rItem,
      sortable: true,
    },
    {
      name: "Total Reversed Item Cost",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Tax",
      selector: (row) => row.tax,
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Currency",
      selector: (row) => row.cuurency,
      sortable: true,
    },

  ];

  const data = [
    {
      id: 1,
      name: 'Ashraf Galal',
      center: "General Cost Center",
      number: "15",
      date: "15-6-2025",
      rItem: 'See All Reversed Items',
      total: '$25000',
      tax: '$120',
      amount: '$2,512',
      cuurency: 'USD',


    },
    {
      id: 2,
      name: 'Ahmad Fathi',
      center: "General Cost Center",
      number: "32",
      date: "20-6-2025",
      rItem: 'See All Reversed Items',
      total: '$25000',
      tax: '$120',
      amount: '$2,512',
      cuurency: 'USD',


    },
    {
      id: 3,
      name: 'Moh Fathi',
      center: "General Cost Center",
      number: "26",
      date: "26-6-2025",
      rItem: 'See All Reversed Items',
      total: '$5000',
      tax: '$120',
      amount: '$2,512',
      cuurency: 'EGP',


    },
   
  ];
  const handleNavigate = () => {
    navigate('/AddReverserInvoice')
  }
  return (
    <>


    <CustomPage data={data}
     columns={columns}
      title={'Customers Reverse Invoices'}
       ButtonName={'Create New Reverse Invoice'}
       buttonAction={handleNavigate}
       target={'#createReverseInvoice'}/>
    </>
  )
}

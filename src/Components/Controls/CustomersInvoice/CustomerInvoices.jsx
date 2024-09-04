import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import CustomPage from "../../Shared/CustomPage/CustomPage";

export default function CustomerInvoices() {
  const [openDropdownId, setopenDropdownId] = useState(null)
  const navigate = useNavigate();
  const columns = [
  


    {
      name: "Customer Name",
      selector: (row) =>  row.name ,
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-between" style={{ minWidth: '150px' }} >
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
      selector: (row) => (<div style={{ minWidth: '150px' }}>{row.cost}</div>),
      sortable: true,
    },
    {
      name: "Items",
      selector: (row) => row.items,
      sortable: true,
    },
    {
      name: "Total Item Cost",
      selector: (row) => row.totalCost,
      sortable: true,
    },
    {
      name: "Currency",
      selector: (row) => row.currency,
      sortable: true,
    },
    {
      name: "Tax",
      selector: (row) => row.tax,
      sortable: true,
    },
    {
      name: "Total Invoice",
      selector: (row) => row.totalInvoce,
      sortable: true,
    },
    {
      name: "Invoice Due Date",
      selector: (row) => row.invoiceInterval,
      sortable: true,
    },
  ];

  const data = [
    {
      id: '1',
      name: 'Ashraf Glal',
      cost: 'General Cost Center1',
      items: 'See All Items',
      totalCost: '$5000',
      currency: 'Dollar',
      tax:'$150',
      totalInvoce:'$5150',
      invoiceInterval:'25-6-2025'

    },
    {
      id: '2',
      name: 'Ahmed Fathi',
      cost: 'General Cost Center2',
      items: 'See All Items',
      totalCost: '$2000',
      currency: 'Dollar',
      tax:'$550',
      totalInvoce:'$2550',
      invoiceInterval:'15-6-2025'

    },
    {
      id: '3',
      name: 'Mohamed Fathi',
      cost: 'General Cost Center3',
      items: 'See All Items',
      totalCost: '$5000',
      currency: 'EGP',
      tax:'$150',
      totalInvoce:'$5150',
      invoiceInterval:'20-6-2025'

    },
    {
      id: '4',
      name: 'Alaa Awad',
      cost: 'General Cost Center4',
      items: 'See All Items',
      totalCost: '$5000',
      currency: 'EGP',
      tax:'$150',
      totalInvoce:'$5150',
      invoiceInterval:'3-6-2025'

    },

    {
      id: '5',
      name: 'Fayrouz Elsayed',
      cost: 'General Cost Center5',
      items: 'See All Items',
      totalCost: '$5000',
      currency: 'Dinar',
      tax:'$550',
      totalInvoce:'$5550',
      invoiceInterval:'20-5-2025'

    },
    {
      id: '6',
      name: 'Fatma Hossam',
      cost: 'General Cost Center6',
      items: 'See All Items',
      totalCost: '$5000',
      currency: 'Dinar',
      tax:'$550',
      totalInvoce:'$5550',
      invoiceInterval:'1-6-2025'

    },
  ];
  const handleNavigate = () => {
    navigate('/Add')
  }
  return (
    <>
      <CustomPage
        data={data}
        columns={columns}
        title="Invoices"
        ButtonName="Create Customer Invoice"
        target='#createCustomerInvoice'
        buttonAction={handleNavigate}
        ModalTitle="Create Customer Invoice"
      />
    </>
  );
}

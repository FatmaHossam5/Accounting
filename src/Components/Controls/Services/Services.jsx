import React, { useState } from 'react'
import Dropdown from '../../Shared/Dropdown/Dropdown';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Modal from '../../Shared/Modal/Modal';
import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';

export default function Services() {
  const [openDropdownId, setopenDropdownId] = useState(null)
  const columns = [
    {
      name: "Service Name",
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
      name: "Service Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Service Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Service Branch",
      selector: (row) => row.branch
     ,
      sortable: true,
    },
    {
      name: "Service Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Unit Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Service Daily Income",
      selector: (row) => row.daily,
      sortable: true,
    },
    {
      name: "Service Weekly Income",
      selector: (row) => row.week,
      sortable: true,
    },
    {
      name: "Service Monthly Income",
      selector: (row) => row.month,
      sortable: true,
    },
    {
      name: "Service Yearly Income",
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: 'Marketing Facebook Ads',
      description: "This service is for making ads ...",
      department: "Marketing",
      branch: "All branches",
      type: 'Performance Marketing',
      price:'100',
      daily:'$200-$500/day',
      week:'$1,000-$2,500/week',
      month:'$4,000-$10,000/month',
      year:'$48,000-$12,0000/year'

    },
    {
      id: 2,
      name: 'Email Marketing Campaigns',
      description: "Designing and executing tar ...",
      department: "Public Relations",
      branch: "All branches",
      type: 'Direct Marketing',
      price:'100',
      daily:'$200-$500/day',
      week:'$1,000-$2,500/week',
      month:'$4,000-$10,000/month',
      year:'$48,000-$12,0000/year'


    },

    {
      id: 3,
      name: 'Influencer Marketing',
      description: "Collaborating with influencers...",
      department: "Sales and Business Development",
      branch: "All branches",
      type: 'Referral Marketing',
      price:'100',
      daily:'$200-$500/day',
      week:'$1,000-$2,500/week',
      month:'$4,000-$10,000/month',
      year:'$48,000-$12,0000/year'


    },
  ];
  return (
    <>

      <Modal id='createService' className={'w-50'} title={'createNewService'}>
        <div className='row mb-3 '>
          <div className='col-md-6'>
            <Input label={'Service English Name'} placeholder={'Enter service name'} />
          </div>
          <div className='col-md-6'>
            <Input label={'Service Arabic Name'} placeholder={'Enter service name'} />
          </div>

        </div>
        <div className='mb-3'>
          <Input placeholder={'Enter description'} label={'Service Description'} />
        </div>
        <div className='row mb-3'>
          <div className='col-md-4'>
            <Select
              label={'Service Department'}

              options={[
                { value: '', label: 'Select Department' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Sales and Business Development', label: 'Sales' },
                { value: 'Public Relations', label: 'Public Relations' },
                { value: 'Content Creation', label: 'Content Creation' },
                { value: 'Advertising', label: 'Advertising' },

              ]}
            />
          </div>
          <div className='col-md-4'>

            <Select
              label={'Service Branch'}

              options={[
                { value: '', label: 'All Branches' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Sales and Business Development', label: 'Sales' },
                { value: 'Public Relations', label: 'Public Relations' },
                { value: 'Content Creation', label: 'Content Creation' },
                { value: 'Advertising', label: 'Advertising' },

              ]}
            />
          </div>
          <div className='col-md-4'>

            <Select
              label={'Service Type'}

              options={[
                { value: '', label: 'Select Type' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Sales and Business Development', label: 'Sales' },
                { value: 'Public Relations', label: 'Public Relations' },
                { value: 'Content Creation', label: 'Content Creation' },
                { value: 'Advertising', label: 'Advertising' },

              ]}
            />
          </div>
        </div>
        <div className='row mb-3 '>
          <div className='col-md-6 '>
            <Input label={'Unit Price'} placeholder={'Enter unit price'} />
          </div>
          <div className='col-md-6 '>
            <Input label={'Service Tax'} placeholder={'Enter service tax'} />
          </div>

        </div>
        <div className="modal-footer w-100 mt-5">
          <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="px-btn px-blue-btn">save</button>
        </div>
      </Modal>
      <CustomPage data={data}
        columns={columns}
        title='Services'
        ButtonName='CreateService'
        ModalTitle='CreateService'
        target='#createService'

      />


    </>
  )
}

import React, { useState } from 'react';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Dropdown from '../../Shared/Dropdown/Dropdown';

export default function Products({ButtonName,buttonAction,target}) {
  const handleClose = () => alert('close')

  const handleSave = () => alert('save')
  const [openDropdownId, setopenDropdownId] = useState(null)
  const columns = [
    {
      name: "Product Name",
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
      name: "Product Brand",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Product Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Product Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Product Branch",
      selector: (row) => row.branch,
      sortable: true,
    },
    {
      name: "Product Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Product SubCategory",
      selector: (row) => row.sub_category,
      sortable: true,
    },
    {
      name: "Product Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Unit Price",
      selector: (row) => row.price,
      sortable: true,
    },
  
  ];

  const data = [
    {
      id: 1,
      name: 'Mobile App',
      brand: "Pixi Mobile App",
      department: "Development",
      description: "A comprehensive online.",
      branch:'Nasr City Branch',
      category: 'Applications',
      sub_category:'Mobile Application',
      type:'Food Ordering Apps',
      price:'2000SAR',


    },
    {
      id: 2,
      name: 'Web Application',
      brand: "WebWave Pro",
      department: "Product Engineering",
      description: "This product is mobile...",
      branch:'Nasr City Branch',
      category: 'Applications',
      sub_category:'Mobile Application',
      type:'Food Ordering Apps',
      price:'2000SAR',

    },

    {
      id: 3,
      name: 'E-commerce Platform',
      brand: "ShopSphere",
      department: "E-commerce Solutions",
      description: "A comprehensive online.",
      branch:'Nasr City Branch',
      category: 'Applications',
      sub_category:'Mobile Application',
      type:'Food Ordering Apps',
      price:'2000SAR',

    },
  ];
  return (
    <>
      {/* <Modal id='createProduct' title='Create Product' onSave={handleSave} onCancel={handleClose} className='w-50'>
     <form action="">
     <div className='row mb-3 '>
          <div className='col-md-6'>
            <Input label={'Product English Name'} placeholder={'Enter product name'} />
          </div>
          <div className='col-md-6'>
            <Input label={'Product Arabic Name'} placeholder={'Enter product name'} />
          </div>

        </div>
        <div className='mb-3'>
          <Input placeholder={'Enter description'} label={'Product Description'} />
        </div>
        <div className='row mb-3'>
          <div className='col-md-4'>
            <Select
              label={'Product Department'}

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
              label={'Product Branch'}

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
              label={'Product Type'}

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
          <div className='col-md-4 '>
            <Input label={'Unit Price'} placeholder={'Enter unit price'} />
          </div>
          <div className='col-md-4 '>
            <Input label={'Shipping Method'} placeholder={'Enter shipping method'} />
          </div>
          <div className='col-md-4 '>
            <Input label={'Shipping Cost'} placeholder={'Enter shipping cost'} />
          </div>
        </div>
        <div className="modal-footer w-100 mt-5">
          <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="px-btn px-blue-btn">save</button>
        </div>
     </form>
      </Modal> */}
    
      <CustomPage data={data}
        columns={columns}
        title='Products'
        ButtonName='Create Product'
        target='#createProduct'
      />
    </>
  )
}

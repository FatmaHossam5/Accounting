import React, { useState } from 'react';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import Input from '../../Shared/Input/Input';
import Modal from '../../Shared/Modal/Modal';
import Select from '../../Shared/Select/Select';

export default function Products() {
  const handleClose = () => alert('close')

  const handleSave = () => alert('save')
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
      name: 'pixi1',
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
      name: 'pixi2',
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
      name: 'pixi3',
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
      <Modal id='createProduct' title='Create Product' onSave={handleSave} onCancel={handleClose} className='w-80'>
        <form action className="d-flex flex-wrap ">
          <div className="side w-xxl-100 w-50 p-4 vertical-separetor">
            <div className="section">
              <div className="form-inputs d-flex w-100">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='NAME' placeholder='Name ' className="px-form-input w-100 m-auto" />
                </div>
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='BRAND' placeholder='brand' className="px-form-input w-100 m-auto" />
                </div>
              </div>
              <div className="input-package mt-3  d-flex flex-column w-100">
                <Select label='CATEGORIES'
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
                    { value: 'category4', label: 'category4' },
                    { value: 'category5', label: 'category5' },

                  ]} />
              </div>
              <div className="input-package ms-auto mt-3 tax-inputs " id="disabled-inputs">
                <input disabled id="taxable" name="taxs" type="radio" />
                <label className="mb-2 " htmlFor="taxable">taxable</label>
                <input disabled className="ms-3" id="none-taxable" name="taxs" type="radio" />
                <label className="mb-2" htmlFor="none-taxable">none
                  taxable</label>
              </div>

              <div className="form-inputs d-flex w-100">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='PRICE' placeholder='price ' className="px-form-input w-100 m-auto" />
                </div>
                <div className="input-package mt-4 pe-2 d-flex flex-column w-50">
                  <Select label='CURRENCIES'
                    htmlFor='currencies'
                    name='currencies'
                    id="currencies"
                    type="text"
                    className="px-login-input w-100 "
                    options={[
                      { value: '', label: '...' },
                      { value: 'EGB', label: 'EGB' },
                      { value: 'USD', label: 'USD' },


                    ]} />
                </div>

              </div>
              <div className="input-package mt-3  d-flex flex-column w-100">
                <Select label='APP.DEPARTMENTS'
                  htmlFor='departments'
                  name='departments'
                  id="departments"
                  type="text"
                  className="px-login-input w-100 "
                  options={[
                    { value: '', label: '...' },
                    { value: 'department1', label: 'department1' },
                    { value: 'department2', label: 'department2' },
                    { value: 'department3', label: 'department3' },
                    { value: 'department4', label: 'department4' },
                    { value: 'department5', label: 'department5' },

                  ]} />
              </div>
              {/* <div className="form-inputs d-flex w-100">

        <div className="input-package mt-3  ">
          <input id="supplier" type="checkbox" />
          <label htmlFor="supplier">supplier</label>
        </div>
        <div className="input-package ms-auto mt-3 tax-inputs " id="disabled-inputs">
          <input disabled id="taxable" name="taxs" type="radio" />
          <label className="mb-2 " htmlFor="taxable">taxable</label>
          <input disabled className="ms-3" id="none-taxable" name="taxs" type="radio" />
          <label className="mb-2" htmlFor="none-taxable">none
            taxable</label>
        </div>

      </div>
      <div className="input-package mt-3  d-flex flex-column w-100">
        <Select label='COUNTRIES'
          htmlFor='countries'
          id="countries"
          type="text"
          className="px-login-input w-100 "
          options={[
            { value: '', label: '...' },
            { value: 'Egypt', label: 'Egypt' },
            { value: 'Palestine', label: 'Palestine' },
          ]}
        />

      </div>
      <div className="input-package mt-3  d-flex flex-wrap justify-content-between w-100">
        <label className="w-100" htmlFor>address</label>
        <Select type="text"
          className="px-login-input w-50 "
          options={[
            { value: '', label: '...' },
            { value: 'Home', label: 'Home' },
            { value: 'Work', label: 'Work' },
            { value: 'Company', label: 'Company' },


          ]}
        />
          
        <Input type='text'placeholder='PostalCode' className="px-login-input w-50 "/>

     
      </div>
      <div className="form-inputs d-flex w-100">
        <div className="input-package mt-3 pe-2 d-flex flex-column w-100">
          <label className="mb-2" htmlFor>address
            details</label>
          <textarea name="address-details" id="address-details" className="px-text-area w-100 m-auto" placeholder=" arabic address details" defaultValue={""} />
        </div>
      </div> */}
            </div>
          </div>
          <div className="reservation-side w-xxl-100 w-50  p-4  ">
            {/* <div className="reservation-section p-4">
      <div className="form-inputs d-flex w-100">
        <div className="input-package mt-3 d-flex flex-wrap w-100">
        <label className="w-100" htmlFor>Mobile Number</label>
        <SelectWithFlag

id="mobileNumber"
value={selectedCountryCode}
onChange={handleCountryCodeChange}
className="px-login-input w-10"
options={[
{ value: '+02', label: '+02', flag: Egypt},
{ value: '+03', label: '+03', flag: Qatar },
{ value: '+04', label: '+04', flag:Palestine},
]}
/>

     
          <input type="text" placeholder="Enter mobile number" className="px-form-input w-75 ms-5" />
        </div>
      </div>
      <div className="input-package mt-3  d-flex flex-column w-100">
        <Input type="number" className="px-form-input" placeholder="Enter Tax number" htmlFor='tax' label='Tax number' />

      </div>
      <div className="form-inputs d-flex w-100">
        <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
          <Input type="text" placeholder="Enter commercial register" className="px-form-input w-100 m-auto" label='CommercialRegister' />

        </div>
        <div className="input-package mt-3 ps-2 d-flex flex-column w-50">
          <Input type="text" placeholder="Enter IBAN" className="px-form-input w-100 m-auto" label='IBAN' />

        </div>
      </div>
      <div className="form-inputs d-flex w-100">
        <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
          <Input type="text" placeholder="Enter Monthly Expense" className="px-form-input w-100 m-auto" label='Monthly Expense' />

        </div>
        <div className="input-package mt-3 ps-2 d-flex flex-column w-50">
          <Input type="text" placeholder="Enter Monthly Income" className="px-form-input w-100 m-auto" label='Monthly Income' />

        </div>
      </div>
 
      <div className="input-package mt-3  d-flex flex-column w-100">

        <Input type="number" className="px-form-input" placeholder="Enter Contact Email" label='Contact Email' />
      </div>
    </div> */}
            <div className="form-inputs d-flex w-100">
              <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Input label='TAX' placeholder='tax ' className="px-form-input w-100 m-auto" />
              </div>
              <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Input label='STOCK' placeholder='stock' className="px-form-input w-100 m-auto" />
              </div>
            </div>
            <div className="form-inputs d-flex w-100">

              <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Input label='Daily Income' placeholder='dailyIncome ' className="px-form-input w-100 m-auto" />
              </div>
              <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Input label='Weekly Income' placeholder='weeklyIncome' className="px-form-input w-100 m-auto" />
              </div>
            </div>
            <div className="form-inputs d-flex w-100">
              <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Input label='Monthly Income' placeholder='monthlyIncome ' className="px-form-input w-100 m-auto" />
              </div>
              <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Input type='number' label='Yearly Income' placeholder='yearlyIncome' className="px-form-input w-100 m-auto" />
              </div>
            </div>

            <div className="input-package mt-3 pe-2 d-flex flex-column w-100">
              <label className="mb-2" htmlFor>DESCRIPTION
              </label>
              <textarea name="address-details" id="address-details" className="px-text-area w-100 m-auto" placeholder=" arabic address details" defaultValue={""} />
            </div>
          </div>
          <div className="modal-footer w-100">
            <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="px-btn px-blue-btn">save</button>
          </div>
        </form>
      </Modal>
      <CustomPage data={data}
        columns={columns}
        title='Products'
        ButtonName='Create Product'
        target='#createProduct'
      />
    </>
  )
}

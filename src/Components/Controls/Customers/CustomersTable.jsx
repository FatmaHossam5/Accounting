import React, { useState } from "react";
import CustomPage from "../../Shared/CustomPage/CustomPage";
import Dropdown from "../../Shared/Dropdown/Dropdown";
export default function CustomersTable() {
  const [openDropdownId, setopenDropdownId] = useState(null)
  const handleClose = () => alert('close')

  const handleSave = () => alert('save')
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };
  const columns = [
    {
      name: "Contact Name",
      selector: (row) => row.ContactName,
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-between" style={{ minWidth: '150px' }} >
          <span className="text-truncate" style={{ maxWidth: '150px' }}>
            {row.ContactName}
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
      name: 'Contact Mobile',
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Supplier',
      selector: (row) => row.supplier,
      sortable: true,
    },
    {
      name: 'Supplier Type',
      selector: (row) => row.supplierType,
      sortable: true,
    },
    {
      name: 'Monthly Income',
      selector: (row) => row.month,
      sortable: true,
    },
    {
      name: 'Company Name',
      selector: (row) => row.company,
      sortable: true,
    }

  ];

  const data = [

    {
      id: 1,
      ContactName: 'Ashraf Galal',
      mobile: '01061915496',
      address: 'Cairo,Egypt',
      supplier: 'Supplier',
      supplierType: 'Taxable',
      month: '6000$',
      company: 'PIXI'
    },

    {
      id: 2,
      ContactName: 'Ahmad Fathi',
      mobile: '01061916496',
      address: 'Cairo,Egypt',
      supplier: 'Supplier',
      supplierType: 'Nontaxable',
      month: '6000$',
      company: 'PIXI'
    },
    {
      id: 3,
      ContactName: 'Mohamed Fathi',
      mobile: '01061915696',
      address: 'Cairo,Egypt',
      supplier: 'Supplier',
      supplierType: 'Nontaxable',
      month: '6000$',
      company: 'PIXI'
    },
    {
      id: 4,
      ContactName: 'Alaa Awad',
      mobile: '01061918446',
      address: 'Cairo,Egypt',
      supplier: 'Supplier',
      supplierType: 'Nontaxable',
      month: '6000$',
      company: 'PIXI'
    },
    {
      id: 5,
      ContactName: 'Fayrouz Elsayed',
      mobile: '01061918496',
      address: 'Cairo,Egypt',
      supplier: 'Supplier',
      supplierType: 'Nontaxable',
      month: '6000$',
      company: 'PIXI'
    },
    {
      id: 6,
      ContactName: 'Fatma Hossam',
      mobile: '01061918496',
      address: 'Cairo,Egypt',
      supplier: 'Supplier',
      supplierType: 'Nontaxable',
      month: '6000$',
      company: 'PIXI'
    },




  ];

  return (
    <>


      {/* <Modal id='createCustomer' title='Create Customer' onSave={handleSave} onCancel={handleClose} className='w-80'>


        <form action className="d-flex flex-wrap ">
      
          <div className="side w-xxl-100 w-50 p-4 vertical-separetor">
            <div className="section">
              <div className="form-inputs d-flex w-100  mt-1">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='Company English Name' placeholder='Enter company name ' className="px-form-input w-100 m-auto" />
                </div>
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='Company Arabic Name' placeholder='Enter company name' className="px-form-input w-100 m-auto" />
                </div>
              </div>
              <div className="input-package mt-3  d-flex flex-column w-100 mb-4">
                <Select label='Company Industry'
                  htmlFor='companyIndustry'
                  name='company industry'
                  id="companyIndustry"
                  type="text"
                  className="px-login-input w-100 "
                  options={[
                    { value: '', label: 'Company Industry' },
                    { value: 'Indusrty1', label: 'Indusrty1' },
                    { value: 'Indusrty2', label: 'Indusrty2' },
                    { value: 'Indusrty3', label: 'Indusrty3' },
                    { value: 'Indusrty4', label: 'Indusrty4' },
                    { value: 'Indusrty5', label: 'Indusrty5' },

                  ]} />
              </div>
              <div className="input-package  d-flex flex-wrap w-100 ">
                <label className=" mb-1 w-100" htmlFor>Contact Mobile Number</label>

                <SelectWithFlag

                  id="mobileNumber"
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                  className="px-flag-dropdown px-form-input d-flex col-2 "
                  options={[
                    { value: '+02', label: '+02', flag: Egypt },
                    { value: '+03', label: '+03', flag: Qatar },
                    { value: '+04', label: '+04', flag: Palestine },
                  ]}
                />



                <input type="text" placeholder="Enter contact mobile number" className="px-form-input col-10 pe-5 " />
              </div>
              <div className="form-inputs d-flex w-100 mt-4">

                <div className="input-package mt-3 mb-3 ">
                  <input id="customer" type="checkbox" />
                  <label htmlFor="customer" className='check'>Customer</label>
                </div>
                <div className="input-package ms-auto mt-3 tax-inputs " id="disabled-inputs">
                  <input className='ms-3 me-2 ' id="taxable" name="taxs" type="radio" />
                  <label htmlFor="taxable">taxable</label>
                  <input className="ms-3 me-2 " id="none-taxable" name="taxs" type="radio" />
                  <label className="" htmlFor="none-taxable">none
                    taxable</label>
                </div>

              </div>

              <div className="input-package mt-5   d-flex flex-wrap justify-content-between w-100 ">
                <label className="w-100 mb-2" htmlFor='adress'>Address</label>
                <Select

                  type="text"
                  className="px-login-input w-30 "
                  options={[
                    { value: '', label: 'Country' },
                    { value: 'Home', label: 'Home' },
                    { value: 'Work', label: 'Work' },
                    { value: 'Company', label: 'Company' },

                  ]}
                />
                <Select type="text"
                  className="px-login-input w-30 "
                  options={[
                    { value: '', label: 'Governorate' },
                    { value: 'cairo', label: 'cairo' },
                    { value: 'alex', label: 'alex' },
                  ]}
                />
                <Select type="text"
                  className="px-login-input w-30 "
                  options={[
                    { value: '', label: 'City' },
                    { value: 'Naser city', label: 'Naser city' },
                    { value: 'Zamalek', label: 'Zamalek' },
                  ]}
                />
              </div>
              <div className="form-inputs d-flex w-100">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-100">
                  <label className="mb-2" htmlFor>address
                    details</label>
                  <textarea name="address-details" id="address-details" className="px-text-area w-100 m-auto" placeholder=" Enter address details" defaultValue={""} />
                </div>
              </div>
              <div className="form-inputs d-flex w-100">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-100">
                  <label className="mb-2" htmlFor>Company Website</label>
                  <textarea name="address-details" id="address-details" className="px-text-area w-100 m-auto" placeholder="Enter company website" defaultValue={""} />
                </div>
              </div>
            </div>
          </div>
        
          <div className="reservation-side w-xxl-100 w-50 ">
            <div className="reservation-section p-4">
              <div className="input-package mt-3  d-flex flex-column w-100">
                <Input type="number" className="px-form-input" placeholder="Enter contact name" label="Contact Name" />
              </div>
              <div className="form-inputs d-flex w-100 ">
                <div className="input-package mt-3 d-flex flex-wrap w-100 ">
                  <label className=" mb-2 w-100" htmlFor>Contact Mobile Number</label>
                  <SelectWithFlag
                    id="mobileNumber"
                    value={selectedCountryCode}
                    onChange={handleCountryCodeChange}
                    className="px-flag-dropdown px-form-input d-flex col-2 "
                    options={[
                      { value: '+02', label: '+02', flag: Egypt },
                      { value: '+03', label: '+03', flag: Qatar },
                      { value: '+04', label: '+04', flag: Palestine },
                    ]}
                  />
                  <input type="text" placeholder="Enter contact mobile number" className="px-form-input col-10 pe-5 " />
                </div>
              </div>
              <div className="input-package mt-3  d-flex flex-column w-100">
                <Input type="number" className="px-form-input" placeholder="Enter contact email" label="Contact Email" />
              </div>
              <div className="input-package mt-3  d-flex flex-column w-100 mb-4">
                <Select label='Supplier Branch'
                  htmlFor='supplierBranch'
                  id="supplierBranch"
                  type="text"
                  className="px-login-input w-100 "
                  options={[
                    { value: '', label: 'All Branches' },
                    { value: 'Egypt', label: 'Egypt' },
                    { value: 'Palestine', label: 'Palestine' },
                  ]}
                />
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
                  <Input type="text" placeholder="Enter commercial register" className="px-form-input w-100 m-auto" label='CommercialRegister' />

                </div>
                <div className="input-package mt-3 ps-2 d-flex flex-column w-50">
                  <Input type="text" placeholder="Enter IBAN" className="px-form-input w-100 m-auto" label='IBAN' />

                </div>
              </div>
              <div className="input-package mt-3  d-flex flex-column w-100">
                <Input type="number" className="px-form-input" placeholder="Enter Tax number" htmlFor='tax' label='Tax number' />
              </div>
            </div>
          </div>
          <div className="modal-footer w-100">
            <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="px-btn px-blue-btn">save</button>
          </div>
        </form>
      </Modal> */}
      <CustomPage
        data={data}
        columns={columns}
        title="All Customers"
        ButtonName="Create Customer"
        ModalTitle="Create Customer"
        target='#createCustomer'
      />
    </>
  );
}

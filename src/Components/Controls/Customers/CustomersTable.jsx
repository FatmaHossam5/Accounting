import React, { useContext, useEffect, useState } from "react";


import Egypt from '../../../assets/images/Flag_of_Egypt.svg.png';
import CustomModal from "../../Shared/CustomModal/CustomModal";
import CustomPage from "../../Shared/CustomPage/CustomPage";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import Input from "../../Shared/Input/Input";
import Select from "../../Shared/Select/Select";
import { Accordion, Button, Card } from "react-bootstrap";
import SelectWithFlag from '../../Shared/SelectWithFlags/SelectWithFlag'
import ModalFooter from "../../Shared/ModalFooter/ModalFooter";
import { useForm, Controller } from "react-hook-form";
import useDataFetch from "../../Helpers/CustomFunction/useDataFetch";
import Cities from "../Cities/Cities";
import axios from "axios";
import { AuthContext } from "../../Helpers/Context/AuthContextProvider";


export default function CustomersTable() {
  const [openDropdownId, setopenDropdownId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState([{ city: '', details: '' }]);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };
  const { handleSubmit, control, formState: { errors }, watch, setValue } = useForm({
    defaultValues: {
      addresses: [{ country: '', governarate: '', Cities: [] }]
    }
  });
  const {baseUrl}=useContext(AuthContext)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: countries } = useDataFetch('countries');



const[governarates,setGovernarates]=useState([]);
const[cities,setCities]=useState([]);

  const Country = countries.map((Coun) => ({
    label: Coun?.countryEn?.name,
    value: Coun?.id
  }))


 
  const getAllGovernarates=()=>{
  axios.get(`${baseUrl}/governorates`).then((response)=>{
    console.log(response);
  
    setGovernarates(response.data.data)

  }).catch((error)=>{
    console.log(error);
    
  })


}  
const getAllCities=()=>{
  axios.get(`${baseUrl}/cities`).then((response)=>{
    console.log(response);
    const City=cities.map((c)=>({
      label:c?.cityEn?.name,
      value:c?.id,
      governorate_id:c?.governorate?.id
    }))
    setCities(City)

  }).catch((error)=>{
    console.log(error);
    
  })


} 
console.log(governarates?.country?.id);

const SelectedCountry= watch(`addresses[0].country`);
  const SelectedGovernate=watch(`addresses[0].governarate`);

  useEffect(()=>{
    
     if(SelectedCountry){
     
      
      const filteredGovernarates=governarates.filter(g=>g?.country?.id===SelectedCountry)
   
   console.log(governarates.map(g=>g?.country?.id));
   console.log(SelectedCountry);
   
      setGovernarates(filteredGovernarates)
     }
      
      

    
  },[SelectedCountry])
  useEffect(()=>{
 if(SelectedGovernate){
  console.log(SelectedGovernate);
     
      
      
  const filteredCities=cities.filter(c=>c?.  governorate_id===SelectedGovernate)
  console.log(filteredCities);
  
  
setCities(filteredCities)
 }
     
    
  },[SelectedCountry])

  useEffect(()=>{
    getAllGovernarates();
    getAllCities();
  },[])
  
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
  const closeModal = () => setIsOpen(false)
  const handleCancle = () => {
    closeModal()
  }
  const handleAddressChange = (index, field, value) => {
    const newAddresses = [...addresses];
    newAddresses[index][field] = value;
    setAddresses(newAddresses);
  };
  const removeAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };
  const addAddress = () => {
    setAddresses([...addresses, { city: '', details: '' }]);
  };
  const AddCustomer = () => {
    alert('jjjjj')
  }
  
  
  return (
    <>


      <CustomModal id='createcustomers' title='Create New Customer' isOpen={isOpen} ModalWidth="custom-width-xl" onCancel={handleCancle} >


        <form action className="d-flex flex-wrap ">
          <div className="side w-xxl-100 w-50 p-4 vertical-separetor">
            <div className="section">
              <div className="form-inputs d-flex w-100  mt-1">
                {/*Company Name En. */}
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Controller
                    name="company_name_en"
                    control={control}
                    rules={{
                      required: 'English Name is required',
                      pattern: { value: /^[A-Za-z]+$/, message: 'Only English Letters are allowed' },
                      validate: {
                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                      }
                    }}
                    render={({ field, fieldState }) => (
                      <Input
                        type='text'
                        label='Company English Name'
                        placeholder='Enter company name '
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error ? fieldState.error.message : null}
                      />
                    )}

                  />

                </div>
                {/*Company Name Ar. */}
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Controller
                    name="company_name_ar"
                    control={control}
                    rules={{
                      required: "Arabic Name is required",
                      pattern: { value: /^[ء-ي]+$/, message: 'Only Arabic letters are allowed' },
                      validate: {
                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                      }
                    }}
                    render={({ field, fieldState }) => (

                      <Input
                        type='text'
                        label='Company Arabic Name'
                        placeholder='Enter company name'
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error ? fieldState.error.message : null}
                      />

                    )}
                  />
                </div>
              </div>
              {/*Addresses */}
              <div className="mt-3">
                <Accordion >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>ADDRESS</Accordion.Header>
                    <Card>
                      <Accordion.Body>
                        <Card.Body>
                          {addresses.map((address, index) => (
                            <div key={index} className="mb-3">
                              <>
                                <div className="input-package mt-5   d-flex flex-wrap justify-content-between w-100 ">
                                  <label className="w-100 mb-2" htmlFor='adress'>Address</label>
                                  <Controller
                                  name="addresses[0].country"
                                  control={control}
                                  render={({field})=>
                                    <Select {...field}
                                  type="text"
                                  className="px-login-input w-30 "
                                  options={Country}
                                  option='Country'
                                />
                                  }
                                  
                                  
                                  />
                                 <Controller
                                  name="addresses[0].governarate"
                                  control={control}
                                  render={({field})=>
                                    <Select {...field}
                                  type="text"
                                  className="px-login-input w-30 "
                                  options={governarates.map(g=>({
                                    label:g?.governorateEn?.name,
                                    value:g?.id
                                  }))}
                                  option='governarate'
                                />
                                  }
                                  
                                  
                                  />
                               
                               <Controller
                                  name="addresses[0].cities"
                                  control={control}
                                  render={({field})=>
                                    <Select {...field} isMulti
                                  type="text"
                                  className="px-login-input w-30 "
                                  options={cities.map(c=>({
                                    label:c?.cityEn?.name,
                                    value:c?.id
                                  }))}
                                  option='governarate'
                                />
                                  }
                                  
                                  
                                  />
                                </div>
                              </>
                              {addresses.length > 1 && (
                                <Button variant="danger" onClick={() => removeAddress(index)}>
                                  Remove
                                </Button>
                              )}
                            </div>
                          ))}
                          <Button variant="primary" onClick={addAddress}>Add Another Address</Button>
                        </Card.Body>
                      </Accordion.Body>
                    </Card>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className=" mt-3 ps-2   ">
                <Input type="text" placeholder="Enter IBAN" className="px-form-input w-100 m-auto" label='IBAN' />
              </div>
            </div>
          </div>
          <div className="reservation-side w-xxl-100 w-50 ">
            <div className="reservation-section p-4">
              <div className="form-inputs d-flex w-100  mt-1">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='Contact English Name' placeholder='Enter Contact name ' className="px-form-input w-100 m-auto" />
                </div>
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Input label='Contact Arabic Name' placeholder='Enter Contact name' className="px-form-input w-100 m-auto" />
                </div>
              </div>
              <div className="mt-3">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Contact Number</Accordion.Header>
                    <Card>
                      <Accordion.Body>
                        <Card.Body>
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
                                  { value: '+03', label: '+03', flag: Egypt },
                                  { value: '+04', label: '+04', flag: Egypt },
                                ]}
                              />
                              <input type="text" placeholder="Enter contact mobile number" className="px-form-input col-10 pe-5 " />
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Body>
                    </Card>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="modal-footer w-100">
            <ModalFooter onCancle={() => setIsOpen(false)}
              onSubmit={handleSubmit(AddCustomer)}
              isSubmitting={isSubmitting}
            />
          </div>
        </form>
      </CustomModal>
      <CustomPage
        data={data}
        columns={columns}
        title="All Customers"
        ButtonName="Create Customer"
        ModalTitle="Create Customer"
        target='#createCustomer'
        buttonAction={() => setIsOpen(true)}
      />
    </>
  );
}

// function CustomerModal({ show, handleClose }) {
//   // State to manage multiple addresses
//   const [addresses, setAddresses] = useState([{ city: '', details: '' }]);

//   // Function to handle adding a new address
//   const addAddress = () => {
//     setAddresses([...addresses, { city: '', details: '' }]);
//   };

//   // Function to handle removing an address
//   const removeAddress = (index) => {
//     const newAddresses = [...addresses];
//     newAddresses.splice(index, 1);
//     setAddresses(newAddresses);
//   };

//   // Function to handle address change
//   const handleAddressChange = (index, field, value) => {
//     const newAddresses = [...addresses];
//     newAddresses[index][field] = value;
//     setAddresses(newAddresses);
//   };

//   // Form validation (simple example)
//   const validateForm = () => {
//     return addresses.every(address => address.city.trim() !== '' && address.details.trim() !== '');
//   };

//   // Save function with validation check
//   const handleSave = () => {
//     if (!validateForm()) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     // Here would be your API call or further processing
//     alert('Form is valid, proceed with saving...');
//   };

//   return (
//     <Modal show={show} onHide={handleClose} size="lg" scrollable>
//       <Modal.Header closeButton>
//         <Modal.Title>Create New Customer</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Accordion defaultActiveKey="0">
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="0">
//               Contact Details
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="0">
//               <Card.Body>
//                 {addresses.map((address, index) => (
//                   <div key={index} className="mb-3">
//                     <Form.Group>
//                       <Form.Label>City</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Enter city"
//                         value={address.city}
//                         onChange={(e) => handleAddressChange(index, 'city', e.target.value)}
//                       />
//                     </Form.Group>
//                     <Form.Group>
//                       <Form.Label>Details</Form.Label>
//                       <Form.Control
//                         required
//                         type="text"
//                         placeholder="Enter address details"
//                         value={address.details}
//                         onChange={(e) => handleAddressChange(index, 'details', e.target.value)}
//                       />
//                     </Form.Group>
//                     {addresses.length > 1 && (
//                       <Button variant="danger" onClick={() => removeAddress(index)}>
//                         Remove
//                       </Button>
//                     )}
//                   </div>
//                 ))}
//                 <Button variant="primary" onClick={addAddress}>Add Another Address</Button>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSave}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CustomerModal;
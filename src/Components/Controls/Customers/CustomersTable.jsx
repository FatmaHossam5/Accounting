import React, { useContext, useEffect, useState } from "react";


import axios from "axios";
import { Accordion, Button, Card } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Egypt from '../../../assets/images/Flag_of_Egypt.svg.png';
import { AuthContext } from "../../Helpers/Context/AuthContextProvider";
import useDataFetch from "../../Helpers/CustomFunction/useDataFetch";
import CustomModal from "../../Shared/CustomModal/CustomModal";
import CustomPage from "../../Shared/CustomPage/CustomPage";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import Input from "../../Shared/Input/Input";
import ModalFooter from "../../Shared/ModalFooter/ModalFooter";
import Select from "../../Shared/Select/Select";
import SelectWithFlag from '../../Shared/SelectWithFlags/SelectWithFlag';


export default function CustomersTable() {
  const [openDropdownId, setopenDropdownId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: countries } = useDataFetch('countries');
  const [addresses, setAddresses] = useState([{ countryId: 0, governorateId: 0, cities: [] }]);
  const [governarates, setGovernarates] = useState([]);
  const [cities, setCities] = useState([]);
  const {  control, formState: { errors }, watch, setValue,handleSubmit } = useForm({
    defaultValues:{
      contact_name_ar:'',
      contact_name_en:'',
      company_name_ar:'',
      company_name_en:'',
      iban:'',
      cities:[],
      phone_numbers:[]
    }
  });
  const { baseUrl } = useContext(AuthContext);
  const [phone_numbers, setPhones] = useState([''])



  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };


  const Country = countries.map((Coun) => ({
    label: Coun?.countryEn?.name,
    value: Coun?.id
  }))



  const getAllGovernarates = () => {
    axios.get(`${baseUrl}/governorates`).then((response) => {
      setGovernarates(response.data.data)
    }).catch((error) => {
      console.log(error);
    })


  }

  const getAllCities = () => {
    axios.get(`${baseUrl}/cities`).then((response) => {
      setCities(response?.data?.data)
    }).catch((error) => {
      console.log(error);

    })


  }





  useEffect(() => {
    getAllGovernarates();
    getAllCities();
  }, [])

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


  const removeAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };
  const removePhone = (index) => {
    const newPhones = phone_numbers.filter((_, i) => i !== index);
    setPhones(newPhones)
  }
  const addAddress = () => {
    setAddresses([...addresses, { city: '', country: '',governorate:'' }]);
  };
  const addPhone = () => {
    setPhones([...phone_numbers, { phone: '' }])
  }
  const AddCustomer = (data) => {
    
    const customerData = {
      ...data,
   
      addresses: data.addresses.map(address => ({
        ...address,
        cities: address?.cities?.map(city => city.value) // استخراج قيم المدن كـ array
      })),
     
     
      phone_numbers: data.phone_numbers        
    };
  console.log(customerData);
  
    // axios.post(`${baseUrl}/customers`, customerData)
    //   .then(response => {
    //     console.log(response);
        
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
 
  }
  const handleCountryChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index].countryId = Number(value);


    newAddresses[index].governorateId = '';
    newAddresses[index].cities = [];
    setAddresses(newAddresses);
    console.log(newAddresses);

  }
  const handleGovernorateChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index].governorateId = Number(value);
    newAddresses[index].cities = [];
    setAddresses(newAddresses);
  }

  const handleCityChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index].cities = value;
    setAddresses(newAddresses);
  }


  return (
    <>

<CustomPage
        data={data}
        columns={columns}
        title="All Customers"
        ButtonName="Create Customer"
        ModalTitle="Create Customer"
        target='#createCustomer'
        buttonAction={() => setIsOpen(true)}
      />
      <CustomModal id='createcustomers' title='Create New Customer' isOpen={isOpen} ModalWidth="custom-width-xl" onCancel={handleCancle} >


        <form  onSubmit={handleSubmit(AddCustomer)} className="d-flex flex-wrap " >
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
{errors.company_name_en && <span className="text-danger">{errors.company_name_en.message}</span>}

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
                  {errors.company_name_ar && <span className="text-danger">{errors.company_name_ar.message}</span>}
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
                                    name={`addresses[${index}].countryId`}
                                    control={control}
                                    render={({ field }) =>
                                      <Select {...field}
                                        type="text"
                                        className="px-login-input w-30 "
                                        options={Country}
                                        onChange={(value) => {
                                          handleCountryChange(index, value);
                                          field.onChange(value);
                                        }}

                                        option='Country'
                                      />
                                    }
                                  />
                                  
                                  <Controller
                                    name={`addresses[${index}].governorateId`}
                                    control={control}
                                    render={({ field }) => {
                                      const governorateOptions = governarates.filter(g => g?.country?.id === addresses[index]?.countryId).map(g => ({
                                        label: g?.governorateEn?.name,
                                        value: g?.id
                                      }))
                                      return (
                                        <Select {...field}
                                          type="text"
                                          className="px-login-input w-30 "
                                          options={governorateOptions}
                                          onChange={(value) => {
                                            handleGovernorateChange(index, value);
                                            field.onChange(value);
                                          }}
                                          option='governarate'
                                          disabled={!addresses[index]?.countryId}
                                        />
                                      )
                                    }
                                    }
                                  />
                                  <Controller
                                    name={`addresses[${index}].cities`}
                                    control={control}
  
                                    render={({ field }) => {
                                      const CitiesOption = cities.filter(c => c?.governorate?.id === addresses[index]?.governorateId).map(c => ({
                                        label: c?.cityEn?.name,
                                        value: c?.id,
                                      }))
                                      return (
                                        <Select {...field} isMulti
                                          type="text"
                                          className="px-login-input w-30 "
                                          options={CitiesOption}
                                          option='city'
                                          onChange={(value) => {
                                            handleCityChange(index, value);
                                            field.onChange(value);
                                          }}
                                          disabled={!addresses[index]?.governorateId}
                                        />
                                      )
                                    }

                                    }
                                  />
                                  {errors.cities && <span className="text-danger">{errors.cities.message}</span>}
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
              <Controller
                    name="iban"
                    control={control}
                    rules={{
                      required: 'Iban is required',
                     
                    }}
                    render={({ field, fieldState }) => (
                      <Input
                        type='text'
                        label='IBAN Number'
                        placeholder='Enter IBAN Number '
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                      
                      />
                    )}

                  />
                  {errors.iban && <span className="text-danger">{errors.iban.message}</span>}
              </div>
            </div>
          </div>
          <div className="reservation-side w-xxl-100 w-50 ">
            <div className="reservation-section p-4">
              <div className="form-inputs d-flex w-100  mt-1">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                <Controller
                    name="contact_name_en"
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
                        label='Contact English Name'
                        placeholder='Enter contact name '
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error ? fieldState.error.message : null}
                      />
                    )}

                  />
{errors.contact_name_en && <span className="text-danger">{errors.contact_name_en.message}</span>}
                </div>
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">

                <Controller
                    name="contact_name_ar"
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
                        label='Contact Arabic Name'
                        placeholder='Enter contact name'
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error ? fieldState.error.message : null}
                      />

                    )}
                  />

{errors.contact_name_ar && <span className="text-danger">{errors.contact_name_ar.message}</span>}
                </div>
              </div>
              <div className="mt-3">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Contact Number</Accordion.Header>
                    <Card>
                      <Accordion.Body>
                        <Card.Body>
                          {phone_numbers.map((phone, index) => (
                            <>
                              <div className="form-inputs d-flex col-12 ">
                                <div className="input-package mt-3 d-flex flex-wrap col-12 ">
                                  <label className=" mb-2 w-100" htmlFor>Contact Mobile Number</label>
                                  <SelectWithFlag
                                    id="mobileNumber"
                                    value={selectedCountryCode}
                                    onChange={handleCountryCodeChange}
                                    className="px-flag-dropdown px-form-input d-flex col-1 "
                                    options={[
                                      { value: '+02', label: '+02', flag: Egypt },
                                      { value: '+03', label: '+03', flag: Egypt },
                                      { value: '+04', label: '+04', flag: Egypt },
                                    ]}
                                  />
                                  <Controller
                                    name='phone_numbers'
                                    control={control}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter contact mobile number"
                                        className="px-form-input col-9 pe-5"
                                        onChange={(e) => {
                                          field.onChange(e.target.value); 
                                        }}
                                      />
                                    )}
                                  />
                                 
                                </div>
                              </div>
                              {phone_numbers.length > 1 && (
                                <Button variant="danger" onClick={() => removePhone(index)}>
                                  Remove
                                </Button>
                              )}
                            </>

                          ))}
                          <Button variant="primary" onClick={addPhone}>Add Another Number</Button>
                        </Card.Body>
                      </Accordion.Body>
                    </Card>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="modal-footer w-100">
            <ModalFooter
            onSubmit={handleSubmit(AddCustomer)}
             onCancle={() => setIsOpen(false)}
              
              isSubmitting={isSubmitting}
            />
          </div>
        </form>
      </CustomModal>
   
    </>
  );
}


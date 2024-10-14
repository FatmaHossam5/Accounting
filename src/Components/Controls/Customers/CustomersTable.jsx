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
import ConfirmDelete from "../../Shared/ConfirmDelete/ConfirmDelete";


export default function CustomersTable() {
  const [openDropdownId, setopenDropdownId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: countries } = useDataFetch('countries');
  const [addresses, setAddresses] = useState([{ countryId: 0, governorateId: 0, cities: [] }]);
  const [governarates, setGovernarates] = useState([]);
  const [cities, setCities] = useState([]);
  const { control, formState: { errors, isValid }, handleSubmit, reset } = useForm({
    defaultValues: {
      contact_name_ar: '',
      contact_name_en: '',
      company_name_ar: '',
      company_name_en: '',
      iban: '',
      cities: [],
      phone_numbers: []
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const { baseUrl } = useContext(AuthContext);
  const [phone_numbers, setPhones] = useState(['']);
  const [customers, setCustomers] = useState([]);
  const [showAdresses, setShowAddresses] = useState(false);
  const [showPhones, setShowPhones] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAdressId, setSelectedAddressId] = useState('');
  const [selectesPhoneId, setSelectedPhoneId] = useState('');
  const [deletedId, setDeletedId] = useState();

  const columns = [
    {
      name: "Arabic Contact Name",
      selector: (row) => row.id,
      sortable: true,
      visible: true,
      id:'Arabic Contact Name',
      label:'Arabic Contact Name',
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-between" style={{ minWidth: '150px' }} >
          <span className="text-truncate" style={{ maxWidth: '150px' }}>
            {row.customerAr?.contact_name}
          </span>
          <Dropdown

            dropdownContent={
              <div>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-pencil-fill me-2 text-warning" />
                  Update
                </a>
                <a className="dropdown-item mt-1" onClick={() => handleDeleteModal(row.id)}>
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
      name: 'English Contact Name',
      selector: (row) => row.customerEn?.contact_name,
      sortable: true,
      visible:true,
      id:'English Contact Name',
      label:'English Contact Name'
    },
    {
      name: "Arabic Company Name",
      selector: (row) => row?.customerAr?.company_name,
      sortable: true,
      visible:true,
      id:'Arabic Company Name',
      label:'Arabic Company Name'



    },
    {
      name: 'English Company Name',
      selector: (row) => row.customerEn?.company_name,
      sortable: true,
      visible:true,
      id: 'English Company Name',
      label: 'English Company Name'
    },
    {
      name: 'Address',
      selector: (row) => (
        <div onClick={() => handleAdressData(row.id)}>
          See All Addresses
        </div>
      ),
      sortable: true,
      visible:true,
      id:'Address',
      label:'Address'
    },
    {
      name: 'IBAN',
      selector: (row) => row.iban,
      sortable: true,
      visible:true,
      id:'IBAN',
      label:'IBAN'
    },
    {
      name: 'Phones',
      selector: (row) => (
        <div onClick={() => handlePhoneData(row.id)}>
          See All phone_numbers
        </div>
      ),
      sortable: true,
      visible:true,
      id:'Phones',
      label:'phones'
    }

  ];


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

  const getAllCustomers = () => {
    axios.get(`${baseUrl}/customers`).then((response) => {
      setCustomers(response?.data?.data)
    }).catch((error) => {
      console.log(error);

    })

  }

  const handleAdressData = (id) => {
    setSelectedAddressId(id);
    setShowAddresses(true);
  }
  const handlePhoneData = (id) => {
    setSelectedPhoneId(id);
    setShowPhones(true);
  }
  const handleDeleteModal = (id) => {
    setDeletedId(id)
    setShowDeleteModal(true);
  }

  const closeModal = () => setIsOpen(false)
  const handleCancle = () => closeModal()
  
  const removeAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };
  const removePhone = (index) => {
    const newPhones = phone_numbers.filter((_, i) => i !== index);
    setPhones(newPhones)
  }
  const addAddress = () => {
    setAddresses([...addresses, { cities: '' }]);
  };
  const addPhone = () => {
    setPhones([...phone_numbers, ''])
  }
  const AddCustomer = (data) => {
    setIsSubmitting(true)
    const { addresses, ...rest } = data;
    const citiesArray = addresses.map(address => address.cities).flat();
    const customerData = {
      ...rest,
      cities: citiesArray,
      phone_numbers: data.phone_numbers
    };
    axios.post(`${baseUrl}/customers`, customerData)
      .then(response => {
        reset();
        closeModal();
        getAllCustomers();
      })
      .catch(error => {
        console.log(error);
      }).finally(() => {
        setIsSubmitting(false)
      })

  }
  const handleCountryChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index].countryId = Number(value);
    newAddresses[index].governorateId = '';
    newAddresses[index].cities = [];
    setAddresses(newAddresses);
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
  const handlePhoneChange = (index, value) => {
    const newPhones = [...phone_numbers];
    newPhones[index] = value;
    setPhones(newPhones)
  }
  const DeleteCustomer = (id) => {
    axios.delete(`${baseUrl}/customers/${id}`).then((response) => {
      getAllCustomers()
    }).catch((error) => {
      console.log(error);

    })
  }
  const handleDeletedConfirmed = () => {
    if (deletedId) {
      DeleteCustomer(deletedId);
      setopenDropdownId(null);
    }
    setShowDeleteModal(false)
  }
  useEffect(() => {
    getAllGovernarates();
    getAllCities();
    getAllCustomers();
  }, [])

  return (
    <>
      <CustomPage
        data={customers}
        columns={columns}
        title="All Customers"
        ButtonName="Create Customer"
        ModalTitle="Create Customer"
        target='#createCustomer'
        buttonAction={() => setIsOpen(true)}
        

      />
      <CustomModal id='createcustomers' title='Create New Customer' isOpen={isOpen} ModalWidth="custom-width-xl" onCancel={handleCancle} headerPadding='default' >
        <form onSubmit={handleSubmit(AddCustomer)} className="row " >
          <div className="side w-xxl-100 col-6 px-4 vertical-separetor">
            <div className="section">
              <div className="form-inputs d-flex w-100  mt-1">
                {/*Company Name En. */}
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Controller
                    name="company_name_en"
                    control={control}
                    rules={{
                      required: 'English Name is required',
                      pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                      validate: {
                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                      }
                    }}
                    render={({ field, fieldState }) => (
                      <Input
                        type='text'
                        id='company_name_en'
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
                      pattern: { value: /^[ء-ي\s]+$/, message: 'Only Arabic letters are allowed' },
                      validate: {
                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                      }
                    }}
                    render={({ field, fieldState }) => (

                      <Input
                        type='text'
                        id='company_name_ar'
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
                                        <Select {...field}
                                          isMulti
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
          <div className="col-6">
            <div className="reservation-section">
              <div className="form-inputs d-flex w-100  mt-1">
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Controller
                    name="contact_name_en"
                    control={control}
                    rules={{
                      required: 'English Name is required',
                      pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
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
                      pattern: { value: /^[ء-ي\s]+$/, message: 'Only Arabic letters are allowed' },
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
                                    name={`phone_numbers[${index}]`}
                                    control={control}
                                    render={({ field }) => (
                                      <input
                                        {...field}
                                        type="text"
                                        placeholder="Enter contact mobile number"
                                        className="px-form-input col-9 pe-5"
                                        onChange={(event) => {
                                          handlePhoneChange(index, event.target.value);
                                          field.onChange(event.target.value);

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
              isCancelDisabled={isSubmitting || !isValid}
              isSaveDisabled={isSubmitting || !isValid}
              className={!isValid ? 'btn-invalid' : ''}
              className2={!isValid ? 'btn-invalid2' : ''}
            />
          </div>
        </form>
      </CustomModal>
      <CustomModal isOpen={showAdresses} onCancel={() => setShowAddresses(false)} title='Addresses'>
        <div className="col-12 d-flex flex-wrap  p-2">
          {customers.filter((customer) => customer.id === selectedAdressId).map((customer) => (
            <>
              {customer?.city?.map((c, index) => (
                <>
                  <div key={index} className=" col-4 flex-grow-1 flex-shrink-1 p-1 rounded-2 d-flex flex-column align-items-start justify-content-center bg-secondary-subtle me-1">
                    <h3>{c?.governorate?.country?.countryEn?.name}</h3>
                    <div className="d-flex w-100">
                      <h5>{c?.governorate?.governorateEn.name}</h5>,
                      <h5>{c?.cityEn?.name}</h5>
                    </div>
                  </div>

                </>

              ))}


            </>
          ))

          }

        </div>



      </CustomModal>
      <CustomModal isOpen={showPhones} onCancel={() => setShowPhones(false)} title='Phones' >
        <div className="col-12 d-flex flex-wrap p-2">
          {customers.filter((customer) => customer.id === selectesPhoneId).map((customer) => (
            <>
              {customer?.phone_numbers?.map((phone, index) => (

                <>
                  <div key={index} className=" col-4 flex-grow-1 flex-shrink-1 p-1 rounded-2 d-flex flex-column align-items-start justify-content-center bg-secondary-subtle me-1">
                    <h3>{phone.phone}</h3>

                  </div>
                </>

              ))}
            </>
          ))
          }

        </div>
      </CustomModal>
      {showDeleteModal && (
        <>
          <ConfirmDelete
            isOpen={showDeleteModal}
            onCancel={() => setShowDeleteModal(false)}

            onConfirm={handleDeletedConfirmed}
            deleteMsg='Customer'
          />

        </>
      )}
    </>
  );
}


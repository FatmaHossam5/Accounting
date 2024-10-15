import React, { useEffect, useState } from 'react'
import Input from '../../Shared/Input/Input'
import Select from '../../Shared/Select/Select'
import { Controller, useForm } from 'react-hook-form'
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-phone-input-2/lib/bootstrap.css';



export default function AddCustomer() {
    const { control, handleSubmit, watch, setValue, formState: { errors },register } = useForm();
    const { data: countries } = useDataFetch('countries');
    const { data: governorates } = useDataFetch('governorates');
    const { data: cities } = useDataFetch('cities');
    const { data: customers } = useDataFetch('customers');
    const { data: industries } = useDataFetch('industries');
    const { data: branches } = useDataFetch('branches');
const[CustomerOptions,setCustomerOptions]=useState([])

    const selectedCountry = watch('country')
    const selectedGovernarate = watch('governarate');
    const isSubCustomer = watch('isSubCustomer');
    const [filteredGovernorates, setFilteredGovernorates] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);


    const Country = countries.map((country) => (
        {
            value: country?.id,
            label: country?.countryEn?.name
        }
    ))
    const Industry = industries.map((industry) => ({

        value: industry.id,
        label: industry.industryEn?.name
    }))
  
    const Branch = branches.map((branch) => ({

        value: branch.id,
        label: branch.branchEn?.name
    }))
    useEffect(() => {
        if (selectedCountry) {
            console.log(selectedCountry);

            const filteredGovernorates = governorates.filter(gov => gov?.country?.id === Number(selectedCountry));


            setFilteredGovernorates(filteredGovernorates.map(gov => ({
                value: gov.id,
                label: gov?.governorateEn?.name
            })))
            console.log(filteredGovernorates);

        }
    }, [selectedCountry, governorates])
    useEffect(() => {
        if (selectedGovernarate) {
            const filteredCities = cities.filter(city => city?.governorate?.id === Number(selectedGovernarate));

            setFilteredCities(filteredCities.map(city => ({
                value: city.id,
                label: city?.cityEn?.name
            })))

        }
    }, [selectedGovernarate, cities])
    useEffect(() => {
        if (isSubCustomer && customers.length > 0) { // Only map customers if checkbox is checked and customers exist
            const CustomerOptions = customers.map((customer) => ({
                value: customer.id,
                label: customer.customerEn?.contact_name
            }));
    console.log(CustomerOptions);
    
            setCustomerOptions(CustomerOptions); // Assuming you have a state to hold these options
        }
    }, [isSubCustomer, customers]);
    const AddCustomer = (data) => {
        console.log(data);

    }
    return (
        <>


            <div className="px-content mb-auto mt-3 ">
                <div className="px-card p-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 gx-0">
                                <div className="breadcrumbs-list w-100 mb-3">
                                    <ul className="d-flex">
                                        <li className="breadcrumbs-item d-flex align-items-center">
                                            Customers
                                            <span className="breadcrumbs-separetor ms-2">
                                                <i className="fa-kit fa-right" />
                                            </span>
                                        </li>
                                        <li className="breadcrumbs-item d-flex align-items-center ">
                                            All Customers
                                            <span className="breadcrumbs-separetor ms-2">
                                                <i className="fa-kit fa-right" />
                                            </span>
                                        </li>
                                        <li className="breadcrumbs-item d-flex align-items-center active-breadcrumbs">
                                            Create Customer
                                        </li>
                                    </ul>
                                </div>
                                <div className="page-name">
                                    <h3>Create Customer</h3>
                                </div>
                                <form className="d-flex flex-wrap mt-5" onSubmit={handleSubmit(AddCustomer)}>
                                    <div className="side w-xxl-100 w-100 ">
                                        <div className="section">
                                            <h4>Company Information</h4>
                                            <div className="form-inputs d-flex w-100">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-4 gx-0">
                                                            {/* Company English Input */}
                                                            <div className="input-package mt-3 pe-2">
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
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            {/* Company Arabic Input */}
                                                            <div className="input-package mt-3 px-2">
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
                                                        <div className="col-4 gx-0">
                                                            {/* Mobile Number */}
                                                            <div className="input-package mt-3 ps-2">
                                                                <label htmlFor=""> Mobile Number</label>
                                                                <Controller
                                                                    name='phone_numbers'
                                                                    control={control}
                                                                    render={({ field, fieldState }) => (
                                                                        <PhoneInput
                                                                            {...field}
                                                                            placeholder='Enter mobile number'
                                                                            inputProps={{
                                                                                name: 'Phone',
                                                                                required: true
                                                                            }}
                                                                        />
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-inputs d-flex w-100">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 pe-2">
                                                                <Select label='industry' options={[...Industry]} option='Industry' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 px-2">
                                                                <Select label='branch' options={[...Branch]} option='Branch' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 ps-2">
                                                                <Input className='w-95' type='text' placeholder="Enter website" label='website' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="separetor my-4"></div>
                                        <div className="section">
                                            <h4>Address Details</h4>
                                            <div className="form-inputs d-flex w-100">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 pe-2">
                                                                <Controller
                                                                    name="country"
                                                                    control={control}
                                                                    render={({ field }) => (
                                                                        <Select
                                                                            {...field}

                                                                            label='Country' options={[...Country]} option='Country' />)} />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 px-2">


                                                                <Controller
                                                                    name="governarate"
                                                                    control={control}
                                                                    render={({ field }) => (
                                                                        <Select
                                                                            {...field}

                                                                            label='Governorate' options={filteredGovernorates} option='Governorate' />
                                                                    )}
                                                                />



                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 ps-2">
                                                                <Controller
                                                                    name="cities"
                                                                    control={control}
                                                                    render={({ field }) => (
                                                                        <Select
                                                                            {...field}

                                                                            label='Cities' options={filteredCities} option='Cities' />
                                                                    )}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-inputs my-3 w-100">
                                                <Input className='w-95' type='text' placeholder="Enter Address" label='website' />
                                            </div>
                                        </div>
                                        <div className="separetor my-4"></div>
                                        <div className="section d-flex">
                                            <div className="form-inputs w-50 pe-2">
                                                <div className="px-gray-border py-3 px-2 rounded-2 d-flex w-100 ">
                                                    <div className="input-package d-flex align-items-center ">
                                                        <input className='me-1' id="supplier" type="checkbox" ></input>
                                                        <label htmlFor="supplier">supplier</label>

                                                    </div>
                                                    <div className="input-package ms-auto  tax-inputs " id="{taxable}">
                                                        <input disabled="{disabled}" id="taxable" name="taxs" type="radio" />
                                                        <label className="mb-2 ms-2 " htmlFor="taxable">taxable</label>
                                                        <input disabled="{disabled}" className="ms-3" id="none-taxable" name="taxs" type="radio" />
                                                        <label className="mb-2 ms-2" htmlFor="none-taxable">none
                                                            taxable</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="form-inputs w-50 ps-2">
                                                <div className="px-gray-border p-2 rounded-2 d-flex w-100 ">
                                                    <div className="input-package d-flex align-items-center ">
                                                    <input
            className="me-1"
            id="is-sub-customer"
            type="checkbox"
            {...register('isSubCustomer')} // Assuming you're using react-hook-form
        />
                                                        <label htmlFor="is-sub-customer">Is sub customer</label>

                                                    </div>
                                                    <div className="input-package ms-auto w-50 ">
                                                        <Select options={CustomerOptions} option='Select Parent Customer' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="separetor my-4"></div>
                                        <div className="section">
                                            <h4>Contact Details</h4>
                                            <div className="form-inputs d-flex w-100">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 pe-2">
                                                                <Input type='text' placeholder="Enter Contact Name" label='Contact English Name' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 px-2">
                                                                <Input type='text' placeholder="Enter Contact name" label='Contact Arabic Name' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 ps-2">
                                                                <Input type='text' placeholder="Enter company name" label='Contact Mobile' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-inputs d-flex w-100">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 pe-2">
                                                                <Input type='text' placeholder="Enter contact email" label='Contact Email' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 px-2">
                                                                <Input type='text' placeholder="Enter commercial register" label='Commercial Register' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 ps-2">
                                                                <Input type='text' placeholder="Enter IBAN" label='IBAN' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-inputs d-flex w-100">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 pe-2">
                                                                <Input type='text' placeholder="Enter monthly expenses" label='Monthly Income' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 px-2">
                                                                <Input type='text' placeholder="Enter monthly income" label='Monthly Income' />
                                                            </div>
                                                        </div>
                                                        <div className="col-4 gx-0">
                                                            <div className="input-package mt-3 ps-2">
                                                                <Input type='text' placeholder="Enter tax number" label='Tax Number' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-action d-flex justify-content-end mt-5">
                                            <button className="px-btn px-white-btn">Cancel</button>
                                            <button className="px-btn px-blue-btn ms-4">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

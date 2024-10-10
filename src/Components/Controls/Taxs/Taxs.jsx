import React, { useContext, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select'
import CustomModal from '../../Shared/CustomModal/CustomModal';
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import axios from 'axios';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import Input from '../../Shared/Input/Input';

export default function Taxs() {


  const [openDropdownId, setopenDropdownId] = useState(null);
  const[isSubmitting,setIsSubmitting]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const[isSalesTaxChecked,setIsSalesTaxChecked]=useState(false);
  const[isPurchaseTaxChecked,setIsPurchaseTaxChecked]=useState(false);


  const { baseUrl } = useContext(AuthContext);

  const columns = [
    {
      name: " Id",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center ">
          <span className="me-2">
            {row.id}
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
      name: "Tax Name",
      selector: (row) => row?.taxEn?.tax_name,
      sortable: true,
    },
    {
      name: "Tax Description",
      selector: (row) => row?.taxEn?.description,
      sortable: true,
    },
    {
      name: "Tax Agency",
      selector: (row) => row?.taxEn?.tax_agency_name,
      sortable: true,
    },
    {
      name: "Business Id",
      selector: (row) => row?.business_id,
      sortable: true,
    },
    {
      name: "Tax Period",
      selector: (row) => row?.tax_period,
      sortable: true,
    },
    {
      name: "Filling Freq",
      selector: (row) => row?.filing_frequency,
      sortable: true,
    },
    {
      name: "reporting method",
      selector: (row) => row?.filing_frequency,
      sortable: true,
    },
    {
      name: "Tax on Sale",
      selector: (row) => row?.tax_on_sale,
      sortable: true,
    },
    {
      name: "Tax on Purchase",
      selector: (row) => row?.tax_on_purchase,
      sortable: true,
    },
  ];


  const { data: taxes, refetch } = useDataFetch('taxes')
  const monthsOptions = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },

  ];

  const filingFrequencyOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Half-yearly', label: 'Half-yearly' },
    { value: 'Yearly', label: 'Yearly' },
  ];
  const reportingMethodOptions = [
    { value: 'Accrual', label: 'Accrual' },
    { value: 'Cash', label: 'Cash' },
  ];

  const { handleSubmit, formState: { errors, isValid }, control, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      tax_name_ar: '',
      tax_name_en: '',
      description_ar: '',
      description_en: '',
      tax_agency_name_ar: '',
      tax_agency_name_en: '',
      business_id: '',
      tax_period: '',
      filing_frequency: '',
      reporting_method: 'TYPE1',
      tax_on_sale: '',
      tax_on_purchase: ''
    },
    reValidateMode: 'onChange'


  });
  const AddTax = (data) => {
    setIsSubmitting(true)
    const formattedData = {
      ...data,
      tax_period: data.tax_period.map(option => option.value).join(''),
      filing_frequency: data.filing_frequency.map(option => option.value).join(''),
      reporting_method: data.reporting_method?.value || ''
    }
    console.log(formattedData);


    axios.post(`${baseUrl}/taxes`, formattedData).then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error);

    }).finally(()=>{
      setIsSubmitting(false)
    })
  }
  return (
    <>
      <CustomModal id='createTax' title='Create Tax' isOpen={isOpen} onCancel={() => setIsOpen(false)} ModalWidth='modal-xl' headerPadding='custom' >

        <form onSubmit={handleSubmit(AddTax)}>
          {/*Tax Name */}
          <div className='row gx-3 '>
            {/*English Tax Name */}
            <div className='col-md-6'>

              <Controller
                name='tax_name_en'
                control={control}
                rules={{
                  required: 'English Name is required !',
                  pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                  validate: {
                    startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                  }

                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Tax English Name'
                    placeholder='Enter tax name'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}


              />
              {errors.tax_name_en && <span className='text-danger'>{errors.tax_name_en.message}</span>}
            </div>
            {/*Arabic Tax Name */}
            <div className='col-md-6'>

              <Controller
                name='tax_name_ar'
                control={control}
                rules={{
                  required: 'Arabic Name is required !',
                  pattern: { value: /^[ء-ي\s]+$/, message: "Only Arabic Letters are Allowed" },
                  validate: {
                    startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                  }

                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Tax Arabic Name'
                    placeholder='Enter tax name'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}


              />
              {errors.tax_name_ar && <span className='text-danger'>{errors.tax_name_ar.message}</span>}
            </div>
          </div>

          {/*Tax Description */}
          <div className='row gx-3 '>
            {/*English Tax Description */}
            <div className='col-md-6'>
              <Controller
                name='description_en'
                control={control}
                rules={{
                  required: 'English Name is required !',
                  pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                  validate: {
                    startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                  }
                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Tax English Description'
                    placeholder='Enter tax description'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}


              />
              {errors.description_en && <span className='text-danger'>{errors.description_en.message}</span>}
            </div>
            {/*Arabic Tax Description */}
            <div className='col-md-6'>
              <Controller
                name='description_ar'
                control={control}
                rules={{
                  required: 'Arabic Name is required !',
                  pattern: { value: /^[ء-ي\s]+$/, message: "Only Arabic Letters are Allowed" },
                  validate: {
                    startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                  }
                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Tax Arabic Description'
                    placeholder='Enter tax description'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}


              />
              {errors.description_ar && <span className='text-danger'>{errors.description_ar.message}</span>}
            </div>
          </div>
          {/*Agency Name */}
          <div className='row gx-3 '>
            {/*English Agency Name */}
            <div className='col-md-6'>

              <Controller
                name='tax_agency_name_en'
                control={control}
                rules={{
                  required: 'English Name is required !',
                  pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                  validate: {
                    startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                  }

                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Agency English Name'
                    placeholder='Enter agency name'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}


              />
              {errors.tax_agency_name_en && <span className='text-danger'>{errors.tax_agency_name_en.message}</span>}
            </div>
            {/*English Agency Name */}
            <div className='col-md-6'>
              <Controller
                name='tax_agency_name_ar'
                control={control}
                rules={{
                  required: 'Arabic Name is required !',
                  pattern: { value: /^[ء-ي\s]+$/, message: "Only Arabic Letters are Allowed" },
                  validate: {
                    startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                  }

                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Agency Arabic Name'
                    placeholder='Enter agency name'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}


              />

            </div>
          </div>
          {/* Business Id Input & Tax Period Select*/}
          <div className='row gx-3'>
            <div className='col-md-6'>
              <Controller
                name='business_id'
                control={control}
                rules={{
                  required: 'Business Id is required!',
                  pattern: { value: /^[0-9]{5,15}$/, message: 'Business ID must be 5-15 digits long and contain only numbers' }
                }}
                render={({ field, fieldState }) => (
                  <Input
                    type='text'
                    label='Business ID'
                    placeholder='Enter business id'
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}
              />
              {errors.business_id && <span className='text-danger'>{errors.business_id.message}</span>}
            </div>
            <div className='col-md-6'>
              <Controller
                name='tax_period'
                control={control}
                rules={{
                  required: 'Tax Period is required!',
                  validate: value => value.length > 0 || "Please select at least one month",
                }}
                render={({ field, fieldState }) => (
                  <>
                    <label htmlFor="tax_period">Select Tax Period</label>
                    <Select
                      {...field}
                      defaultValue={[]}
                      options={monthsOptions}
                      isMulti
                      className='mt-2'
                      error={fieldState.error ? fieldState.error.message : null}
                    />
                  </>

                )}
              />
              {errors.tax_period && <span className='text-danger'>{errors.tax_period.message}</span>}
            </div>
          </div>
          {/*Filling freqSelect & Reporting method  */}
          <div className='row gx-3'>
            <div className='col-md-6'>
              <Controller
              name='filing_frequency'
              control={control}
              rules={{
                required:'Filling Frequency is required',
                validate:value=>value.length >0 || 'Please Select at least one option'
              }}
              render={({field,fieldState})=>(
                <>
                 <label htmlFor="filing_frequency">Filing Frequency</label>
                 <Select
                 {...field}
                 defaultValue={[]}
                 options={filingFrequencyOptions}
                 isMulti
                 error={fieldState.error ? fieldState.error.message : null}
                 />
                   {errors.filing_frequency && <span className='text-danger'>{errors.filing_frequency.message}</span>}
                </>
              )}
              />
            </div>
            <div className='col-md-6'>
              <Controller
              name='reporting_method'
              control={control}
         
              render={({field,fieldState})=>(
                <>
                 <label htmlFor="reporting_method">Reporting Method</label>
                 <Select
                 {...field}
                 defaultValue=''
                 options={reportingMethodOptions}
                
                 error={fieldState.error ? fieldState.error.message : null}
                 />
                   {errors.reporting_method && <span className='text-danger'>{errors.reporting_method.message}</span>}
                </>
              )}
              />
            </div>
          </div>
          {/* Tax on Sales Checkbox and Input */}
          <div className='row gx-3 t'>
            <div className='col-md-6'>
              <label className='d-block mt-2 me-2 tax'>
                <input 
                  type="checkbox" 
                 
                  onChange={() => setIsSalesTaxChecked(!isSalesTaxChecked)} 
                />
                This tax is collected on sales
              </label>
              <Controller
                name='tax_on_sale'
                control={control}
                render={({ field }) => (
                  <Input
                    type='checkbox'
                    label='Sales Rate'
                    placeholder='Enter sales tax rate'
                    value={field.value}
                    onChange={field.onChange}
                    disabled={!isSalesTaxChecked} // Disable if the checkbox is not checked
                  />
                )}
              />
            </div>

            {/* Tax on Purchases Checkbox and Input */}
            <div className='col-md-6'>
              <label>
                <input 
                  type="checkbox" 
                  onChange={() => setIsPurchaseTaxChecked(!isPurchaseTaxChecked)} 
                />
                This tax is collected on purchases
              </label>
              <Controller
                name='tax_on_purchase'
                control={control}
                render={({ field }) => (
                  <Input
                    type='checkbox'
                    label='Tax on Purchase'
                    placeholder='Enter purchase tax rate'
                    value={field.value}
                    onChange={field.onChange}
                    disabled={!isPurchaseTaxChecked} // Disable if the checkbox is not checked
                  />
                )}
              />
            </div>
          </div>
          <ModalFooter
       onSubmit={handleSubmit(AddTax)}
       onCancle={()=>setIsOpen(false)}
isSubmitting={isSubmitting}
isCancelDisabled={isSubmitting||!isValid}
isSaveDisabled={isSubmitting||!isValid}
className={!isValid?'btn-invalid':''}
className2={!isValid?'btn-invalid2':''}
   
       />
        </form>

      </CustomModal>

      <CustomPage data={[...taxes]}
        columns={columns}
        title='Taxes'
        ButtonName='Create Tax'
        target='#createTax'
        buttonAction={() => setIsOpen(true)}
      />
    </>
  )
}

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
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';

export default function Taxs() {


  const [openDropdownId, setopenDropdownId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deletedTaxId, setDeletedTaxId] = useState(null);


  const { baseUrl } = useContext(AuthContext);

  const columns = [
    {
      name: " Id",
      selector: (row) => row?.id,
      visible: true,
      id: 'Id',
      label: 'Id',
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
                <a className="dropdown-item mt-1" href="#"  onClick={() => handleDeleteModal(row.id)}>
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
      visible: true,
      id: 'Tax Name',
      label: 'Tax Name',
      selector: (row) => row?.taxEn?.tax_name,
      sortable: true,
    },
    {
      name: "Tax Description",
      visible: true,
      id: 'Tax Description',
      label: 'Tax Description',
      selector: (row) => row?.taxEn?.description,
      sortable: true,
    },
    {
      name: "Tax Agency",
      visible: true,
      id: 'Tax Agency',
      label: 'Tax Agency',
      selector: (row) => row?.taxEn?.tax_agency_name,
      sortable: true,
    },
    {
      name: "Business Id",
      visible: true,
      id: 'Business Id',
      label: 'Business Id',
      selector: (row) => row?.business_id,
      sortable: true,
    },
    {
      name: "Tax Period",
      visible: true,
      id: 'Tax Period',
      label: 'Tax Period',
      selector: (row) => row?.tax_period,
      sortable: true,
    },
    {
      name: "Filling Freq",
      visible: true,
      id: 'Filling Freq',
      label: 'Filling Freq',
      selector: (row) => row?.filing_frequency,
      sortable: true,
    },
    {
      name: "reporting method",
      visible: true,
      id: 'reporting method',
      label: 'reporting method',
      selector: (row) => row?.filing_frequency,
      sortable: true,
    },
    {
      name: "Tax on Sale",
      visible: true,
      id: 'Tax on Sale',
      label: 'Tax on Sale',
      selector: (row) => row?.tax_on_sale,
      sortable: true,
    },
    {
      name: "Tax on Purchase",
      visible: true,
      id: 'Tax on Purchase',
      label: 'Tax on Purchase',
      selector: (row) => row?.tax_on_purchase,
      sortable: true,
    },
  ];
  const handleDeleteModal = (id) => {
      
    setDeletedTaxId(id)
    setIsDeleteOpen(true)

};
const handleDeleteCancelled = () => {
  setIsDeleteOpen(false);  // Close the delete modal
  setopenDropdownId(null);  // Close the dropdown after action
}; 
const DeleteTax = (id) => {
  axios.delete(`${baseUrl}/taxes/${id}`).then(() => {
      refetch();
  }).catch((error) => {
      console.log(error);
  })
};
const handleDeletedConfirmed = () => {
  if (deletedTaxId) {
    DeleteTax(deletedTaxId)
      setopenDropdownId(null)
  }
  setIsDeleteOpen(false)
};

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

  const { handleSubmit, formState: { errors, isValid }, control, reset, watch } = useForm({
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
  const taxOnSale = watch('tax_on_sale', false);
  const taxOnpurchase = watch('tax_on_purchase', false);
  const AddTax = (data) => {
    setIsSubmitting(true)
    const formattedData = {
      ...data,
      tax_period: data.tax_period.value,
      filing_frequency: data.filing_frequency.value,
      reporting_method: data.reporting_method?.value,
    }
    axios.post(`${baseUrl}/taxes`, formattedData).then((response) => {
      reset();
      setIsOpen(false);
      console.log(response);
      refetch();
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <>
      <CustomModal id='createTax' title='Create Tax' isOpen={isOpen} onCancel={() => setIsOpen(false)} ModalWidth='modal-lg' headerPadding='custom' >
        <form onSubmit={handleSubmit(AddTax)} className=''>
          {/*Tax Name */}
          <div className='container  mx-auto  justify-content-center'>
            <div className='row gx-3 mb-3 '>
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
                      className='w-95'
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
                      className='w-95'
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
          </div>
          {/*Tax Description */}
          <div className='container  mx-auto  justify-content-center'>
            <div className='row gx-3  mb-3  '>
              {/*English Tax Description */}
              <div className='col-md-6 m'>
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
                      className='w-95'
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
                      className='w-95'
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
          </div>
          {/*Agency Name */}
          <div className='container  mx-auto  justify-content-center'>
            <div className='row gx-3  mb-3'>
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
                      className='w-95'
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
              <div className='col-md-6 '>
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
                      className='w-95'
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
          </div>
          {/* Business Id Input & Tax Period Select*/}
          <div className='container  mx-auto  justify-content-center'>
            <div className='row gx-3  mb-3'>
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
                      className='w-95'
                      label='BusinessID'
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
                    validate: value => value || "Please select at least one month",
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label htmlFor="tax_period">Select Tax Period</label>
                      <Select
                        {...field}
                        options={monthsOptions}
                        value={field.value}
                        onChange={selectedOption => field.onChange(selectedOption)}

                        className='mt-2 w-95'
                        error={fieldState.error ? fieldState.error.message : null}
                      />
                    </>
                  )}
                />
                {errors.tax_period && <span className='text-danger'>{errors.tax_period.message}</span>}
              </div>
            </div>
          </div>
          {/*Filling freqSelect & Reporting method  */}
          <div className='container  mx-auto  justify-content-center'>
            <div className='row gx-3 mb-3'>
              <div className='col-md-6'>
                <Controller
                  name='filing_frequency'
                  control={control}
                  rules={{
                    required: 'Filling Frequency is required',
                    validate: value => value || 'Please Select at least one option'
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label htmlFor="filing_frequency">Filing Frequency</label>
                      <Select
                        className='w-95'
                        {...field}
                        value={field.value}
                        onChange={selectedOption => field.onChange(selectedOption)}
                        options={filingFrequencyOptions}

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
                  render={({ field, fieldState }) => (
                    <>
                      <label htmlFor="reporting_method" >Reporting Method</label>
                      <Select
                        className='w-95 '
                        {...field}
                        value={field.value}
                        onChange={selectedOption => field.onChange(selectedOption)}
                        options={reportingMethodOptions}

                        error={fieldState.error ? fieldState.error.message : null}
                      />
                      {errors.reporting_method && <span className='text-danger'>{errors.reporting_method.message}</span>}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          {/* Tax on Sales Checkbox and Input */}
          <div className='container  mx-auto  justify-content-center'>
            <div className='row gx-3'>
              <div className='col-6'>
                <div className='check'>
                  <Controller
                    name='tax_on_sale'
                    control={control}
                    render={({ field, fieldState }) => (
                      <>
                        <input type="checkbox" {...field} value={field.onChange} className='mb-3' />
                        <label className='text-black ms-2'>This tax is collected on sales</label>
                      </>
                    )}
                  />
                </div>
                <div className='d-block'>
                  <label className='d-block mb-2'>Sales on Rate</label>
                  <Input className='w-50' disabled={!taxOnSale} />
                </div>
              </div>
              <div className='col-6'>
                <div className='check'>
                  <Controller
                    name='tax_on_purchase'
                    control={control}
                    render={({ field, fieldState }) => (
                      <>
                        <input type="checkbox" {...field} value={field.onChange} className='mb-3' />
                        <label className='text-black ms-2 '>This tax is collected on purchaes</label>
                      </>
                    )}
                  />
                </div>
                <div className='d-block'>
                  <label className='d-block mb-2'>Purchase Rate</label>
                  <Input className='w-50' disabled={!taxOnpurchase} />
                </div>
                <div className='mt-3'>
                  <input type="checkbox" className='mb-3' />
                  <label className='text-black ms-2 '>Purchase tax is reclaimable</label>
                </div>
              </div>
            </div>
          </div>
          <ModalFooter
            onSubmit={handleSubmit(AddTax)}
            onCancle={() => setIsOpen(false)}
            isSubmitting={isSubmitting}
            isCancelDisabled={isSubmitting || !isValid}
            isSaveDisabled={isSubmitting || !isValid}
            className={!isValid ? 'btn-invalid' : ''}
            className2={!isValid ? 'btn-invalid2' : ''}

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
         {isDeleteOpen && (
                <ConfirmDelete
                    isOpen={isDeleteOpen}
                    onCancel={handleDeleteCancelled}
                    onConfirm={handleDeletedConfirmed}
                    deleteMsg={'Tax'}

                />
            )}
    </>
  )
}

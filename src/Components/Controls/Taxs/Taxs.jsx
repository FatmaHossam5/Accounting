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

export default function Taxs() {


    const [openDropdownId, setopenDropdownId] = useState(null);
    const[isOpen,setIsOpen]=useState(false);
    const{baseUrl}=useContext(AuthContext);
    const columns = [
      {
        name: " Id",
        selector: (row) => row.id ,
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
  
  
    const{data:taxes,refetch}=useDataFetch('taxes')
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
 
const {handleSubmit,formState:{errors,isValid},control,reset}=useForm({
  mode:'onChange',
  defaultValues:{
    tax_name_ar:'',
    tax_name_en:'',
    description_ar:'',
    description_en:'',
    tax_agency_name_ar:'',
    tax_agency_name_en:'',
    business_id:'',
    tax_period:'',
    filing_frequency:'',
    reporting_method:'TYPE1',
    tax_on_sale:'',
    tax_on_purchase:''
  },
  reValidateMode:'onChange'


});
const AddTax=(data)=>{
  const formattedData={
    ...data,
    tax_period:data.tax_period.map(option=>option.value).join('')
  }
  console.log(formattedData);
  
axios.post(`${baseUrl}/taxes`,formattedData).then((response)=>{
  console.log(response);
  
}).catch((error)=>{
  console.log(error);
  
})
}
  return (
    <>
      <CustomModal id='createTax' title='Create Tax' isOpen={isOpen} onCancel={()=>setIsOpen(false)} ModalWidth='modal-xl' headerPadding='custom' >
     {/* <form onSubmit={handleSubmit(AddProduct)}>
     <div className='row gx-3 mb-3'>
          <div className='col-md-6'>
            <Controller
            name='name_en'
            control={control}
            rules={{
              required:'English Product Name is required !',
              pattern:{value:/^[A-Za-z\s]+$/,message:'Only English Letters are allowed'},
              validate:{
                startsWithNoNumber:value => !/^\d/.test(value) || 'Cannot start With a Number'
              }
            }}
            render={({field,fieldState})=>(
              <Input
               type='text'
               label={'Product English Name'}
                placeholder={'Enter product name'}
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?fieldState.error.message:null}
                 />
  )}
            />
              {errors.name_en && <span className="text-danger">{errors.name_en.message}</span>}
          </div>
          <div className='col-md-6'>
            <Controller
            name='name_ar'
            control={control}
            rules={{
              required:'Arabic Product Name is required! ',
              pattern:{value:/^[ء-ي\s]+$/,message:"Only Arabic Letters are Allowed"},
              validate:{startsWithNoNumber:value=>!/^\d/.test(value) || 'Cannot start With a Number'}
            }}
            render={({field,fieldState})=>(
              <Input
              type='text'
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?fieldState.error.message:null}
               label={'Product Arabic Name'} 
               placeholder={'Enter product name'} />
  )}
            
            />
              {errors.name_ar && <span className="text-danger">{errors.name_ar.message}</span>}
          </div>

        </div>
     <div className='row gx-3 mb-3'>
          <div className='col-md-6'>
            <Controller
            name='brand_en'
            control={control}
            rules={{
              required:'English Brand Name is required !',
              pattern:{value:/^[A-Za-z\s]+$/,message:'Only English Letters are allowed'},
              validate:{
                startsWithNoNumber:value => !/^\d/.test(value) || 'Cannot start With a Number'
              }
            }}
            render={({field,fieldState})=>(
              <Input
               type='text'
               label={'Brand English Name'}
                placeholder={'Enter Brand name'}
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?fieldState.error.message:null}
                 />
  )}
            />
              {errors.brand_en && <span className="text-danger">{errors.brand_en.message}</span>}
          </div>
          <div className='col-md-6'>
            <Controller
            name='brand_ar'
            control={control}
            rules={{
              required:'Arabic Brand Name is required! ',
              pattern:{value:/^[ء-ي\s]+$/,message:"Only Arabic Letters are Allowed"},
              validate:{startsWithNoNumber:value=>!/^\d/.test(value) || 'Cannot start With a Number'}
            }}
            render={({field,fieldState})=>(
              <Input
              type='text'
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?fieldState.error.message:null}
               label={'Brand Arabic Name'} 
               placeholder={'Enter Brand name'} />
  )}
            
            />
              {errors.brand_ar && <span className="text-danger">{errors.brand_ar.message}</span>}
          </div>

        </div>
        <div className='row gx-3 mb-3'>
        <div className='col-md-6'>
          <Controller
            name='description_en'
            control={control}
            rules={{
              required:'English Brand Description is required! ',
              pattern:{value:/^[A-Za-z\s]+$/,message:'Only English Letters are allowed'},
              validate:{startsWithNoNumber:value=>!/^\d/.test(value) || 'Cannot start With a Number'}
            }}
            render={({field,fieldState})=>(
              <Input
              type='text'
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?fieldState.error.message:null}
               label={'Product English Description'} 
               placeholder={'Enter product description'} />
  )}
            
            />
               {errors.description_en && <span className="text-danger">{errors.description_en.message}</span>}
          </div>
          <div className='col-md-6'>
          <Controller
            name='description_ar'
            control={control}
            rules={{
              required:'Arabic Brand Description is required! ',
              pattern:{value:/^[ء-ي\s]+$/,message:"Only Arabic Letters are Allowed"},
              validate:{startsWithNoNumber:value=>!/^\d/.test(value) || 'Cannot start With a Number'}
            }}
            render={({field,fieldState})=>(
              <Input
              type='text'
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?fieldState.error.message:null}
               label={'Product Arabic Description'} 
               placeholder={'Enter product description'} />
  )}
            
            />
               {errors.description_ar && <span className="text-danger">{errors.description_ar.message}</span>}
          </div>
       

        </div>
        <div className='row gx-3 mb-3'>
          <div className='col-md-4'>
<Controller
name='tax'
control={control}
rules={{
  required:'TAX is required!',
  pattern:{value: /^\d+(\.\d{1,2})?$/,message:'Enter a valid tax amount'},
  validate: (value) => 
              value >= 0 && value <= 100 || "Tax must be between 0 and 100"

}}
render={({field,fieldState})=>(
  <Input
   label='TAX'
    placeholder='Enter TAX'
     type='text' 
     value={field.value}
     onChange={field.onChange}
     error={fieldState.error?fieldState.error.message:null}
     />
)}
/>
{errors.tax && <span className="text-danger">{errors.tax.message}</span>}
          </div>
          <div className='col-md-4'>
          <Controller
name='taxable'
control={control}
rules={{
  required:'Taxable is required!'}}
render={({field,fieldState})=>(
  <Input
   label='Taxable'
    placeholder='Enter Taxable'
     type='text' 
     value={field.value}
     onChange={field.onChange}
     error={fieldState.error?fieldState.error.message:null}
     />
)}
/>
{errors.taxable && <span className="text-danger">{errors.taxable.message}</span>}    
          </div>
          <div className='col-md-4'>
          <Controller
name='stock'
control={control}
rules={{
  required:'stock is required!',
  pattern:{value:/^\d+$/,message:'Enter a valid stock amount'},
  validate:{isInteger:value=>/^\d+$/.test(value)  || "Please enter a valid integer"}


}}
render={({field,fieldState})=>(
  <Input
   label='stock'
    placeholder='Enter stock'
     type='text' 
     value={field.value}
     onChange={field.onChange}
     error={fieldState.error?fieldState.error.message:null}
     />
)}
/>
{errors.stock && <span className="text-danger">{errors.stock.message}</span>}
          
          </div>
        </div>
        <div className='row gx-3 mb-2 '>
          <div className='col-md-4 '>
            <Controller
            name='category_id'
            control={control}
            render={({field})=>(
              <Select label='Category'
               option='Category'
               options={category}
               value={field.value}
               onChange={field.onChange}
                />
            )}
            />
          
          </div>
          <div className='col-md-4 '>
          <Controller
            name='department_id'
            control={control}
            render={({field})=>(
              <Select label='Department'
               option='Department'
               options={department}
               value={field.value}
               onChange={field.onChange}
                />
            )}
            />
          
           
          </div>
          <div className='col-md-4 '>
          <Controller
            name='type'
            control={control}
            render={({field})=>(
              <Select label='Type'
               option='Type'
               options={[
                {label:'TYPE1',value:'TYPE1'},
                {label:'TYPE2',value:'TYPE2'},
                {label:'TYPE3',value:'TYPE3'},
  
  
              ]}
               value={field.value}
               onChange={field.onChange}
                />
            )}
            />
          
          
          </div>
        </div>
      <ModalFooter
       onSubmit={handleSubmit(AddProduct)}
       onCancle={()=>setIsOpen(false)}
isSubmitting={isSubmitting}
isCancelDisabled={isSubmitting||!isValid}
isSaveDisabled={isSubmitting||!isValid}
className={!isValid?'btn-invalid':''}
className2={!isValid?'btn-invalid2':''}
   
       />
     </form> */}
       <form onSubmit={handleSubmit(AddTax)}>
      {/* Tax Name English */}
      <div>
        <label>Tax Name (English)</label>
        <Controller
          name="tax_name_en"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
            <label>Tax Name (Arabic)</label>
        <Controller
          name="tax_name_ar"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>

      {/* Description Arabic */}
      <div>
        <label>Description (Arabic)</label>
        <Controller
          name="description_ar"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
           <label>Description (English)</label>
        <Controller
          name="description_en"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
{/* Agency Arabic */}
<div>
        <label>Agency (Arabic)</label>
        <Controller
          name="tax_agency_name_ar"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
           <label>Agency (English)</label>
        <Controller
          name="tax_agency_name_en"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      {/* Business ID */}
      <div>
        <label>Business ID</label>
        <Controller
          name="business_id"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>

      {/* Tax Period (Multi-Select) */}
      <div>
        <label>Tax Period</label>
        <Controller
          name="tax_period"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              options={monthsOptions}
              isMulti
            />
          )}
        />
      </div>

      {/* Filing Frequency (Multi-Select) */}
      <div>
        <label>Filing Frequency</label>
        <Controller
          name="filing_frequency"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              options={filingFrequencyOptions}
              isMulti
            />
          )}
        />
      </div>

      {/* Reporting Method (Single Select) */}
      <div>
        <label>Reporting Method</label>
        <Controller
          name="reporting_method"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              {...field}
              options={reportingMethodOptions}
            />
          )}
        />
      </div>

      {/* Tax on Sale (Boolean) */}
      <div>
        <label>Tax on Sale</label>
        <Controller
          name="tax_on_sale"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input type="checkbox" {...field} />
          )}
        />
      </div>

      {/* Tax on Purchase (Boolean) */}
      <div>
        <label>Tax on Purchase</label>
        <Controller
          name="tax_on_purchase"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input type="checkbox" {...field} />
          )}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
      </CustomModal>
    
      <CustomPage data={[...taxes]}
        columns={columns}
        title='Taxes'
        ButtonName='Create Tax'
        target='#createTax'
        buttonAction={()=>setIsOpen(true)}
      />
    </>
  )
}

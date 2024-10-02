import React, { useContext, useState } from 'react';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import { Controller, useForm } from 'react-hook-form';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import axios from 'axios';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';

export default function Products({ButtonName,buttonAction,target}) {

  const [openDropdownId, setopenDropdownId] = useState(null);
  const[isOpen,setIsOpen]=useState(false);
  const{data:categories}=useDataFetch('categories')
  const{data:departments}=useDataFetch('departments')
  const{data:products,refetch}=useDataFetch('products')

const {handleSubmit,formState:{errors,isValid},control,reset}=useForm({
      mode:'onChange',
      defaultValues:{
        name_ar:'',
        name_en:'',
        brand_ar:'',
        brand_en:'',
        description_ar:'',
        description_en:'',
        tax:'',
        taxable:'',
        stock:'',
        type:'TYPE1',
        category_id:'',
        department_id:''
      },
      reValidateMode:'onChange'

  
});
const[isSubmitting,setIsSubmitting]=useState(false);
const{baseUrl}=useContext(AuthContext);

  const category=categories.map((cat=>({
    label:cat?.categoryEn?.name,
    value:cat?.id
  })))
  const department=departments.map((dep=>({
    label:dep?.DepartmentEn?.name,
    value:dep?.id
  })))
  const Product =[...products]
  console.log(Product);
  
  const columns = [
    {
      name: "English Product Name",
      selector: (product) =>  product?.productEn?.name ,
      sortable: true,
      cell: (row) => (
        <div className="d-flex align-items-center justify-content-between" style={{ minWidth: '150px' }}>
          <span className="text-truncate" style={{ maxWidth: '150px' }}>
            {row?.productEn?.name}
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
      selector: (row) => row.productEn?.brand,
      sortable: true,
    },
    // {
    //   name: "Product Department",
    //   selector: (row) => row.department.filter(department?.id===row?.department_id),
    //   sortable: true,
    // },
    {
      name: "Product Description",
      selector: (row) => row.productEn?.description,
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


  const AddProduct=(data)=>{
;
    setIsSubmitting(true)
    axios.post(`${baseUrl}/products`,data).then((response)=>{
      console.log(response);
      setIsOpen(false);
      refetch();
      
    }).catch((error)=>{
      console.log(error);
      
    }).finally(()=>setIsSubmitting(false))
  }
  return (
    <>
      <CustomModal id='createProduct' title='Create Product' isOpen={isOpen} onCancel={()=>setIsOpen(false)} ModalWidth='modal-xl' headerPadding='custom'>
     <form onSubmit={handleSubmit(AddProduct)}>
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
     </form>
      </CustomModal>
    
      <CustomPage data={[...products]}
        columns={columns}
        title='Products'
        ButtonName='Create Product'
        target='#createProduct'
        buttonAction={()=>setIsOpen(true)}
      />
    </>
  )
}

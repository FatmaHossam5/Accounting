import React, { useContext, useEffect, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import CustomModal from '../../Shared/CustomModal/CustomModal';
import { Controller, useForm } from 'react-hook-form';
import Select from '../../Shared/Select/Select';
import Input from '../../Shared/Input/Input';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import axios from 'axios';
import AuthContextProvider, { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';

export default function Cities() {
  const[isOpen,setIsOpen]=useState(false);
  const{control,handleSubmit,formState:{errors},reset}=useForm({
    defaultValues:{
      name_ar:'',
      name_en:'',
      governorate_id:null
  }
  });
  const handleCancle=()=>setIsOpen(false);
  const{baseUrl}=useContext(AuthContext);
  const[cities,setCities]=useState([]);
  const[governorates,setGovernarates]=useState([])
  const [openDropdownId, setopenDropdownId] = useState(null);
  const[isSubmitting,setIsSubmitting]=useState(false);
  const[isDeleteOpen,setIsDeleteOpen]=useState(false);
  const[deletedCityId,setDeletedCityId]=useState(null)
  const data=cities;
  const columns=[

    {
      name: " Id",
      selector: (city) =>  city.id ,
      sortable: true,
      cell: (row) => (
          <div className="d-flex align-items-center ">
              <span className="me-2">
                  {row.id}
              </span>
              <Dropdown

                  dropdownContent={
                      <div>
                          <a className="dropdown-item" href="#" >
                              <i className="bi bi-pencil-fill me-2 text-warning" />
                              Update
                          </a>
                          <a className="dropdown-item mt-1" href="#" onClick={()=>handleDeleteModal(row.id)}>
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
      name: "English City  Name",
      selector: (City) => City.cityAr?.name,
      sortable: true,
  },
  {
      name: "Arabic City Name",
      selector: (City) => City?.cityEn?.name,
      sortable: true,
  },
  {
      name: "Arabic Governarate Name",
      selector: (City) => City?.governorate?.governorateAr?.name,
      sortable: true,
  },
  {
      name: "English  Governarate Name",
      selector: (City) => City?.governorate?.governorateEn?.name,
      sortable: true,
  },


  ]
  

  const getAllCities=()=>{
    axios.get(`${baseUrl}/cities`).then((response)=>{
    
      setCities(response.data.data)
    }).catch((error)=>{
      console.log(error);
      
    })
  }
  const getAllGovernarates=()=>{
    axios.get(`${baseUrl}/governorates`).then((response)=>{
   
      const selectedGovernarate=response.data.data.map(governorate=>({
        label:governorate.governorateEn.name,
        value:governorate.id
      }))
     
setGovernarates(selectedGovernarate)
      
    }).catch((error)=>{
      console.log(error);
      
    }
)
  }
  const AddCity = (data) => {
    setIsSubmitting(true)
    axios.post(`${baseUrl}/cities`, data).then(() => {
      reset();
      handleCancle();
      getAllCities();
    }).catch((error) => {
      console.log(error);

    }).finally(() => {
      setIsSubmitting(false)
    })
  }

const handleDeleteCancelled=()=>setIsDeleteOpen(false);

 const handleDeleteModal=(id)=>{
  setDeletedCityId(id)
  setIsDeleteOpen(true)
 }
const DeleteCity =(id)=>{
axios.delete(`${baseUrl}/cities/${id}`).then((response)=>{
  console.log(response);
  getAllCities();
}).catch((error)=>{
  console.log(error);
  
})
}
const handleDeletedConfirmed=()=>{
 if(deletedCityId){
  DeleteCity(deletedCityId);
  setopenDropdownId(null)
 }
 setIsDeleteOpen(false)
}
useEffect(()=>{
  getAllCities();
  getAllGovernarates()
},[])
  return (
    <>
    
    <CustomPage
    data={data}
    columns={columns}
    title={'Cities'}
    ButtonName={'Create City'}
    target={'#createcities'}
    buttonAction={()=>setIsOpen(true)}

    />
    <CustomModal
    title={'Create City'}
   isOpen={isOpen}
    onCancel={handleCancle}
    className='modal-lg'
   >
   <form onSubmit={handleSubmit(AddCity)}  >
               
               <div className="  ">
                   <div className='col-12'>
                       <Controller
                       name='governorate_id'
                       control={control}
                       rules={{required:'Governarate Selection is required'}}
                       render={({field})=>(
                           <Select
                           label={'select Governarate'}
                          options={governorates}
                           value={field.value}
                           onChange={(val)=>field.onChange(val)}
                           id='GovernarateSelect'
                           option={'Governarate'}
                           />
                       )}
                 />
                 {errors.governorate_id&&<p className='text-danger'>{errors.governorate_id.message}</p>}
                   </div>
                   <div className="col-12 d-flex">

                       <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                           <Controller
                           name='name_ar'
                           control={control}
                           rules={{required:'Arabic Name is Required',
                               pattern:{value:/^[ء-ي]+$/,message:'Only Arabic letters are allowed'},
                               validate:{
                                   startsWithNoNumber:value=>!/^\d/.test(value)||'Cannot start with a number'
                               }
                           }}
                           render={({field,fieldState})=>(
                               <Input type='text' label='Arabic City Name'
                                placeholder='Enter Arabic City Name ' 
                                className="px-form-input w-100 m-auto"
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?fieldState.error.message:null}
                               />
                           )}
                           
                           
                           />
                       {errors.name_ar&&<p className='text-danger'>{errors.name_ar.message}</p>}
                     
                       </div>
                       <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                    
                       <Controller
                           name='name_en'
                           control={control}
                           rules={{required:'English Name is Required',pattern:{value:/^[A-Za-z]+$/,message:'Only English Letters are allowed'},
                           validate:{
                               startsWithNoNumber:value=>!/^\d/.test(value)||'Cannot start With a Number'
                           }
                       }}
                           render={({field,fieldState})=>(
                               <Input type='text' label='English City Name'
                                placeholder='Enter English City Name ' 
                                className="px-form-input w-100 m-auto"
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?fieldState.error.message:null}
                               />
                           )}
                           
                           
                           />
{errors.name_en&&<p className='text-danger'>{errors.name_en.message}</p>}
                       </div>
                    
                   </div>
               </div>
 <ModalFooter 
onCancle={handleCancle}
onSubmit={handleSubmit(AddCity)}
isSubmitting={isSubmitting}

/>
           </form>


   </CustomModal>
    
 

{isDeleteOpen && (
  <ConfirmDelete
  isOpen={isDeleteOpen}
  onCancel={handleDeleteCancelled}
  onConfirm={handleDeletedConfirmed}
  deleteMsg='City'
 

  />
)}
</>

  )
}

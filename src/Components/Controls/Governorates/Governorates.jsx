import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';

export default function Governorates() {
    const [openDropdownId, setopenDropdownId] = useState(null);
    const[governorates,setGovernorates]=useState([]);
    const[country,setCountry]=useState([]);
    const{handleSubmit,formState:{errors},reset,control } =useForm({
        defaultValues:{
            name_ar:'',
            name_en:'',
            country_id:''
        }
    });
    const {baseUrl}=useContext(AuthContext);
    const [isloading, setIsLoading] = useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const[isSubmitting,setIsSubmitting]=useState(false);
    const[isDeleteOpen,setIsDeleteOpen]=useState(false);
    const[deletedGovernarateId,setDeletedGovernarateId]=useState(null);
   
    
    const columns = [
        {
            name: " Id",
            selector: (country) =>  country.id ,
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
                                <a className="dropdown-item mt-1" href="#"onClick={()=>handleDeleteModal(row.id)}>
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
            name: "English governorates  Name",
            selector: (governorates) => governorates.governorateAr?.name,
            sortable: true,
        },
        {
            name: "Arabic governorates Name",
            selector: (governorates) => governorates?.governorateEn?.name,
            sortable: true,
        },
        {
            name: "Arabic Name",
            selector: (governorates) => governorates?.country?.countryAr?.name,
            sortable: true,
        },
        {
            name: "English Name",
            selector: (governorates) => governorates?.country?.countryEn?.name,
            sortable: true,
        },
 


    ];

 
    const closeModal=()=>setIsOpen(false)
    const handleCancle=()=>{
     closeModal()
   }
    const getAllGovernarates=()=>{
        setIsLoading(true)
        axios.get(`${baseUrl}/governorates
            `).then((response)=>{
           setGovernorates(response.data.data);
           console.log(response);
           
                    }).catch((error)=>{
                        console.log(error);
                        
                    }).finally(()=>{
                        setIsLoading(false)
                    })
    }
    const getAllCountries=()=>{
        axios.get(`${baseUrl}/countries`).then((response)=>{
            console.log(response.data.data);
            const countryOptions=response.data.data.map(country=>({
                value:country.id,
                label:country.countryEn.name,
            }))
            setCountry(countryOptions)        
        }).catch((error)=>{
            console.log(error);
            
    
        })
    }

    const handleDeleteModal =  (id) => {
       setDeletedGovernarateId(id)
      setIsDeleteOpen(true)
        
      };
      
 
      const DeleteGovernarates =(id)=>{
        axios.delete(`${baseUrl}/governorates/${id}`).then((response)=>{
            console.log('Country deleted successfully:', response);
            getAllGovernarates();

        }).catch((error)=>{
            console.error('Error deleting country:', error);
        })
      }
    const AddGovernarates =(data)=>{
        setIsSubmitting(true)
axios.post(`${baseUrl}/governorates`,data).then((response)=>{
   closeModal();
    getAllGovernarates();
    reset()
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    setIsSubmitting(false)
})
    }
    const handleDeleteCancelled=()=>setIsDeleteOpen(false);
    const handleDeletedConfirmed=()=>{
        alert('yess')
       if(deletedGovernarateId){
        DeleteGovernarates(deletedGovernarateId);
        setopenDropdownId(null)
       }
       setIsDeleteOpen(false)
    }
    useEffect(()=>{
getAllGovernarates();
getAllCountries()
    },[])
  return (
   
    
    <>
                <CustomPage
                    title='Governorates'
                    ButtonName='Create Governorates'
                    ModalTitle='Create governorates'
                    target='#creategovernorates'
                    buttonAction={()=>setIsOpen(true)}
                    columns={columns}
                    data={governorates}
                  
                />
                      
                <CustomModal id='creategovernorates' title='Governarate'isOpen={isOpen}  className='modal-lg' onCancel={handleCancle}>
                    <form onSubmit={handleSubmit(AddGovernarates)}  >
               
                        <div className="  ">
                            <div className='col-12'>
                                <Controller
                                name='country_id'
                                control={control}
                                rules={{required:'Country Selection is required'}}
                                render={({field})=>(
                                    <Select
                                    label={'select Country'}
                                    options={country}
                                    value={field.value}
                                    onChange={field.onChange}
                                    id='CountrySelect'
                                    option='country'
                                    />
                                )}
                          />
                          {errors.country_id&&<p className='text-danger'>{errors.country_id.message}</p>}
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
                                        <Input type='text' label='Arabic Country Name'
                                         placeholder='Enter Arabic Country Name ' 
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
                                        <Input type='text' label='English Country Name'
                                         placeholder='Enter English Country Name ' 
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
          onSubmit={handleSubmit(AddGovernarates)}
          isSubmitting={isSubmitting}/>
                    </form>
                </CustomModal>
                {isDeleteOpen&&(<ConfirmDelete
                isOpen={isDeleteOpen}
                onCancel={handleDeleteCancelled}
                onConfirm={handleDeletedConfirmed}
                deleteMsg={'Governarate'}
                />)}

            </>
    
    
 
  )
}

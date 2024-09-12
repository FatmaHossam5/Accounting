import React, { useEffect, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Modal from '../../Shared/Modal/Modal';
import { useForm,Controller } from 'react-hook-form';
import Input from '../../Shared/Input/Input';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import axios from 'axios';
import Select from '../../Shared/Select/Select';

export default function Governorates() {
    const [openDropdownId, setopenDropdownId] = useState(null);
    const[governorates,setGovernorates]=useState([]);
    const[country,setCountry]=useState([]);
    const[selectedCountry,setSelectedCountry]=useState('')
    const{register,handleSubmit,formState:{errors},reset,control } =useForm({
        defaultValues:{
            name_ar:'',
            name_en:'',
            country_id:''
        }
    });
    
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
                                <a className="dropdown-item mt-1" href="#"onClick={()=>handleDelete(row.id)}>
                                    <i className="bi bi-trash-fill me-2 text-danger" />
                                    Remove
                                </a>

                            </div>
                        }
                        id={row.id}
                        openDropdownId={openDropdownId}
                        setOpenDropdownId={setopenDropdownId}
                        onDelete={handleDelete}
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


    const getAllGovernarates=()=>{
        axios.get(`http://192.168.1.7:8000/api/governorates`).then((response)=>{
           setGovernorates(response.data.data);
           console.log(response);
           
                    }).catch((error)=>{
                        console.log(error);
                        
                    })
    }
    const getAllCountries=()=>{
        axios.get(`http://192.168.1.7:8000/api/countries`).then((response)=>{
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
    const handleChange=(event)=>{
setSelectedCountry(event.target.value)
    }
    const handleDelete = async (id) => {
        console.log(`Deleting country with id: ${id}`);
        await DeleteGovernarates(id);
        // Optionally log success or error messages
      };
      const DeleteGovernarates = async (id) => {
        try {
          const response = await axios.delete(`http://192.168.1.7:8000/api/governorates/${id}`);
          console.log('Country deleted successfully:', response);
        getAllGovernarates(); // Refresh the list after deletion
        } catch (error) {
          console.error('Error deleting country:', error);
        }
      };
    const AddGovernarates =(data)=>{
axios.post(`http://192.168.1.7:8000/api/governorates`,data).then((response)=>{
    console.log(response);
    getAllGovernarates();
    reset()
}).catch((error)=>{
    console.log(error);
    
})
    }
    useEffect(()=>{
getAllGovernarates();
getAllCountries()
    },[])
  return (
    <>
    
    <>
                <CustomPage
                    title='Governorates'
                    ButtonName='Create Governorates'
                    ModalTitle='Create governorates'
                    target='#creategovernorates'
                    buttonAction={'creategovernorates'}
                    columns={columns}
                    data={governorates}
                />
                      
                <Modal id='creategovernorates' title='countries'  className='w-40'>
                    <form  onSubmit={handleSubmit(AddGovernarates)} >
               
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
                                    rules={{required:'Arabic Name is Required'}}
                                    render={({field})=>(
                                        <Input type='text' label='Arabic Country Name'
                                         placeholder='Enter Arabic Country Name ' 
                                         className="px-form-input w-100 m-auto"
                                         value={field.value}
                                         onChange={field.onChange}
                                        />
                                    )}
                                    
                                    
                                    />
                                {errors.name_ar&&<p className='text-danger'>{errors.name_ar.message}</p>}
                              
                                </div>
                                <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                             
                                <Controller
                                    name='name_en'
                                    control={control}
                                    rules={{required:'English Name is Required'}}
                                    render={({field})=>(
                                        <Input type='text' label='English Country Name'
                                         placeholder='Enter English Country Name ' 
                                         className="px-form-input w-100 m-auto"
                                         value={field.value}
                                         onChange={field.onChange}
                                        />
                                    )}
                                    
                                    
                                    />
 {errors.name_en&&<p className='text-danger'>{errors.name_en.message}</p>}
                                </div>
                             
                            </div>
                        </div>
                        <div className="modal-footer mt-3 ms-5">
            <button type="button" className="px-btn btn px-white-btn" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="px-btn px-blue-btn">Save</button>
          </div>
                    </form>
                </Modal>

            </>
    
    
    </>
  )
}
//
// {...register('name_ar')} 
// {...register('name_en')}
// {errors.name_en && <p className="text-danger">{errors.name_en.message}</p>}
// {errors.name_ar && <p className="text-danger">{errors.name_ar.message}</p>}
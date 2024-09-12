import React, { useEffect, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Modal from '../../Shared/Modal/Modal'
import Input from '../../Shared/Input/Input'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import Select from '../../Shared/Select/Select'
import axios from 'axios'
import { useForm } from 'react-hook-form'
export default function Countries() {
    const [openDropdownId, setopenDropdownId] = useState(null)
    const[country,setCountry]=useState([]);
     const{register,handleSubmit,formState:{errors},reset } =useForm();
    
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
            name: "Arabic Name",
            selector: (country) => country.countryAr?.name,
            sortable: true,
        },
        {
            name: "English Name",
            selector: (country) => country?.countryEn?.name,
            sortable: true,
        },



    ];

 
   


const getAllCountries=()=>{
    axios.get(`http://192.168.1.7:8000/api/countries`).then((response)=>{
        console.log(response.data.data);
        setCountry(response.data.data)        
    }).catch((error)=>{
        console.log(error);
        

    })
}



   
const AddCountry = (data) => {
    console.log(data);

    // Create a FormData object to handle form-data correctly
    const formData = new FormData();
    console.log('name_ar', data.name_ar);
    console.log('name_en', data.name_en);
    
    
    formData.append('name_ar', data.name_ar);  // Arabic name
    formData.append('name_en', data.name_en);  // English name

    axios.post('http://192.168.1.7:8000/api/countries', formData, {
        headers: {
            'Accept': 'application/json',  // Set the header as in Postman
            'Content-Type': 'multipart/form-data'  // Ensure correct content type for form-data
        }
    })
    .then((response) => {
        console.log(response);
        getAllCountries();  // Fetch all countries after successful addition
    })
    .catch((error) => {
        console.error(error);
    });
};
   
//   const DeleteCountry=(id)=>{
//     axios.delete(`http://192.168.1.7:8000/api/countries/${id}`).then((response)=>{
//         console.log(response);
        
//     }).catch((error)=>{
//         console.log(error);
        
//     })
//   }
//   const handleDelete=async(id)=>{
//     await DeleteCountry(id)
//   }
const handleDelete = async (id) => {
    console.log(`Deleting country with id: ${id}`);
    await DeleteCountry(id);
    // Optionally log success or error messages
  };
  
  const DeleteCountry = async (id) => {
    try {
      const response = await axios.delete(`http://192.168.1.7:8000/api/countries/${id}`);
      console.log('Country deleted successfully:', response);
      getAllCountries(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting country:', error);
    }
  };
useEffect(()=>{
    getAllCountries();
},[])
    return (
   <>
                <CustomPage
                    title='countries'
                    ButtonName='Create Countries'
                    ModalTitle='Create countries'
                    target='#createcountries'
                    buttonAction={'createcountries'}
                    columns={columns}
                    data={country}
                />
                      
                <Modal id='createcountries' title='countries'  className='w-40'>
                    <form onSubmit={handleSubmit(AddCountry)} >
               
                        <div className="  ">
                            <div className="col-12 d-flex">

                                <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                                    <Input type='text' label='Arabic Country Name' placeholder='Enter Arabic Country Name ' className="px-form-input w-100 m-auto"
                                      {...register('name_ar')} />
                                   {errors.name_ar && <p className="text-danger">{errors.name_ar.message}</p>}
                                </div>
                                <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                                    <Input type='text' label='English Country Name' placeholder='Enter English Country Name ' className="px-form-input w-100 m-auto"
                                      {...register('name_en')}/>
                                          {errors.name_en && <p className="text-danger">{errors.name_en.message}</p>}
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
        
    )
}

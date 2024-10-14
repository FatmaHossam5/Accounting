import React, { useContext, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import { format, parseISO } from 'date-fns';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import Input from '../../Shared/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import axios from 'axios';
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';

export default function Companies() {
    const [openDropdownId, setopenDropdownId] = useState(null);
    const[isSubmitting,setIsSubmitting]=useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletedCompanyId, setDeletedCompanyId] = useState(null);
    const { data: companies,refetch } = useDataFetch('companies');
    const { baseUrl } = useContext(AuthContext);
    const[isOpen,setIsOpen]=useState(false)
const{control,formState:{errors,isValid},handleSubmit,reset}=useForm(
    {
        defaultValues:{
            name_ar:"",
            name_en:'',
            commercial_register:null,
            logo:null,
            start_of_finanicail_year:'01-01-2024',
            end_of_financial_year:'01-01-2025'
        }
    }
)
    const parseDateOnly = (dateString) => {
       

        if (!dateString) return 'Invalid Date';
     
        const [datePart] = dateString.split(' '); 
        if (!datePart) return 'Invalid Date';
        const [year, month, day] = datePart.split('-');
       
        if (year && month && day) {
            return `${year}-${month}-${day}`; 
        } else {
            return 'Invalid Date';
        }
    };

    const columns = [
        {
            name: " Id",
            selector: (row) =>  row.id ,
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
            visible:true,
            id:'Id',
            label:'Id',
            style: {
                minWidth: '100px',
            }

        },
        {
            name: "English Company Name",
            selector: (row) => row.companyEn?.name,
            sortable: true,
            visible: true,
            id: 'English Company Name',
            label: 'English Company Name'

        },
        {
            name: "Arabic Company Name",
            selector: (row) => row.companyEn?.name,
            sortable: true,
            visible: true,
            id: 'Arabic Company Name',
            label: 'Arabic Company Name'

        },
        {
            name: "Commercial Register",
            selector: (row) => {
                const imageURL = `http://192.168.1.20:8000${row.commercial_register}`;

                return (
                    <img src={imageURL} alt="Commercial Register" style={{ width: '50px', height: '50px' }} />
                );
            },
            sortable: true,
            visible: true,
            id: 'Commercial Register',
            label: 'Commercial Register'
        },
        {
            name: "Logo",
            selector: (row) => {
                const logo = `http://192.168.1.20:8000${row.logo}`;
                return (
                    <img src={logo} alt="Commercial Register" style={{ width: '50px', height: '50px' }} />
                )
            },
            sortable: true,
            visible: true,
            id: 'Logo',
            label: 'Logo'
        },
        {
            name: 'Start of Financial Year',
            selector: row => {
                return parseDateOnly(row?.start_of_finanicail_year)
            },
            sortable: true,
            visible: true,
            id: 'Start of Financial Year',
            label: 'Start of Financial Year'
        },
        {
            name: "End of Finincial Year",
            selector: (row) => {
                return parseDateOnly(row?.end_of_financial_year)
            },

            sortable: true,
            visible: true,
            id: 'End of Finincial Year',
            label: 'End of Finincial Year'
        },


    ];
   const AddCompany=(data)=>{

    setIsSubmitting(true)
    const formData= new FormData();
    formData.append('name_en',data.name_en);
    formData.append('name_ar',data.name_ar);
    formData.append('commercial_register',data.commercial_register[0]);
    formData.append('logo',data.logo[0]);
    formData.append('start_of_finanicail_year',data.start_of_finanicail_year);
    formData.append('end_of_financial_year',data.end_of_financial_year);

console.log(formData);

    axios.post(`${baseUrl}/companies`,formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }).then((response)=>{
    reset();
        setIsOpen(false);
        refetch();
        console.log(response);
        
    }).catch((error)=>{
        console.log(error);
        
    }).finally(()=>{
        setIsSubmitting(false)
    })
    
   }
   const handleDeleteModal = (id) => {
      
    setDeletedCompanyId(id)
    setIsDeleteOpen(true)

};
const handleDeleteCancelled = () => {
    setIsDeleteOpen(false);  // Close the delete modal
    setopenDropdownId(null);  // Close the dropdown after action
  }; 
  const DeleteCompany = (id) => {
    axios.delete(`${baseUrl}/companies/${id}`).then(() => {
        refetch();
    }).catch((error) => {
        console.log(error);
    })
};
const handleDeletedConfirmed = () => {
    if (deletedCompanyId) {
        DeleteCompany(deletedCompanyId)
        setopenDropdownId(null)
    }
    setIsDeleteOpen(false)
};

    return (
        <>
            <CustomPage
                title='Companies'
                ButtonName='Create Companies'
                ModalTitle='Create companies'
                target='#createcompanies'
                columns={columns}
                data={[...companies]}
                buttonAction={()=>setIsOpen(true)}
            />


             <CustomModal id='createcompanies' title='Companies'  className='w-40' isOpen={isOpen} onCancel={()=>setIsOpen(false)}>
                <form onSubmit={handleSubmit(AddCompany)}>
                 <div className='Container mx-auto  justify-content-center'>
                    <div className='row gx-3 mb-3'>
                        <div className='col-6'>
                            <Controller
                            name='name_en'
                            control={control}
                            rules={{
                                required:'Company Name is required',
                                pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                                validate: {
                                  startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                                }
                            }}
                            render={({field,fieldState})=>(
                                <>
                                <Input
                                type='text'
                                value={field.value}
                                onChange={field.onChange}
                                className='w-95'
                                label='Company English Name'
                                placeholder='Enter company name'
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.name_en && <span className='text-danger'>{errors.name_en.message}</span>}
                        </div>
                        <div className='col-6'>
                            <Controller
                            name='name_ar'
                            control={control}
                            rules={{
                                required:'Company Name is required',
                                pattern: { value: /^[ء-ي\s]+$/, message: "Only Arabic Letters are Allowed" },
                                validate: {
                                  startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                                }
                            }}
                            render={({field,fieldState})=>(
                                <>
                                <Input
                                type='text'
                                value={field.value}
                                onChange={field.onChange}
                                className='w-95'
                                label='Company Arabic Name'
                                placeholder='Enter company name'
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.name_ar && <span className='text-danger'>{errors.name_ar.message}</span>}
                        </div>
                    </div>
                 </div>
                 <div className='Container mx-auto  justify-content-center'>
                    <div className='row gx-3 mb-3'>
                        <div className='col-6'>
                            <Controller
                            name='commercial_register'
                            control={control}
                            defaultValue={null}
                            rules={{
                                required: 'Commercial register is required.',
                                validate: (files) => {
                                  const file = files[0];
                                  return file && (file.type === 'image/jpeg' || file.type === 'image/png')
                                    || 'Only JPEG or PNG images are allowed.';
                                }
                              }}
                            render={({field,fieldState})=>(
                                <>
                                <Input
                                type='file'
                               
                                onChange={(e)=>field.onChange(e.target.files)}
                                className='w-95'
                                label='Commercial Register'
                                placeholder='Upload commercial register'
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.commercial_register && <span className='text-danger'>{errors.commercial_register.message}</span>}
                        </div>
                        <div className='col-6'>
                            <Controller
                            name='logo'
                            control={control}
                            rules={{
                                required:'logo is required',
                                validate: (files) => {
                                    const file = files[0];
                                    return file && (file.type === 'image/jpeg' || file.type === 'image/png')
                                      || 'Only JPEG or PNG images are allowed.';
                                  }
                            }}
                            render={({field,fieldState})=>(
                                <>
                                <Input
                                type='file'
                              
                                onChange={(e)=>field.onChange(e.target.files)}
                                className='w-95'
                                label='Logo'
                                placeholder='Upload logo '
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.logo && <span className='text-danger'>{errors.logo.message}</span>}
                        </div>
                    </div>
                 </div>
                 <div className='Container mx-auto  justify-content-center'>
                    <div className='row gx-3 mb-3'>
                        <div className='col-6'>
                            <Controller
                            name='start_of_finanicail_year'
                            control={control}
                       
                            render={({field,fieldState})=>(
                                <>
                                <Input
                                type='date'
                                value={field.value}
                                onChange={field.onChange}
                                className='w-95'
                                label='Start Financial Year'
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.start_of_finanicail_year && <span className='text-danger'>{errors.start_of_finanicail_year.message}</span>}
                        </div>
                        <div className='col-6'>
                            <Controller
                            name='end_of_financial_year'
                            control={control}
                            rules={{
                                required:'logo is required',
                               
                            }}
                            render={({field,fieldState})=>(
                                <>
                                <Input
                                type='date'
                                value={field.value}
                                onChange={field.onChange}
                                className='w-95'
                                label='End Financial Year'
                                placeholder='Upload logo '
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.end_of_financial_year && <span className='text-danger'>{errors.end_of_financial_year.message}</span>}
                        </div>
                    </div>
                 </div>

                 <ModalFooter
            onSubmit={handleSubmit(AddCompany)}
            onCancle={() => setIsOpen(false)}
            isSubmitting={isSubmitting}
            isCancelDisabled={isSubmitting || !isValid}
            isSaveDisabled={isSubmitting || !isValid}
            className={!isValid ? 'btn-invalid' : ''}
            className2={!isValid ? 'btn-invalid2' : ''}

          />
                </form>
            </CustomModal> 
            {isDeleteOpen && (
                <ConfirmDelete
                    isOpen={isDeleteOpen}
                    onCancel={handleDeleteCancelled}
                    onConfirm={handleDeletedConfirmed}
                    deleteMsg={'Country'}

                />
            )}
        </>




    )
}

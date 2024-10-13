import React, { useContext, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import Select from '../../Shared/Select/Select';
import Input from '../../Shared/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import axios from 'axios';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';

export default function Branches() {
    const [openDropdownId, setopenDropdownId] = useState(null);
    const{data:branches,refetch}=useDataFetch('branches');
    const{data:companies}=useDataFetch('companies');
    const[isSubmitting,setIsSubmitting]=useState(false);
    const { baseUrl } = useContext(AuthContext);


const[isOpen,setIsOpen]=useState(false);
  const Company =companies.map(company=>(
    {
        label:company?.companyEn?.name,
        value:company.id
    }
  )

  )

  const Branch =branches.map(branch=>(
    {
        label:branch?.branchEn?.name,
        value:branch.id
    }
  )

  )
console.log(branches);

   const{control,handleSubmit,formState:{errors,isValid},reset}=useForm()
    
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
visible:true,
id:"id",
label:'id',
            style: {
                minWidth: '100px',
            }

        },
        {
            name: "Arabic Branch Name",
            selector: (row) => row.branchAr?.name,
            sortable: true,
            visible:true,
            id:"Arabic Branch Name",
            label:'Arabic Branch Name'
        },
        {
            name: "English Branch Name",
            selector: (row) => row.branchEn?.name,
            sortable: true,
            visible:true,
            id:'English Branch Name',
            label:'English Branch Name'
        },
        {
            name: "Parent Branch",
            selector: (row) => row.parent_branch?row?.parent_branch?.id:'This is main Branch',
            sortable: true,
            visible:true,
            id:'Parent Branch',
            label:'Parent Branch'
        },
        {
            name: "Company",
            selector: (row) => row?.company?row?.company?.companyEn?.name:'No Company founded',
            sortable: true,
            visible:true,
            id:'Company',
            label:'Company'
        },
       
        



    ];

   
const AddBranch=(data)=>{
    console.log(data);
    
    setIsSubmitting(true)
    axios.post(`${baseUrl}/branches`,{
        name_ar: data.name_ar,
        name_en: data.name_en,
        parent_id: data.parent_id || null, 
        company_id: data.company_id
    }).then((response)=>{
        reset();
        setIsOpen(false);
        refetch();
    }).catch((error)=>{
        console.log(error);
        
    }).finally(()=>{
        setIsSubmitting(false)
    })
}
   

    return (
        <>


            <CustomPage
                title='Branches'
                ButtonName='Createbranches'
                ModalTitle='Create branches'
                target='#createbranches'
                columns={columns}
                data={[...branches]}
                buttonAction={()=>setIsOpen(true)}
            />
            <CustomModal id='createbranches' title='Branches' isOpen={isOpen} onCancel={()=>setIsOpen(false)} ModalWidth='modal-lg'>
                <form onSubmit={handleSubmit(AddBranch)}>
                    

                <div className='Container mx-auto  justify-content-center'>
                    <div className='row gx-3 mb-3'>
                        <div className='col-6'>
                            <Controller
                            name='name_en'
                            control={control}
                            rules={{
                                required:' English Branch Name is required',
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
                                label='Branch English Name'
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
                                required:'Arabic Branch Name is required',
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
                                label='Branch Arabic Name'
                                placeholder='Enter branch name'
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
                            name='company_id'
                            control={control}
                          
                            render={({field,fieldState})=>(
                                <>
                                <Select
                                type='text'
                                options={Company}
                                onChange={field.onChange}
                                className='w-95'
                            
                                placeholder='Select Company'
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.company_id && <span className='text-danger'>{errors.company_id.message}</span>}
                        </div>
                        <div className='col-6'>
                            <Controller
                            name='parent_id'
                            control={control}
                        
                            render={({field,fieldState})=>(
                                <>
                                <Select
                                type='text'
                           options={Branch}
                                onChange={field.onChange}
                                className='w-95'
                                label='Branch Arabic Name'
                                placeholder='Enter branch name'
                                error={fieldState.error ? fieldState.error.message : null}
                                
                                />
                                </>
                            )}
                            
                            />
                               {errors.parent_id && <span className='text-danger'>{errors.parent_id.message}</span>}
                        </div>
                    </div>
                 </div>
                     
                      



                 <ModalFooter
            onSubmit={handleSubmit(AddBranch)}
            onCancle={() => setIsOpen(false)}
            isSubmitting={isSubmitting}
            isCancelDisabled={isSubmitting || !isValid}
            isSaveDisabled={isSubmitting || !isValid}
            className={!isValid ? 'btn-invalid' : ''}
            className2={!isValid ? 'btn-invalid2' : ''}

          />
                    

                </form>
            </CustomModal> 



        </>
    )
}

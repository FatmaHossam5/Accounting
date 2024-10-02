import React, { useContext, useState } from 'react';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';
import Input from '../../Shared/Input/Input';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import axios from 'axios';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import { useForm } from 'react-hook-form';
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';

export default function Departments() {
    const [openDropdownId, setopenDropdownId] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletedDepartmentId, setdeletedDepartmentId] = useState(null);
    const { data: departments, refetch } = useDataFetch('departments');
    const { register, handleSubmit, formState: { errors,isValid }, reset } = useForm({
        defaultValues:{
            name_ar:'',
            name_en:''
        },
        mode:'onChange',
        reValidateMode:'onChange'
    });
    const { baseUrl } = useContext(AuthContext);

    const columns = [
        {
            name: " Id",
            selector: (department) => department.id,
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
                                <a className="dropdown-item mt-1" href="#" onClick={() => handleDeleteModal(row.id)}>
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
            name: "Arabic Name",
            selector: (department) => department?.DepartmentAr?.name,
            sortable: true,
        },
        {
            name: "English Name",
            selector: (department) => department?.DepartmentEn?.name,
            sortable: true,
        },



    ];




    const closeModal = () => setIsOpen(false);
    const handleCancle = () => closeModal();
    const handleDeleteCancelled = () => setIsDeleteOpen(false);
    {/*Add Country */ }
    const AddDepartment = (data) => {
        setIsSubmitting(true)
        const formData = new FormData();
        formData.append('name_ar', data.name_ar);
        formData.append('name_en', data.name_en);

        axios.post(`${baseUrl}/departments`, formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                reset();
                closeModal();
                refetch();
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {
                setIsSubmitting(false)
            })
    };

    {/*Open Delete Modal */ }
    const handleDeleteModal = (id) => {
        setdeletedDepartmentId(id)
        setIsDeleteOpen(true)

    };

    {/*Calling Delete APi */ }
    const DeleteDepartment = (id) => {
        axios.delete(`${baseUrl}/departments/${id}`).then(() => {
            refetch();
        }).catch((error) => {
            console.log(error);
        })
    };

    {/* Deleted Function  */ }
    const handleDeletedConfirmed = () => {
        if (deletedDepartmentId) {
            DeleteDepartment(deletedDepartmentId)
            setopenDropdownId(null)
        }
        setIsDeleteOpen(false)
    };


    return (
        <>

            <CustomPage
                title='Department'
                ButtonName='Create Department'
                ModalTitle='Create Department'
                target='#createdepartments'
                buttonAction={() => setIsOpen(true)}
                columns={columns}
                data={departments}
            />
            <CustomModal id='createdepartments' title='Create New Department' isOpen={isOpen} className='modal-lg' onCancel={handleCancle} >
                <form onSubmit={handleSubmit(AddDepartment)} >

                 
                        <div className="row gx-3">

                            <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                                <Input type='text' label='Arabic Department Name' placeholder='Enter Arabic Department Name ' className="px-form-input w-100 m-auto"
                                    {...register('name_ar', {
                                        required: 'Arabic Name is Required',
                                        pattern: { value: /^[ء-ي\s]+$/, message: 'Only Arabic letters are allowed' },
                                        validate: {
                                            startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                                        }
                                    })} />
                                {errors.name_ar && <p className="text-danger">{errors.name_ar.message}</p>}
                            </div>
                            <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                                <Input type='text' label='English Department Name' placeholder='Enter English Department Name ' className="px-form-input w-100 m-auto"
                                    {...register('name_en', {
                                        required: 'English Name is Required',
                                        pattern: { value: /^[A-Za-z]+$/, message: 'Only English letters are allowed' },
                                        validate: {
                                            startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                                        }
                                    })} />
                                {errors.name_en && <p className="text-danger">{errors.name_en.message}</p>}
                            </div>

                        </div>
                   
                    <ModalFooter onCancle={handleCancle}
                        onSubmit={handleSubmit(AddDepartment)}
                        isSubmitting={isSubmitting}
                        isCancelDisabled={isSubmitting||!isValid}
                        isSaveDisabled={isSubmitting||!isValid}
                        className={!isValid?'btn-invalid':''}
                        className2={!isValid?'btn-invalid2':''}

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

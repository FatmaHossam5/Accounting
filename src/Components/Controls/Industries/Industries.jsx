import React, { useContext, useState } from 'react';

import CustomPage from '../../Shared/CustomPage/CustomPage';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import Input from '../../Shared/Input/Input';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';

export default function Industries() {
    const [openDropdownId, setopenDropdownId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { data: industries, refetch } = useDataFetch('industries');
    const { register, handleSubmit, formState: { errors,isValid }, reset } = useForm({
        defaultValues: {
            name_ar: '',
            name_en: ''
        },
        mode:'onChange',
        reValidateMode:'onChange'


    });
    const { baseUrl } = useContext(AuthContext);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletedIndustryId, setDeletedIndustryId] = useState(null);
    const columns = [
        {
            name: " Id",
            selector: (row) => row.id,
            sortable: true,
            visible:true,
            id:'id',
            label:'id',
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
            name: "Arabic Indusrty Name",
            selector: (row) => row?.industryAr?.name
            ,
            sortable: true,
            visible:true,
            id:'Arabic Indusrty Name',
            label:'Arabic Indusrty Name',
        },
        {
            name: "English Indusrty Name",
            selector: (row) => row?.industryEn?.name
            ,
            sortable: true,
            visible:true,
            id:'English Indusrty Name',
            label:'English Indusrty Name',
        },



    ];
    const handleDeleteCancelled = () => setIsDeleteOpen(false);

    {/*Add Industry */ }
    const AddIndustry = (data) => {
        setIsSubmitting(true)
        axios.post(`${baseUrl}/industries`, data).then(() => {
            reset();
            setIsOpen(false);
            refetch()
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsSubmitting(false)
        })
    }

    {/*Open Delete Modal */ }
    const handleDeleteModal = (id) => {
        setDeletedIndustryId(id)
        setIsDeleteOpen(true)
    }

    {/*Calling Delete APi */ }
    const DeleteIndustry = (id) => {
        axios.delete(`${baseUrl}/industries/${id}`).then((response) => {
            refetch()
        }).catch((error) => {
            console.log(error);
        })
    }
    {/* Deleted Function  */ }
    const handleDeletedConfirmed = () => {
        if (deletedIndustryId) {
            DeleteIndustry(deletedIndustryId)
            setopenDropdownId(null)
        }
        setIsDeleteOpen(false)
    }
    return (
        <>
            <CustomPage
                title='Industry'
                ButtonName='Create Industries'
                ModalTitle='Create Industries'
                target='#createindustries'
                buttonAction={() => setIsOpen(true)}
                columns={columns}
                data={industries}
            />
            <CustomModal
                id='createindustries'
                title='Industry'
                className='modal-lg'
                isOpen={isOpen}
                onCancel={() => setIsOpen(false)}
            >
                <form onSubmit={handleSubmit(AddIndustry)} >
                    <div className="row gx-3">
                        <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                            <Input type='text' label='Arabic Industry Name' placeholder='Enter Arabic Industry Name ' className="px-form-input w-100 m-auto"
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
                            <Input type='text' label='English Industry Name' placeholder='Enter English Industry Name ' className="px-form-input w-100 m-auto"
                                {...register('name_en', {
                                    required: 'English Name is Required',
                                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English letters are allowed' },
                                    validate: {
                                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                                    }
                                })} />
                            {errors.name_en && <p className="text-danger">{errors.name_en.message}</p>}
                        </div>
                    </div>
                    <ModalFooter
                        onCancle={() => setIsOpen(false)}
                        onSubmit={handleSubmit(AddIndustry)}
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
                    deleteMsg='Industry'

                />
            )}
        </>
    )
}

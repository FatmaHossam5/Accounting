import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../Helpers/Context/AuthContextProvider'
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch'
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete'
import CustomModal from '../../Shared/CustomModal/CustomModal'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import Input from '../../Shared/Input/Input'
import ModalFooter from '../../Shared/ModalFooter/ModalFooter'
export default function Countries() {
    const [openDropdownId, setopenDropdownId] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletedCountryId, setDeletedCountryId] = useState(null);
    const { data: countries, refetch } = useDataFetch('countries');
    const { register, handleSubmit, formState: { errors,isValid }, reset } = useForm({
        mode:'onChange',
        reValidateMode: 'onChange'
    });
    const { baseUrl } = useContext(AuthContext);

    const columns = [
        {
            name: " Id",
            selector: (country) => country.id,
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
            selector: (country) => country?.countryAr?.name,
            sortable: true,
        },
        {
            name: "English Name",
            selector: (country) => country?.countryEn?.name,
            sortable: true,
        },



    ];




    const closeModal = () => setIsOpen(false);
    const handleCancle = () => closeModal();
    const handleDeleteCancelled = () => setIsDeleteOpen(false);
    {/*Add Country */ }
    const AddCountry = (data) => {
        setIsSubmitting(true)
        const formData = new FormData();
        formData.append('name_ar', data.name_ar);
        formData.append('name_en', data.name_en);

        axios.post(`${baseUrl}/countries`, formData, {
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
        setDeletedCountryId(id)
        setIsDeleteOpen(true)

    };

    {/*Calling Delete APi */ }
    const DeleteCountry = (id) => {
        axios.delete(`${baseUrl}/countries/${id}`).then(() => {
            refetch();
        }).catch((error) => {
            console.log(error);
        })
    };

    {/* Deleted Function  */ }
    const handleDeletedConfirmed = () => {
        if (deletedCountryId) {
            DeleteCountry(deletedCountryId)
            setopenDropdownId(null)
        }
        setIsDeleteOpen(false)
    };


    return (
        <>

            <CustomPage
                title='countries'
                ButtonName='Create Countries'
                ModalTitle='Create countries'
                target='#createcountries'
                buttonAction={() => setIsOpen(true)}
                columns={columns}
                data={countries}
            />
            <CustomModal id='createcountries' title='Create New Country' isOpen={isOpen} className='modal-lg' onCancel={handleCancle} headerPadding='custom' >
                <form onSubmit={handleSubmit(AddCountry)} >

                        <div className=" row gx-3">

                            <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                                <Input type='text' label='Arabic Country Name' placeholder='Enter Arabic Country Name ' className="px-form-input w-100 m-auto"
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
                                <Input type='text' label='English Country Name' placeholder='Enter English Country Name ' className="px-form-input w-100 m-auto"
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
                    <ModalFooter onCancle={handleCancle}
                        onSubmit={handleSubmit(AddCountry)}
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

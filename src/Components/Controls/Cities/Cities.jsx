import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';
import useDataFetch from '../../Helpers/CustomFunction/useDataFetch';
import ConfirmDelete from '../../Shared/ConfirmDelete/ConfirmDelete';
import CustomModal from '../../Shared/CustomModal/CustomModal';
import CustomPage from '../../Shared/CustomPage/CustomPage';
import Dropdown from '../../Shared/Dropdown/Dropdown';
import Input from '../../Shared/Input/Input';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import Select from '../../Shared/Select/Select';

export default function Cities() {
  const [isOpen, setIsOpen] = useState(false);
  const [governorates, setGovernarates] = useState([])
  const [openDropdownId, setopenDropdownId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deletedCityId, setDeletedCityId] = useState(null);
  const { control, handleSubmit, formState: { errors,isValid }, reset } = useForm({
    mode:'onChange',
    reValidateMode:'onChange',
    defaultValues: {
      name_ar: '',
      name_en: '',
      governorate_id: null
    }
  });
  const { baseUrl } = useContext(AuthContext);
  const { data: cities, refetch } = useDataFetch('cities');
  const columns = [

    {
      name: " Id",
      selector: (city) => city.id,
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

  const handleCancle = () => setIsOpen(false);
  const handleDeleteCancelled = () => setIsDeleteOpen(false);

  {/*Get All Governarates */ }
  const getAllGovernarates = () => {
    axios.get(`${baseUrl}/governorates`).then((response) => {

      const selectedGovernarate = response.data.data.map(governorate => ({
        label: governorate.governorateEn.name,
        value: governorate.id
      }))

      setGovernarates(selectedGovernarate)

    }).catch((error) => {
      console.log(error);

    }
    )
  }

  {/*Add City */ }
  const AddCity = (data) => {
    setIsSubmitting(true)
    axios.post(`${baseUrl}/cities`, data).then(() => {
      reset();
      handleCancle();
      refetch();
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setIsSubmitting(false)
    })
  }

  {/*Open Delete Modal */ }
  const handleDeleteModal = (id) => {
    setDeletedCityId(id)
    setIsDeleteOpen(true)
  }
  {/*Calling Delete APi */ }
  const DeleteCity = (id) => {
    axios.delete(`${baseUrl}/cities/${id}`).then((response) => {
      refetch();
    }).catch((error) => {
      console.log(error);

    })
  }

  {/* Deleted Function  */ }
  const handleDeletedConfirmed = () => {
    if (deletedCityId) {
      DeleteCity(deletedCityId);
      setopenDropdownId(null)
    }
    setIsDeleteOpen(false)
  }
  useEffect(() => {

    getAllGovernarates()
  }, [])

  return (
    <>

      <CustomPage
        data={cities}
        columns={columns}
        title={'Cities'}
        ButtonName={'Create City'}
        target={'#createcities'}
        buttonAction={() => setIsOpen(true)}
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
                rules={{ required: 'Governarate Selection is required' }}
                render={({ field }) => (
                  <Select
                    label={'select Governarate'}
                    options={governorates}
                    value={field.value}
                    onChange={(val) => field.onChange(val)}
                    id='GovernarateSelect'
                    option={'Governarate'}
                  />
                )}
              />
              {errors.governorate_id && <p className='text-danger'>{errors.governorate_id.message}</p>}
            </div>
            <div className="row gx-3">

              <div className="input-package my-3 pe-2 d-flex flex-column col-6">
                <Controller
                  name='name_ar'
                  control={control}
                  rules={{
                    required: 'Arabic Name is Required',
                    pattern: { value: /^[ء-ي\s]+$/, message: 'Only Arabic letters are allowed' },
                    validate: {
                      startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                    }
                  }}
                  render={({ field, fieldState }) => (
                    <Input type='text' label='Arabic City Name'
                      placeholder='Enter Arabic City Name '
                      className="px-form-input w-100 m-auto"
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error ? fieldState.error.message : null}
                    />
                  )}


                />
                {errors.name_ar && <p className='text-danger'>{errors.name_ar.message}</p>}

              </div>
              <div className="input-package my-3 pe-2 d-flex flex-column col-6">

                <Controller
                  name='name_en'
                  control={control}
                  rules={{
                    required: 'English Name is Required', pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                    validate: {
                      startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                    }
                  }}
                  render={({ field, fieldState }) => (
                    <Input type='text' label='English City Name'
                      placeholder='Enter English City Name '
                      className="px-form-input w-100 m-auto"
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error ? fieldState.error.message : null}
                    />
                  )}


                />
                {errors.name_en && <p className='text-danger'>{errors.name_en.message}</p>}
              </div>

            </div>
          </div>
          <ModalFooter
            onCancle={handleCancle}
            onSubmit={handleSubmit(AddCity)}
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
          deleteMsg='City'


        />
      )}
    </>

  )
}

import React, { useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import CustomModal from '../../Shared/CustomModal/CustomModal';
import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import { Controller, useForm } from 'react-hook-form';

export default function Categories() {
    const [openDropdownId, setopenDropdownId] = useState(null);
    const[isOpen,setIsOpen]=useState(false);
    const{handleSubmit,formState: { errors,isValid,isSubmitting },control,reset,register}=useForm({ mode:'onChange'});
    const[isSubCategory,setIsSubCategory]=useState(false)
    const columns = [
        {
            name: " Id",
            selector: (row) => { row.id },
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

            style: {
                minWidth: '100px',
            }

        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Parent",
            selector: (row) => row.parent,
            sortable: true,
        },
      



    ];

    const data = [
        {
            id: 1,
            name: 'category 1',
            parent: "Pixi",
           
        },

        {
            id: 2,
            name: 'category 2',
            parent: "Pixi",
          
        },
        {
            id: 3,
            name: 'category 3',
            parent: "Pixi",
       
        },

    ];

const handleReset=()=>{
    reset();
    setIsSubCategory(false)
}

    const handleClose = () => setIsOpen(false)
const AddCategory=()=>{

}
   
  return (
    <>
              <CustomPage
                title='Category'
                ButtonName='Create Category'
                ModalTitle='Create Category'
                target='#createcategory'
                columns={columns}
                data={data}
                buttonAction={() => setIsOpen(true)}

            />
            <CustomModal id='createcategory' title='Create New Category' onCancel={handleClose} className='w-40' isOpen={isOpen}>
                <form action>
                   
                <div className="form-inputs d-flex w-100  mt-1">
                {/*Company Name En. */}
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Controller
                    name="company_name_en"
                    control={control}
                    rules={{
                      required: 'English Name is required',
                      pattern: { value: /^[A-Za-z\s]+$/, message: 'Only English Letters are allowed' },
                      validate: {
                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start With a Number'
                      }
                    }}
                    render={({ field, fieldState }) => (
                      <Input
                        type='text'
                        id='company_name_en'
                        label='Company English Name'
                        placeholder='Enter company name '
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error ? fieldState.error.message : null}
                      />
                    )}

                  />
{errors.company_name_en && <span className="text-danger">{errors.company_name_en.message}</span>}

                </div>
                {/*Company Name Ar. */}
                <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                  <Controller
                    name="company_name_ar"
                    control={control}
                    rules={{
                      required: "Arabic Name is required",
                      pattern: { value: /^[ء-ي\s]+$/, message: 'Only Arabic letters are allowed' },
                      validate: {
                        startsWithNoNumber: value => !/^\d/.test(value) || 'Cannot start with a number'
                      }
                    }}
                    render={({ field, fieldState }) => (

                      <Input
                        type='text'
                        id='company_name_ar'
                        label='Company Arabic Name'
                        placeholder='Enter company name'
                        className="px-form-input w-100 m-auto"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error ? fieldState.error.message : null}
                      />

                    )}
                  />
                  {errors.company_name_ar && <span className="text-danger">{errors.company_name_ar.message}</span>}
                </div>
              </div>
              <div>
          <label>
            <input
              type="checkbox"
              {...register("isSubCategory")}
              checked={isSubCategory}
              onChange={(e) => setIsSubCategory(e.target.checked)}
            />
            Is Sub Category
          </label>
        </div>
        {isSubCategory&&(
            <>
              <div className="input-package my-3  d-flex flex-column w-70 m-auto">
                                <Select label='Categories'
                                    htmlFor='Categories'
                                    name='Categories'
                                    id="Categories"
                                    type="text"
                                    className="px-login-input w-100 "
                                    options={[
                                        { value: '', label: '...' },
                                        { value: 'category1', label: 'category1' },
                                        { value: 'category2', label: 'category2' },
                                        { value: 'category3', label: 'category3' },

                                     


                                    ]} />
                            </div>
            </>
        )}
                          
                     
                          
                     
                            <ModalFooter
            onSubmit={handleSubmit(AddCategory)}
             onCancle={handleReset}
             cancleText='Clear'
              isSubmitting={isSubmitting}
              isCancelDisabled={!isValid}
              isSaveDisabled={!isValid}
            />




                   
                </form>
            </CustomModal>
    
    </>
  )
}

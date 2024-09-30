import React, { useContext, useEffect, useState } from 'react'
import CustomPage from '../../Shared/CustomPage/CustomPage'
import Dropdown from '../../Shared/Dropdown/Dropdown'
import CustomModal from '../../Shared/CustomModal/CustomModal';
import Input from '../../Shared/Input/Input';
import Select from '../../Shared/Select/Select';
import ModalFooter from '../../Shared/ModalFooter/ModalFooter';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../Helpers/Context/AuthContextProvider';

export default function Categories() {
  const [openDropdownId, setopenDropdownId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, formState: { errors, isValid, isSubmitting }, control, reset, register } = useForm({ mode: 'onChange' });
  const [isSubCategory, setIsSubCategory] = useState(false);
  const { baseUrl } = useContext(AuthContext);
  const [category, setCategory] = useState([]);

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

      style: {
        minWidth: '100px',
      }

    },
   
 {
  name:'Category Name',
  selector:(row)=>row.categoryEn?.name,
  cell:(row)=>(
    <div>
     {`${'-'.repeat(row.level)} ${row.categoryEn?.name}`}
    </div>
  )
 },
 {
  name:"Arabic Name",
  selector:(row)=>row.categoryAr?.name,
 }
    
  ];
// this  function to transform flat category to tree structure
  const buildCategoryTree=(data)=>{
    const categoryMap={};
    const Tree =[];
//creat a map of categories by id
    data.forEach((item)=>{
      categoryMap[item.id]={...item,subcategories:[]}
    })

    data.forEach((item)=>{
      if(item.parent===null){
        Tree.push(categoryMap[item.id])
      }else{
        const parentCategory=categoryMap[item.parent?.id]
        if(parentCategory){
          parentCategory.subcategories.push(categoryMap[item.id])
        }
      }
    });
    return Tree;
  };

  const flattenTree =(categories)=>{
    const flatten =(category,level=0)=>{
      let flatCategories=[{...category,level}];
      if(category.subcategories && category.subcategories.length > 0){
        category.subcategories.forEach(subcategory=>{
flatCategories=flatCategories.concat(flatten(subcategory,level+1))
        })
       
      }
      return flatCategories
    }
  return categories.reduce((acc,curr)=>{
    return acc.concat(flatten(curr))
  },[])
  }
  const parent = category.map((cat => ({
    value:  cat?.id,
    label: cat?.parent?.categoryEn?.name?`${cat?.parent?.categoryEn?.name}>>${cat?.categoryEn?.name}`:cat?.categoryEn?.name
  })))
  // const groupedCategory=category.reduce((acc,curr)=>{
  //   if (!curr.parent){
  //     acc.push({
  //       ...curr,subcategories:[]
  //     });
  //   }else{
  //     const parentIndex=acc.findIndex(cat=>cat.id===curr?.parent?.id);
  //     if(parentIndex>-1){
  //       acc[parentIndex].subcategories.push(curr)
  //     }
  //   }
  //   return acc
  // },[])
  const handleReset = () => {
    reset();
    setIsSubCategory(false)
  }

  const handleClose = () => setIsOpen(false);

  const AddCategory = (data) => {
    const categoryData=isSubCategory?data:{...data,parent_id:null}
    axios.post(`${baseUrl}/categories`, data).then((response) => {
      console.log(response);

    }).catch((error) => {
      console.log(error);

    })
  }
  const getAllCategories = () => {
    axios.get(`${baseUrl}/categories`).then((response) => {
      console.log(response?.data?.data);
      const categories=response?.data?.data ||[];
      setCategory(flattenTree(buildCategoryTree(categories)))
     
    
    }).catch((error) => {
      console.log(error);

    })

  }






  useEffect(() => {
    getAllCategories();

  }, [])
  return (
    <>
      <CustomPage
        title='Category'
        ButtonName='Create Category'
        ModalTitle='Create Category'
        target='#createcategory'
        columns={columns}
        data={category}
        buttonAction={() => setIsOpen(true)}
        
        
      />
      <CustomModal id='createcategory' title='Create New Category' onCancel={handleClose} className='w-40' isOpen={isOpen}>
        <form onSubmit={handleSubmit(AddCategory)}>
          <div className="form-inputs d-flex w-100  mt-1">
            {/*Company Name En. */}
            <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
              <Controller
                name="name_en"
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
                    id='category_name_en'
                    label='category English Name'
                    placeholder='Enter category name '
                    className="px-form-input w-100 m-auto"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}

              />
              {errors.name_en && <span className="text-danger">{errors.name_en.message}</span>}
            </div>
            {/*Company Name Ar. */}
            <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
              <Controller
                name="name_ar"
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
                    id='catgory_name_ar'
                    label='Category Arabic Name'
                    placeholder='Enter Category name'
                    className="px-form-input w-100 m-auto"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}
              />
              {errors.name_ar && <span className="text-danger">{errors.name_ar.message}</span>}
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
          {isSubCategory && (
            <>
              <div className="input-package my-3  d-flex flex-column w-70 m-auto">
                <Controller
                  name='parent_id'
                  control={control}
                  render={({ field })=>(
                    <Select label='Categories'
                    htmlFor='Categories'
                    name='Categories'
                    id="Categories"
                    type="text"
                    className="px-login-input w-100 "
                    options={parent}
                    option='parent'
                    value={field.value}
                    onChange={field.onChange}
                  />)
               

                  }

                />

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

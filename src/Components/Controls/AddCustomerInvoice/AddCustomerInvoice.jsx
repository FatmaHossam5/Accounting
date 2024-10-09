import React, { useContext } from "react";
import AddInvoice from "../../Shared/AddInvoice/AddInvoice";
import { useFieldArray, useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../Helpers/Context/AuthContextProvider";
import useDataFetch from "../../Helpers/CustomFunction/useDataFetch";

export default function AddCustomerInvoice() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      customer_id: '',
      due_date: '',
      items: [{ product_id: '', count: '', price: '', tax: '' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items' // This is the key for your array
  });
  const{baseUrl}=useContext(AuthContext);
  const onSubmit = (data) => {
   axios.post(`${baseUrl}/customer-product-invoices`,data)
   .then((res)=>console.log(res)
   ).catch((error)=>{
    console.log(error);
    
   })
    // Here you would send your data to the backend
  };
  const {data:customers}=useDataFetch('customers')
  const {data:products}=useDataFetch('products')

  return (
    <>
      {/* <AddInvoice
        pageTitle="Create Customer’s Invoice"
        subTitle="Customer Details"
        Id='createCustomerInvoice'
        InvoiceType='Customer Invoice'
        mainTitle= {`customer's Invoice`}
        Name='Customer'
      /> */}

{/* <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Customer ID</label>
        <input {...register('customer_id')} type="text" />
      </div>

      <div>
        <label>Due Date</label>
        <input {...register('due_date')} type="date" />
      </div>

      <h3>Items</h3>

      {fields.map((field, index) => (
        <div key={field.id}>
          <label>Product ID</label>
          <input
            {...register(`items.${index}.product_id`)}
            type="text"
          />

          <label>Count</label>
          <input
            {...register(`items.${index}.count`)}
            type="number"
          />

          <label>Price</label>
          <input
            {...register(`items.${index}.price`)}
            type="number"
            step="0.01"
          />

          <label>Tax</label>
          <input
            {...register(`items.${index}.tax`)}
            type="number"
            step="0.01"
          />

          <button type="button" onClick={() => remove(index)}>Remove Item</button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ product_id: '', count: '', price: '', tax: '' })}
      >
        Add Item
      </button>

      <button type="submit">Submit</button>
    </form> */}

<form onSubmit={handleSubmit(onSubmit)}>
      {/* Customer Select */}
      <div>
        <label>Customer</label>
        <select {...register('customer_id')}>
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.customerEn?.contact_name}
            </option>
          ))}
        </select>
      </div>
      {/* Due Date */}
      <div>
        <label>Due Date</label>
        <input {...register('due_date')} type="date" />
      </div>
      <h3>Items</h3>
      {fields.map((field, index) => (
        <div key={field.id}>
          {/* Product Select */}
          {/* <label>Product</label>
          <select {...register(`items.${index}.product_id`)}>
            <option value="">Select Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select> */}
           <label>Product ID</label>
          <input
            {...register(`items.${index}.product_id`)}
            type="text"
          />
          <label>Count</label>
          <input {...register(`items.${index}.count`)} type="number" />
          <label>Price</label>
          <input {...register(`items.${index}.price`)} type="number" step="0.01" />
          <label>Tax</label>
          <input {...register(`items.${index}.tax`)} type="number" step="0.01" />
          <button type="button" onClick={() => remove(index)}>Remove Item</button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ product_id: '', count: '', price: '', tax: '' })}
      >
        Add Item
      </button>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

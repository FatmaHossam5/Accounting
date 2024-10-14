import React, { useContext, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../Helpers/Context/AuthContextProvider";
import useDataFetch from "../../Helpers/CustomFunction/useDataFetch";

export default function AddCustomerInvoice() {
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({
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

  const { baseUrl } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [showTotalCost, setShowTotalCost] = useState(false);

  const addItem = () => {
    const newItem = { product_id: "", count: "", price: "", tax: "" };
    setItems([...items, newItem]);
    setShowTotalCost(true);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (updatedItems.length === 0) {
      setShowTotalCost(false);
    }
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const calculateTotalCost = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '')) || 0;
      const count = parseInt(item.count, 10) || 0;
      const tax = parseFloat(item.tax.replace('$', '')) || 0;
      return total + (price * count) + tax; // Add tax to the total
    }, 0).toFixed(2);
  };

  const onSubmit = (data) => {
    // Combine form data with items
    const invoiceData = { ...data, items };
    axios.post(`${baseUrl}/customer-product-invoices`, invoiceData)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  const { data: customers } = useDataFetch('customers');
  const { data: products } = useDataFetch('products');

  return (
    <div className="px-content mb-auto mt-3">
      <div className="px-card">
        <div className="container-fluid">
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-wrap">
            <div className="side w-xxl-100 w-100 p-4">
              <div className="section">
                <h4>Invoice Details</h4>
                {/* Customer Select */}
                <div className="form-inputs d-flex w-100">
                  <div className="input-package mt-4 pe-2 d-flex flex-column w-50">
                    <label className="mb-2" htmlFor="customer">
                      Customer
                    </label>
                    <select {...register('customer_id', { required: true })} className="px-login-input w-100">
                      <option value="">Select Customer</option>
                      {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                          {customer.customerEn?.contact_name}
                        </option>
                      ))}
                    </select>
                    {errors.customer_id && <span className="error">Customer is required</span>}
                  </div>
                  {/* Due Date */}
                  <div className="input-package mt-4 ps-2 d-flex flex-column w-50">
                    <label htmlFor="due_date">Due Date</label>
                    <input
                      {...register('due_date', { required: true })}
                      type="date"
                      className="px-form-input w-100"
                    />
                    {errors.due_date && <span className="error">Due date is required</span>}
                  </div>
                </div>
              </div>

              <h3>Items</h3>
              <div className="section">
                <button
                  type="button"
                  className="px-btn px-blue-btn add-item-btn"
                  onClick={addItem}
                >
                  Add Item
                </button>
                {items.map((item, index) => (
                  <div key={index} className="form-inputs w-100 d-flex justify-content-between flex-wrap item-details-container">
                    <div className="new-item w-100 d-flex flex-wrap align-items-center justify-content-between">
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label htmlFor={`product_id-${index}`}>Product</label>
                        <select
                          id={`product_id-${index}`}
                          className="px-login-input w-100"
                          {...register(`items.${index}.product_id`, { required: true })} // Register product_id
                          value={item.product_id}
                          onChange={(e) => handleItemChange(index, 'product_id', e.target.value)}
                        >
                          <option value="">Select Product</option>
                          {products.map((product) => (
                            <option key={product.id} value={product.id}>
                              {product.productEn?.name}
                            </option>
                          ))}
                        </select>
                        {errors.items?.[index]?.product_id && <span className="error">Product is required</span>}
                      </div>
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label htmlFor={`count-${index}`}>Count</label>
                        <input
                          type="number"
                          id={`count-${index}`}
                          className="px-form-input mt-2 w-100"
                          value={item.count}
                          {...register(`items.${index}.count`, { required: true })} // Register count
                          onChange={(e) => handleItemChange(index, 'count', e.target.value)}
                        />
                        {errors.items?.[index]?.count && <span className="error">Count is required</span>}
                      </div>
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label htmlFor={`price-${index}`}>Price</label>
                        <input
                          type="number"
                          id={`price-${index}`}
                          className="px-form-input mt-2 w-100"
                          value={item.price}
                          {...register(`items.${index}.price`, { required: true })} // Register price
                          onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                        />
                        {errors.items?.[index]?.price && <span className="error">Price is required</span>}
                      </div>
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label htmlFor={`tax-${index}`}>Tax</label>
                        <input
                          type="number"
                          id={`tax-${index}`}
                          className="px-form-input mt-2 w-100"
                          value={item.tax}
                          {...register(`items.${index}.tax`)} // Register tax (optional)
                          onChange={(e) => handleItemChange(index, 'tax', e.target.value)}
                        />
                      </div>
                      <button
                        type="button"
                        className="px-btn px-minus-btn"
                        onClick={() => deleteItem(index)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))}
                {showTotalCost && (
                  <div className="px-dashed-card total-items-cost d-flex justify-content-between p-4 mt-4">
                    <div className="total-text">
                      <h5>Total Invoice</h5>
                    </div>
                    <div className="total-number">
                      <h5>{calculateTotalCost()} $</h5>
                    </div>
                  </div>
                )}
              </div>

              <div className="form-action d-flex justify-content-end mt-5">
                <button className="px-btn px-white-btn">Cancel</button>
                <button className="px-btn px-blue-btn ms-4">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

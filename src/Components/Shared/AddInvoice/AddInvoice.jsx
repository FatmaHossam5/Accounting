import React, { useState } from 'react';

export default function AddInvoice({ pageTitle, subTitle, labelName, htmlFor, optionName,mainTitle,Name }) {
  const [items, setItems] = useState([]);
  const [showTotalCost, setShowTotalCost] = useState(false);

  const addItem = () => {
    const newItem = { item: "", price: "", count: "" };
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
      return total + (price * count);
    }, 0).toFixed(2);
  };

  return (
    <div className="px-content mb-auto mt-3">
      <div className="px-card">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0">
              <div className="d-flex p-4 flex-wrap">
                <div className="breadcrumbs-list w-100 mb-3">
                  <ul className="d-flex">
                    <li className="breadcrumbs-item d-flex align-items-center">
                     {mainTitle}
                    </li>
                    <li className="breadcrumbs-item d-flex align-items-center active-breadcrumbs">
                      <span className="breadcrumbs-separetor ms-2">
                        <i className="fa-kit fa-right" />
                      </span>
                      Create {mainTitle}
                    </li>
                  </ul>
                </div>
                <div className="page-name">
                  <h3>{pageTitle}</h3>
                </div>
              </div>
              <form className="d-flex flex-wrap">
                <div className="side w-xxl-100 w-100 p-4">
                  <div className="section">
                    <h4>{subTitle}</h4>
                    <div className="form-inputs d-flex w-100">
                      <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                        <label className="mb-2" htmlFor={htmlFor}>
                          {labelName}
                        </label>
                        <select
                          name="customer"
                          id="customer"
                          className="px-login-input w-100 m-auto"
                        >
                          <option value>{optionName}</option>
                          <option value="ahmed">ahmed</option>
                          <option value="johan">johan</option>
                          <option value="samy">samy</option>
                        </select>
                      </div>
                      {/* <div className="input-package mt-3 ps-2 d-flex flex-column w-50">
                        <label className="mb-2" htmlFor="cost-center">
                          Cost Center
                        </label>
                        <select
                          name="cost-center"
                          id="cost-center"
                          className="px-login-input w-100 m-auto"
                        >
                          <option value>General cost center</option>
                        </select>
                      </div> */}
                    </div>
                    {/* <div className="input-package mt-3 d-flex flex-column w-100">
                      <label htmlFor="address">{Name} Address</label>
                      <textarea
                        name="address"
                        id="address"
                        className="px-text-area"
                        placeholder="Enter supplier address"
                      />
                    </div> */}
                  </div>
                  <div className="separetor my-4" />
                  <div className="section">
                    <div className="d-flex mt-4">
                      <h4>{Name} Items Details</h4>
                      <button
                        type="button"
                        className="px-btn px-blue-btn add-item-btn ms-auto"
                        onClick={addItem}
                      >
                        Add Item
                      </button>
                    </div>
                    
                    <div className="form-inputs w-100 d-flex justify-content-between flex-wrap item-details-container">
                         <div className="new-item w-100 d-flex flex-wrap align-items-center justify-content-between">
                           <div className="d-flex justify-content-between w-100">
                            <h6 className="my-20">Item Name</h6>
                          </div>
                          <div className="input-package mt-4 d-flex flex-column w-30">
                            <label htmlFor="item">Item</label>
                             <select name="item" id="item" className="px-login-input w-100">
                              <option value="item1">item1</option>
                              <option value="item2">item2</option>
                              <option value="item3">item3</option>
                             </select>
                           </div>
                         <div className="input-package mt-4 d-flex flex-column w-30">
                            <label htmlFor="item-price">Price</label>
                           <select name="item-price" id="item-price" className="px-login-input w-100">
                               <option value="100$">100$</option>
                              <option value="200$">200$</option>
                              <option value="300$">300$</option>
                            </select>
                          </div>
                         <div className="input-package mt-4 d-flex flex-column w-30">
                            <label htmlFor="item-count">Item Count</label>
                             <input
                              type="text"
                              className="px-form-input mt-2 w-100"
                              placeholder="8"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>




                    <div className="form-inputs w-100 d-flex justify-content-between flex-wrap item-details-container">
                      {items.length > 0 && (
                        <div className="form-inputs w-100 d-flex justify-content-between flex-wrap item-details-container">
                          {items.map((item, index) => (
                            <div
                              key={index}
                              className="new-item w-100 d-flex flex-wrap align-items-center justify-content-between"
                            >
                              <div className="separetor my-2"></div>
                              <div className="d-flex justify-content-between w-100">
                                <h6 className="my-20">Item Name</h6>
                                <button
                                  type="button"
                                  className="px-btn px-minus-btn"
                                  onClick={() => deleteItem(index)}
                                >
                                 -
                                </button>
                              </div>
                              <div className="input-package mt-4 d-flex flex-column w-30">
                                <label htmlFor={`item-${index}`}>Item</label>
                                <select
                                  id={`item-${index}`}
                                  className="px-login-input w-100"
                                  value={item.item}
                                  onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                                >
                                  <option value="">Select item</option>
                                  <option value="item1">item1</option>
                                  <option value="item2">item2</option>
                                  <option value="item3">item3</option>
                                </select>
                              </div>
                              <div className="input-package mt-4 d-flex flex-column w-30">
                                <label htmlFor={`price-${index}`}>Price</label>
                                <select
                                  id={`price-${index}`}
                                  className="px-login-input w-100"
                                  value={item.price}
                                  onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                                >
                                  <option value="">Select price</option>
                                  <option value="100$">100$</option>
                                  <option value="200$">200$</option>
                                  <option value="300$">300$</option>
                                </select>
                              </div>
                              <div className="input-package mt-4 d-flex flex-column w-30">
                                <label htmlFor={`count-${index}`}>Item Count</label>
                                <input
                                  type="text"
                                  id={`count-${index}`}
                                  className="px-form-input mt-2 w-100"
                                  placeholder="8"
                                  value={item.count}
                                  onChange={(e) => handleItemChange(index, 'count', e.target.value)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
                  <div className="separetor my-4" />
                  <div className="section">
                    <h4>Invoice Details</h4>
                    <div className="form-inputs d-flex flex-wrap w-100">
                      <div className="input-package mt-4 pe-2 d-flex flex-column w-50">
                        <label htmlFor="datePicker">Invoice Due Date</label>
                        <div className="px-calender w-100">
                          <input
                            className="px-form-input w-100"
                            placeholder="YY/MM/DD"
                            id="datePicker"
                          />
                          <i className="fa-regular fa-calendar-days fa-xl px-calender-icon" />
                        </div>
                      </div>
                      {/* <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                        <label className="mb-2" htmlFor="currency">Currency</label>
                        <select
                          name="currency"
                          id="currency"
                          className="px-login-input w-100 m-auto"
                        >
                          <option value="">Select currency</option>
                          <option value="dollar">Dollar</option>
                          <option value="euro">Euro</option>
                          <option value="dinar">Dinar</option>
                        </select>
                      </div> */}
                      <div className="input-package mt-4 ps-2 d-flex flex-column w-50">
                        <label htmlFor="tax">Tax</label>
                        <input
                          type="text"
                          className="px-form-input w-100"
                          placeholder="Enter tax"
                          id="tax"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="separetor my-4" />
                  <div className="section">
                    <h4>Cost Details</h4>
                    <div className="px-dashed-card d-flex justify-content-between p-3">
                      <div className="total-text">
                        <h5>Total Invoice</h5>
                      </div>
                      <div className="total-number">
                        <h5>{calculateTotalCost()} $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="form-action d-flex justify-content-end mt-5">
                    <button className="px-btn px-white-btn">Cancel</button>
                    <button className="px-btn px-blue-btn ms-4">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

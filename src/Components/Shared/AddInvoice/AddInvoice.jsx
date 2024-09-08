import React, { useState } from 'react'


export default function AddInvoice({pageTitle,subTitle,labelName,htmlFor,optionName,InvoiceType}) {

const [items, setItems] = useState([{ item: '', price: 0, count: 0 }]);
const [total, setTotal] = useState(0);

const handleAddItem = () => {
  setItems([...items, { item: '', price: 0, count: 0 }]);
};

const handleRemoveItem = (id) => {
setItems(items.filter((item)=>item.id!== id))
};

const handleItemChange = (index, field, value) => {
  const newItems = items.map((item, i) => 
    i === index ? { ...item, [field]: value } : item
  );
  setItems(newItems);
  calculateTotal(newItems);
};

const calculateTotal = (items) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.count), 0);
  setTotal(total);
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
                    {InvoiceType}
                  </li>
                  <li className="breadcrumbs-item d-flex align-items-center active-breadcrumbs">
                    <span className="breadcrumbs-separetor ms-2">
                      <i className="fa-kit fa-right" />
                    </span>
                    {`Create ${InvoiceType}`}
                  </li>
                </ul>
              </div>
              <div className="page-name">
                <h3>{pageTitle}</h3>
              </div>
            </div>

            {/* start create customer invoice form */}
            <form action className="d-flex flex-wrap">
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
                    <div className="input-package mt-3 ps-2 d-flex flex-column w-50">
                      <label className="mb-2" htmlFor="cost-center">
                        cost center
                      </label>
                      <select
                        name="cost-center"
                        id="cost-center"
                        className="px-login-input w-100 m-auto"
                      >
                        <option value>General cost center</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-package mt-3 d-flex flex-column w-100">
                    <label htmlFor="companyIndustry">Supplier Address</label>
                    <textarea
                      name="address"
                      id="address"
                      className="px-text-area"
                      placeholder="Enter supplier address"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="separetor my-4" />
                <div className="section">
                  <div className="d-flex mt-4">
                    <h4>Supply Items Details</h4>
                    <button
                      type="button"
                      className="px-btn px-blue-btn add-item-btn ms-auto"
                      onClick={handleAddItem}
                    >
                      Add Item
                    </button>
                  </div>

                  {items.map((item, index) => (
                    <div key={item.id} className="form-inputs w-100 d-flex justify-content-between flex-wrap item-details-container">
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label>Item</label>
                        <div className="px-calender mt-2 w-100">
                          <select name="item" id="item" className="px-login-input w-100">
                            <option value="item1">item1</option>
                            <option value="item2">item2</option>
                            <option value="item3">item3</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label>Price</label>
                        <div className="px-calender mt-2 w-100">
                          <select name="item-price" id="item-price" className="px-login-input w-100">
                            <option value="100$">100$</option>
                            <option value="200$">200$</option>
                            <option value="300$">300$</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-package mt-4 d-flex flex-column w-30">
                        <label>Item Count</label>
                        <div className="px-calender w-100">
                          <input type="text" className="px-form-input mt-2 w-100" placeholder={8} />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="px-btn px-red-btn remove-item-btn ms-auto"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        -
                      </button>
                    </div>
                  ))}

                  {items.length > 0 && (
                    <div className="px-dashed-card total-items-cost justify-content-between p-4 mt-4">
                      <div className="total-text">
                        <h5>Total Invoice</h5>
                      </div>
                      <div className="total-number">
                        <h5>2150 $</h5>
                      </div>
                    </div>
                  )}
                </div>

                <div className="separetor my-4" />
                <div className="section">
                  <h4>Invoice Details</h4>
                  <div className="form-inputs d-flex flex-wrap w-100">
                    <div className="input-package mt-4 pe-2 d-flex flex-column w-50">
                      <label>Invoice due date</label>
                      <div className="px-calender w-100">
                        <input
                          className="px-form-input w-100"
                          placeholder="YY/MM/DD"
                          id="datePicker"
                        />
                        <i className="fa-regular fa-calendar-days fa-xl px-calender-icon" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="input-package mt-3 pe-2 d-flex flex-column w-50">
                      <label className="mb-2" htmlFor="customer">
                        Currency
                      </label>
                      <select
                        name="currency"
                        id="currency"
                        className="px-login-input w-100 m-auto"
                      >
                        <option value>Select currency</option>
                        <option value="dollar">Dollar</option>
                        <option value="euro">Euro</option>
                        <option value="dinar">Dinar</option>
                      </select>
                    </div>
                    <div className="input-package mt-4 ps-2 d-flex flex-column w-50">
                      <label>Tax</label>
                      <div className="px-calender w-100">
                        <input
                          type="text"
                          className="px-form-input w-100"
                          placeholder="Enter tax"
                        />
                      </div>
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
                      <h5>2150 $</h5>
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
  )
}

import React from 'react'
import Button from '../Button/Button'
import Table from '../Table/Table'
export default function CustomPage({ data, columns, title, ButtonName, ModalTitle, target, targetId, buttonAction }) {
  return (
    <>
        <div className="px-content mb-auto mt-3">
          <div className="px-card p-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 gx-0">
                  <div className="d-flex ">
                    <div className="page-name p-3 ">
                      <h4>{title}</h4>
                    </div>
                    <div className="card-head-btns  ms-auto   ">
                      <Button target={target} onClick={buttonAction} >
                        {ButtonName}
                      </Button>
                      {/* <Button target={target} onClick={buttonAction} >
                        {ButtonName}
                      </Button> */}
                    </div>
                  </div>
                  <div className="table-actions d-flex mb-4 ">
                    <div className="table-search w-50 ">
                      <input type="search" className="px-form-input w-100 ps-5" placeholder="search" />
                      <svg className="search-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.8055" cy="9.8055" r="7.49047" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <svg className="filter-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.56517 3C3.70108 3 3 3.71286 3 4.5904V5.52644C3 6.17647 3.24719 6.80158 3.68936 7.27177L8.5351 12.4243L8.53723 12.4211C9.47271 13.3788 9.99905 14.6734 9.99905 16.0233V20.5952C9.99905 20.9007 10.3187 21.0957 10.584 20.9516L13.3436 19.4479C13.7602 19.2204 14.0201 18.7784 14.0201 18.2984V16.0114C14.0201 14.6691 14.539 13.3799 15.466 12.4243L20.3117 7.27177C20.7528 6.80158 21 6.17647 21 5.52644V4.5904C21 3.71286 20.3 3 19.4359 3H4.56517Z" stroke="#939393" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="table-btns d-flex justify-content-end w-50">
                      <button className="px-btn px-gray-btn text-capitalize d-flex">
                        <div className="btn-icon w-10 me-2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1247_9410)">
                              <path d="M2.91667 20H1.25C0.560833 20 0 19.4392 0 18.75V1.25C0 0.560833 0.560833 0 1.25 0H2.91667C3.60583 0 4.16667 0.560833 4.16667 1.25V18.75C4.16667 19.4392 3.60583 20 2.91667 20ZM1.25 0.833333C1.13949 0.833333 1.03351 0.877232 0.955372 0.955372C0.877232 1.03351 0.833333 1.13949 0.833333 1.25V18.75C0.833333 18.8605 0.877232 18.9665 0.955372 19.0446C1.03351 19.1228 1.13949 19.1667 1.25 19.1667H2.91667C3.02717 19.1667 3.13315 19.1228 3.21129 19.0446C3.28943 18.9665 3.33333 18.8605 3.33333 18.75V1.25C3.33333 1.13949 3.28943 1.03351 3.21129 0.955372C3.13315 0.877232 3.02717 0.833333 2.91667 0.833333H1.25ZM18.75 20H17.0833C16.3942 20 15.8333 19.4392 15.8333 18.75V1.25C15.8333 0.560833 16.3942 0 17.0833 0H18.75C19.4392 0 20 0.560833 20 1.25V18.75C20 19.4392 19.4392 20 18.75 20ZM17.0833 0.833333C16.9728 0.833333 16.8668 0.877232 16.7887 0.955372C16.7106 1.03351 16.6667 1.13949 16.6667 1.25V18.75C16.6667 18.8605 16.7106 18.9665 16.7887 19.0446C16.8668 19.1228 16.9728 19.1667 17.0833 19.1667H18.75C18.8605 19.1667 18.9665 19.1228 19.0446 19.0446C19.1228 18.9665 19.1667 18.8605 19.1667 18.75V1.25C19.1667 1.13949 19.1228 1.03351 19.0446 0.955372C18.9665 0.877232 18.8605 0.833333 18.75 0.833333H17.0833ZM12.9167 20H7.08333C6.39417 20 5.83333 19.4392 5.83333 18.75V1.25C5.83333 0.560833 6.39417 0 7.08333 0H12.9167C13.6058 0 14.1667 0.560833 14.1667 1.25V18.75C14.1667 19.4392 13.6058 20 12.9167 20ZM7.08333 0.833333C6.97283 0.833333 6.86685 0.877232 6.7887 0.955372C6.71057 1.03351 6.66667 1.13949 6.66667 1.25V18.75C6.66667 18.8605 6.71057 18.9665 6.7887 19.0446C6.86685 19.1228 6.97283 19.1667 7.08333 19.1667H12.9167C13.0272 19.1667 13.1332 19.1228 13.2113 19.0446C13.2894 18.9665 13.3333 18.8605 13.3333 18.75V1.25C13.3333 1.13949 13.2894 1.03351 13.2113 0.955372C13.1332 0.877232 13.0272 0.833333 12.9167 0.833333H7.08333Z" fill="#4B4F56" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1247_9410">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div> manage
                        columns <i className="fa-kit fa-down ms-2 mt-1" />
                      </button>
                      <button className="px-btn px-gray-btn text-capitalize d-flex align-items-center justify-content-center ms-3">
                        <div className="btn-icon w-20 pe-1">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.84833 7.48612H5.07083C3.375 7.48612 2 8.86112 2 10.557L2 14.6195C2 16.3145 3.375 17.6895 5.07083 17.6895H14.3458C16.0417 17.6895 17.4167 16.3145 17.4167 14.6195V10.5486C17.4167 8.85779 16.0458 7.48612 14.355 7.48612H13.5692" stroke="#4B4F56" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.70964 1.82521V11.8594" stroke="#4B4F56" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.27734 4.26562L9.70651 1.82562L12.1365 4.26562" stroke="#4B4F56" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div> export
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive px-table-container">
                    <Table columns={columns} data={data} selectableRows />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar({ collapsed, toggleSidebar }) {

    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    return (
        <>
            <div className={` col-3 ${collapsed ? 'w-5' : 'col-lg-2'}  d-none d-lg-block side-container position  `}>
                <div className={`side-collaps ${collapsed ? 'rotate-icon' : ''}`} onClick={toggleSidebar}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.61507 0.228874C6.76303 0.375278 6.84613 0.573735 6.84613 0.780654C6.84613 0.987572 6.76303 1.18603 6.61507 1.33243L1.90713 5.98612L6.61612 10.6398C6.75997 10.7871 6.83952 10.9844 6.83762 11.1891C6.83572 11.3939 6.75254 11.5897 6.60598 11.7344C6.45942 11.8791 6.26121 11.9611 6.05405 11.9628C5.84688 11.9645 5.64734 11.8857 5.49839 11.7434L0.231067 6.5379C0.0831072 6.3915 0 6.19304 0 5.98612C0 5.7792 0.0831072 5.58075 0.231067 5.43434L5.49839 0.228874C5.57177 0.156315 5.65889 0.0987554 5.75478 0.0594842C5.85067 0.0202131 5.95346 0 6.05726 0C6.16106 0 6.26384 0.0202131 6.35973 0.0594842C6.45562 0.0987554 6.54275 0.156315 6.61612 0.228874H6.61507Z" fill="#1877F2" />
                    </svg>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.61507 0.228874C6.76303 0.375278 6.84613 0.573735 6.84613 0.780654C6.84613 0.987572 6.76303 1.18603 6.61507 1.33243L1.90713 5.98612L6.61612 10.6398C6.75997 10.7871 6.83952 10.9844 6.83762 11.1891C6.83572 11.3939 6.75254 11.5897 6.60598 11.7344C6.45942 11.8791 6.26121 11.9611 6.05405 11.9628C5.84688 11.9645 5.64734 11.8857 5.49839 11.7434L0.231067 6.5379C0.0831072 6.3915 0 6.19304 0 5.98612C0 5.7792 0.0831072 5.58075 0.231067 5.43434L5.49839 0.228874C5.57177 0.156315 5.65889 0.0987554 5.75478 0.0594842C5.85067 0.0202131 5.95346 0 6.05726 0C6.16106 0 6.26384 0.0202131 6.35973 0.0594842C6.45562 0.0987554 6.54275 0.156315 6.61612 0.228874H6.61507Z" fill="#1877F2" />
                    </svg>
                </div>
                <aside className={`sidebar px-card ${collapsed ? 'w-75' : 'w-95'}  m-auto`}>
                    <div className={`logo text-center ps-3`}>
                        A<span className={`${collapsed ? 'd-none' : ''}`}>CC</span>
                    </div>
                    <div className={`side-links ps-1 ps-md-2 ps-lg-3 pe-1 pe-md-2 pe-lg-3`}>
                        <ul className="mt-3">
                            <li className="mb-5 ">
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link active-side-link  text-capitalize  pe-2'`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                <div className="d-flex pt-2 pb-2 justify-content-center align-items-center ">
                                                    <div className={`icon pe-3`}>
                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.7285 11.2505C20.0795 11.4525 21.0225 11.9255 21.0225 12.9005C21.0225 13.5715 20.5785 14.0075 19.8605 14.2815" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 11.6638C7.6727 11.6638 4.9277 12.1508 4.9277 14.0958C4.9277 16.0398 7.6557 16.5408 10.8867 16.5408C14.1007 16.5408 16.8447 16.0588 16.8447 14.1128C16.8447 12.1668 14.1177 11.6638 10.8867 11.6638Z" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 8.888C12.9957 8.888 14.7057 7.179 14.7057 5.069C14.7057 2.96 12.9957 1.25 10.8867 1.25C8.7777 1.25 7.0677 2.96 7.0677 5.069C7.0597 7.171 8.7567 8.881 10.8587 8.888H10.8867Z" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.8848 7.89673C3.4888 7.70073 2.4158 6.50473 2.4128 5.05573C2.4128 3.62773 3.4538 2.44373 4.8188 2.21973" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M3.0439 11.2505C1.6929 11.4525 0.749901 11.9255 0.749901 12.9005C0.749901 13.5715 1.1939 14.0075 1.9119 14.2815" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>

                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        customers
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className="nav-treeview" >
                                                    <li className={activeItem === 'customers' ? 'active-sub-link' : ''}>
                                                        <Link to="/"
                                                            className="side-link" onClick={() => handleItemClick('customers')}>
                                                            <p className="side-text ">customers</p>
                                                        </Link>
                                                    </li>
                                                    <li className={activeItem === 'cInvoice' ? 'active-sub-link' : ''}>
                                                        <Link to="/cInvoice"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('cInvoice')}
                                                        >
                                                            <p className="side-text ">customers invoices</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#suppliers" aria-expanded="true"
                                                aria-controls="suppliers">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.5915 15.207C13.2805 15.207 16.4335 15.766 16.4335 17.999C16.4335 20.232 13.3015 20.807 9.5915 20.807C5.9015 20.807 2.7495 20.253 2.7495 18.019C2.7495 15.785 5.8805 15.207 9.5915 15.207Z" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.5915 12.02C7.1695 12.02 5.2055 10.057 5.2055 7.635C5.2055 5.213 7.1695 3.25 9.5915 3.25C12.0125 3.25 13.9765 5.213 13.9765 7.635C13.9855 10.048 12.0355 12.011 9.6225 12.02H9.5915Z" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.4831 10.8823C18.0841 10.6573 19.3171 9.28326 19.3201 7.62026C19.3201 5.98126 18.1251 4.62126 16.5581 4.36426" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.5954 14.7324C20.1464 14.9634 21.2294 15.5074 21.2294 16.6274C21.2294 17.3984 20.7194 17.8984 19.8954 18.2114" stroke="#1877F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>


                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        suppliers
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="suppliers" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'suppliers' ? 'active-sub-link' : ''}>
                                                        <Link to="suppliers"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('suppliers')}
                                                        >

                                                            <p className="side-text ">suppliers</p>
                                                        </Link>
                                                    </li>
                                                    <li className={activeItem === 'suppliersInvoices' ? 'active-sub-link' : ''}>
                                                        <Link to="suppliersInvoices"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('suppliersInvoices')}
                                                        >

                                                            <p className="side-text ">suppliers invoices</p>
                                                        </Link>
                                                    </li>
                                                    <li className={activeItem === 'SuppliersReverseInvoices' ? 'active-sub-link' : ''}>
                                                        <Link to=""
                                                            className="side-link"
                                                            onClick={() => handleItemClick('SuppliersReverseInvoices')}
                                                        >

                                                            <p className="side-text ">Suppliers Reverse Invoices</p>
                                                        </Link>
                                                    </li>
                                                    <li className={activeItem === 'Supplies' ? 'active-sub-link' : ''}>
                                                        <Link to=""
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Supplies')}
                                                        >

                                                            <p className="side-text ">Supplies</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Products" aria-expanded="true"
                                                aria-controls="Products">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        products
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Products" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Products' ? 'active-sub-link' : ''}>
                                                        <Link to="Products"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Products')}
                                                        >

                                                            <p className="side-text ">Products</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Services" aria-expanded="true"
                                                aria-controls="Services">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Services
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Services" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Services' ? 'active-sub-link' : ''}>
                                                        <Link to="Services"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Services')}
                                                        >

                                                            <p className="side-text ">Services</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Taxs" aria-expanded="true"
                                                aria-controls="Taxs">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Taxs
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Taxs" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Taxs' ? 'active-sub-link' : ''}>
                                                        <Link to="Taxs"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Taxs')}
                                                        >

                                                            <p className="side-text ">Taxs</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Currencies" aria-expanded="true"
                                                aria-controls="Currencies">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Currencies
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Currencies" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Currencies' ? 'active-sub-link' : ''}>
                                                        <Link to="Currencies"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Currencies')}
                                                        >

                                                            <p className="side-text ">Currencies</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Countries" aria-expanded="true"
                                                aria-controls="Countries">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Countries
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Countries" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Countries' ? 'active-sub-link' : ''}>
                                                        <Link to="Countries"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Countries')}
                                                        >

                                                            <p className="side-text ">Countries</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Companies" aria-expanded="true"
                                                aria-controls="Companies">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Companies
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Companies" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Companies' ? 'active-sub-link' : ''}>
                                                        <Link to="Companies"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Companies')}
                                                        >

                                                            <p className="side-text ">Companies</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Branches" aria-expanded="true"
                                                aria-controls="Branches">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Branches
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Branches" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Branches' ? 'active-sub-link' : ''}>
                                                        <Link to="Branches"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Branches')}
                                                        >

                                                            <p className="side-text ">Branches</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Departments" aria-expanded="true"
                                                aria-controls="Departments">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Departments
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Departments" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Departments' ? 'active-sub-link' : ''}>
                                                        <Link to="Departments"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Departments')}>

                                                            <p className="side-text ">Departments</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Industries" aria-expanded="true"
                                                aria-controls="Industries">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Industries
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Industries" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Industries' ? 'active-sub-link' : ''}>
                                                        <Link to="Industries"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Industries')}>

                                                            <p className="side-text ">Industries</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Categories" aria-expanded="true"
                                                aria-controls="Categories">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_1_112)">
                                                                <g clipPath="url(#clip1_1_112)">
                                                                    <path
                                                                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6687H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8313C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83125C4.37188 16 3.99688 15.6281 3.99688 15.1656H4Z"
                                                                        fill="#1877F2" />
                                                                </g>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1_1_112">
                                                                    <rect width="20" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                                        Categories
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="Categories" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={activeItem === 'Categories' ? 'active-sub-link' : ''}>
                                                        <Link to="Categories"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('Categories')}
                                                        >

                                                            <p className="side-text ">Categories</p>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>


        </>
    )
}

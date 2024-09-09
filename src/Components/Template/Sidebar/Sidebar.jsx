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
                            <li className={`side-link ${activeItem === 'Dashboadrd' ? 'active-side-link' : ''}`} onClick={() => handleItemClick('Dashboadrd')}>
                                <div className={`d-flex pt-2 pb-2  align-items-center `}>
                                    <div className="icon pe-3 ">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>



                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''} `}>
                                        <Link to="Dashboard"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Dashboard')}
                                        >

                                            <p className={`side-text ${activeItem === 'Dashboadrd' ? 'side-text-active' : ''}`}>Dashboard</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button  side-link  text-capitalize  pe-2 ${activeItem === 'Services And Products' ? 'active-side-link' : ''}`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne"
                                                onClick={() => handleItemClick('Services And Products')}
                                            >
                                                <div className="d-flex pt-2 pb-2 justify-content-center align-items-center ">
                                                    <div className={`icon pe-3  `}>
                                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.75 0C9.3375 0 9 0.3375 9 0.75C9 1.1625 9.3375 1.5 9.75 1.5H11.25V3.77813C5.80313 4.1625 1.5 8.70469 1.5 14.25V15H3V14.25C3 9.28125 7.03125 5.25 12 5.25C16.9688 5.25 21 9.28125 21 14.25V15H22.5V14.25C22.5 8.70469 18.1969 4.1625 12.75 3.77813V1.5H14.25C14.6625 1.5 15 1.1625 15 0.75C15 0.3375 14.6625 0 14.25 0H12H9.75ZM0.75 16.5C0.3375 16.5 0 16.8375 0 17.25C0 17.6625 0.3375 18 0.75 18H23.25C23.6625 18 24 17.6625 24 17.25C24 16.8375 23.6625 16.5 23.25 16.5H0.75Z" fill="#707070" />
                                                        </svg>

                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''} ${activeItem === 'Services And Products' ? "active-side-link" : ''}`} onClick={() => handleItemClick('Services And Products')}>
                                                        Services And Products
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className="nav-treeview" >
                                                    <li className={activeItem === 'Services' ? 'active-sub-link' : ''}>
                                                        <Link to="/Services"
                                                            className="side-link" onClick={() => handleItemClick('Services')}>
                                                            <p className="side-text ">Services</p>
                                                        </Link>
                                                    </li>
                                                    <li className={activeItem === 'Products' ? 'active-sub-link' : ''}>
                                                        <Link to="/Products"
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
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button  side-link  text-capitalize  pe-2 ${activeItem === 'customers' ? 'active-side-link' : ''}`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne"
                                                onClick={() => handleItemClick('customers')}
                                            >
                                                <div className="d-flex pt-2 pb-2 justify-content-center align-items-center ">
                                                    <div className={`icon pe-3  `}>
                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.7285 11.25C20.0795 11.452 21.0225 11.925 21.0225 12.9C21.0225 13.571 20.5785 14.007 19.8605 14.281" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 11.6641C7.6727 11.6641 4.9277 12.1511 4.9277 14.0961C4.9277 16.0401 7.6557 16.5411 10.8867 16.5411C14.1007 16.5411 16.8447 16.0591 16.8447 14.1131C16.8447 12.1671 14.1177 11.6641 10.8867 11.6641Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 8.888C12.9957 8.888 14.7057 7.179 14.7057 5.069C14.7057 2.96 12.9957 1.25 10.8867 1.25C8.7777 1.25 7.0677 2.96 7.0677 5.069C7.0597 7.171 8.7567 8.881 10.8587 8.888H10.8867Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.8848 7.89673C3.4888 7.70073 2.4158 6.50473 2.4128 5.05573C2.4128 3.62773 3.4538 2.44373 4.8188 2.21973" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M3.0439 11.25C1.6929 11.452 0.749901 11.925 0.749901 12.9C0.749901 13.571 1.1939 14.007 1.9119 14.281" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>



                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''} ${activeItem === 'customers' ? "active-side-link" : ''}`} onClick={() => handleItemClick('customers')}>
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
                                                    <li className={activeItem === 'ReverseCustomerI' ? 'active-sub-link' : ''}>
                                                        <Link to="/ReverseCustomerI"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('ReverseCustomerI')}
                                                        >
                                                            <p className="side-text ">Reverse customers invoices</p>
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
                                                className={`accordion-button side-link  text-capitalize  pe-2 ${activeItem === 'suppliers' ? 'active-side-link' : ''}`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#suppliers" aria-expanded="true"
                                                aria-controls="suppliers">
                                                <div className="d-flex pt-2 pb-2 align-items-center">
                                                    <div className="icon pe-3 ">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5915 13.207C11.2805 13.207 14.4335 13.766 14.4335 15.999C14.4335 18.232 11.3015 18.807 7.5915 18.807C3.9015 18.807 0.749496 18.253 0.749496 16.019C0.749496 13.785 3.8805 13.207 7.5915 13.207Z" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5915 10.02C5.1695 10.02 3.2055 8.057 3.2055 5.635C3.2055 3.213 5.1695 1.25 7.5915 1.25C10.0125 1.25 11.9765 3.213 11.9765 5.635C11.9855 8.048 10.0355 10.011 7.6225 10.02H7.5915Z" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M14.4831 8.88177C16.0841 8.65677 17.3171 7.28277 17.3201 5.61977C17.3201 3.98077 16.1251 2.62077 14.5581 2.36377" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M16.5954 12.7324C18.1464 12.9634 19.2294 13.5074 19.2294 14.6274C19.2294 15.3984 18.7194 15.8984 17.8954 16.2114" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>



                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}  ${activeItem === 'suppliers' ? "active-side-link" : ''}`} onClick={() => handleItemClick('suppliers')}>
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
                            {/* <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
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
                                        <Link to="Products"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Products')}
                                        >

                                            <p className="side-text ">Products</p>
                                        </Link>
                                    </span>
                                </div>
                            </li> */}
                            <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
                                    <div className="icon pe-3 ">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4189 14.732C20.4189 18.31 18.3099 20.419 14.7319 20.419H6.9499C3.3629 20.419 1.2499 18.31 1.2499 14.732V6.932C1.2499 3.359 2.5639 1.25 6.1429 1.25H8.1429C8.8609 1.251 9.5369 1.588 9.9669 2.163L10.8799 3.377C11.3119 3.951 11.9879 4.289 12.7059 4.29H15.5359C19.1229 4.29 20.4469 6.116 20.4469 9.767L20.4189 14.732Z" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.481 13.4629H15.216" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                        <Link to="Accounting"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Accounting')}
                                        >

                                            <p className="side-text ">Accounting</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
                                    <div className="icon pe-3 ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7162 16.2236H8.4962" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.7162 12.0371H8.4962" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.2513 7.86035H8.4963" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9086 2.75C15.9086 2.75 8.2316 2.754 8.2196 2.754C5.4596 2.771 3.7506 4.587 3.7506 7.357V16.553C3.7506 19.337 5.4726 21.16 8.2566 21.16C8.2566 21.16 15.9326 21.157 15.9456 21.157C18.7056 21.14 20.4156 19.323 20.4156 16.553V7.357C20.4156 4.573 18.6926 2.75 15.9086 2.75Z" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                        <Link to="Reports"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Reports')}
                                        >

                                            <p className="side-text ">Reports</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
                                    <div className="icon pe-3 ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.456C4.422 2.77148 2.772 4.42148 2.772 6.45648V17.5865C2.772 19.6215 4.422 21.2715 6.456 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21.8095 12.0215H9.7685" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.8812 9.10645L21.8092 12.0214L18.8812 14.9374" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>



                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                        <Link to="Users And Permissions"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Users And Permissions')}
                                        >

                                            <p className="side-text ">Users And Permissions</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
                                    <div className="icon pe-3 ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8066 7.62337L20.1842 6.54328C19.6576 5.62936 18.4907 5.31408 17.5755 5.83847V5.83847C17.1399 6.0951 16.6201 6.16791 16.1307 6.04084C15.6413 5.91378 15.2226 5.59727 14.9668 5.16113C14.8023 4.8839 14.7139 4.56815 14.7105 4.2458V4.2458C14.7254 3.72898 14.5304 3.22816 14.17 2.85743C13.8096 2.48669 13.3145 2.27762 12.7975 2.27783H11.5435C11.0369 2.27783 10.5513 2.47967 10.194 2.8387C9.83666 3.19773 9.63715 3.68435 9.63959 4.19088V4.19088C9.62457 5.23668 8.77246 6.07657 7.72654 6.07646C7.40419 6.07311 7.08843 5.9847 6.81121 5.82017V5.82017C5.89604 5.29577 4.72909 5.61105 4.20252 6.52497L3.53432 7.62337C3.00839 8.53615 3.31938 9.70236 4.22998 10.2321V10.2321C4.82188 10.5738 5.18651 11.2053 5.18651 11.8888C5.18651 12.5723 4.82188 13.2038 4.22998 13.5456V13.5456C3.32053 14.0717 3.0092 15.2351 3.53432 16.1451V16.1451L4.1659 17.2344C4.41262 17.6795 4.82658 18.0081 5.31617 18.1472C5.80576 18.2863 6.33062 18.2247 6.7746 17.9758V17.9758C7.21106 17.7211 7.73117 17.6513 8.21932 17.782C8.70747 17.9126 9.12321 18.2328 9.37414 18.6714C9.53867 18.9486 9.62709 19.2644 9.63043 19.5868V19.5868C9.63043 20.6433 10.4869 21.4998 11.5435 21.4998H12.7975C13.8505 21.4998 14.7055 20.6489 14.7105 19.5959V19.5959C14.7081 19.0878 14.9088 18.5998 15.2681 18.2405C15.6274 17.8812 16.1155 17.6804 16.6236 17.6829C16.9452 17.6915 17.2596 17.7795 17.5389 17.9392V17.9392C18.4517 18.4651 19.6179 18.1541 20.1476 17.2435V17.2435L20.8066 16.1451C21.0617 15.7073 21.1317 15.1858 21.0012 14.6961C20.8706 14.2065 20.5502 13.7891 20.111 13.5364V13.5364C19.6717 13.2837 19.3514 12.8663 19.2208 12.3767C19.0902 11.8871 19.1602 11.3656 19.4153 10.9277C19.5812 10.6381 19.8214 10.398 20.111 10.2321V10.2321C21.0161 9.70265 21.3264 8.54325 20.8066 7.63252V7.63252V7.62337Z" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <circle cx="12.1751" cy="11.8886" r="2.63616" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>



                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''}`}>
                                        <Link to="Settings"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Settings')}
                                        >

                                            <p className="side-text ">Settings</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            {/* <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button side-link  text-capitalize  pe-2`}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#Services" aria-expanded="true"
                                                aria-controls="Services">
                                            
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                            {/* <li className="side-drop-down ">
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
                            </li> */}
                        </ul>
                    </div>
                </aside>
            </div>


        </>
    )
}

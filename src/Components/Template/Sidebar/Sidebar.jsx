import { icon } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Sidebar({ collapsed, toggleSidebar }) {

    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    const path = useLocation();
    const { pathname } = path

    const isPathActive = (paths) => {
        return paths.includes(pathname)
    }
    const dropDownItems = [{
        name: 'Services', paths: ['/services', '/Products'], icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 3C9.3375 3 9 3.3375 9 3.75C9 4.1625 9.3375 4.5 9.75 4.5H11.25V6.77813C5.80313 7.1625 1.5 11.7047 1.5 17.25V18H3V17.25C3 12.2812 7.03125 8.25 12 8.25C16.9688 8.25 21 12.2812 21 17.25V18H22.5V17.25C22.5 11.7047 18.1969 7.1625 12.75 6.77813V4.5H14.25C14.6625 4.5 15 4.1625 15 3.75C15 3.3375 14.6625 3 14.25 3H12H9.75ZM0.75 19.5C0.3375 19.5 0 19.8375 0 20.25C0 20.6625 0.3375 21 0.75 21H23.25C23.6625 21 24 20.6625 24 20.25C24 19.8375 23.6625 19.5 23.25 19.5H0.75Z" fill="#707070" />
        </svg>)
    }
        , {
        name: 'customers', paths: ['/', '/cInvoice', '/ReverseCustomerI'], icon: (<svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.7285 11.25C20.0795 11.452 21.0225 11.925 21.0225 12.9C21.0225 13.571 20.5785 14.007 19.8605 14.281" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 11.6641C7.6727 11.6641 4.9277 12.1511 4.9277 14.0961C4.9277 16.0401 7.6557 16.5411 10.8867 16.5411C14.1007 16.5411 16.8447 16.0591 16.8447 14.1131C16.8447 12.1671 14.1177 11.6641 10.8867 11.6641Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 8.888C12.9957 8.888 14.7057 7.179 14.7057 5.069C14.7057 2.96 12.9957 1.25 10.8867 1.25C8.7777 1.25 7.0677 2.96 7.0677 5.069C7.0597 7.171 8.7567 8.881 10.8587 8.888H10.8867Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.8848 7.89673C3.4888 7.70073 2.4158 6.50473 2.4128 5.05573C2.4128 3.62773 3.4538 2.44373 4.8188 2.21973" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.0439 11.25C1.6929 11.452 0.749901 11.925 0.749901 12.9C0.749901 13.571 1.1939 14.007 1.9119 14.281" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
    },
    {
        name: 'suppliers', paths: ['/suppliers', '/suppliersInvoices', '/ReverseSupplierI', '/Supplies'], icon: (<svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5915 13.207C11.2805 13.207 14.4335 13.766 14.4335 15.999C14.4335 18.232 11.3015 18.807 7.5915 18.807C3.9015 18.807 0.749496 18.253 0.749496 16.019C0.749496 13.785 3.8805 13.207 7.5915 13.207Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5915 10.02C5.1695 10.02 3.2055 8.057 3.2055 5.635C3.2055 3.213 5.1695 1.25 7.5915 1.25C10.0125 1.25 11.9765 3.213 11.9765 5.635C11.9855 8.048 10.0355 10.011 7.6225 10.02H7.5915Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.4831 8.88177C16.0841 8.65677 17.3171 7.28277 17.3201 5.61977C17.3201 3.98077 16.1251 2.62077 14.5581 2.36377" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5954 12.7324C18.1464 12.9634 19.2294 13.5074 19.2294 14.6274C19.2294 15.3984 18.7194 15.8984 17.8954 16.2114" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
    }
    ]
    useEffect(() => {
        const activeDropdown = dropDownItems.find(item => item.paths.includes(pathname));
        if (activeDropdown) {
            setActiveItem(activeDropdown.name)
        }
    }, [pathname])
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
                            <li className={`side-link ${activeItem === 'Dashboadrd' ? 'px-blue-text' : ''}  `} onClick={() => handleItemClick('Dashboadrd')}>
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

                                            <p className={`side-text ${activeItem === 'Dashboadrd' ? 'side-text-active' : ''} `}>Dashboard</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            {dropDownItems.map((item) => (
                                <>
                                    <li className={`side-drop-down`} key={item.name}>
                                        <div className="accordion " id={`accordion-${item.name}`}>
                                            <div className="accordion-item  ">
                                                <h2 className="accordion-header   ">
                                                    <button
                                                        className={`accordion-button  side-link  text-capitalize  pe-2 ${activeItem === item.name ? 'px-blue-text' : ''} ${isPathActive(item.paths)?'active-side-link':''}`}
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target={`#${item.name}-collapse`} aria-expanded="true"
                                                        aria-controls={`${item.name}-collapse`}
                                                        onClick={() => handleItemClick(item.name)}
                                                    >
                                                        <div className="d-flex pt-2 pb-2 justify-content-center align-items-center ">
                                                            <div className={`icon pe-3 ${activeItem === item.name ? 'px-text-blue' : ''} `}>

                                                                {item.icon}

                                                            </div>
                                                            <span className={`side-text ${collapsed ? 'd-none' : ''} ${activeItem === item.name ? 'px-blue-text' : ''}`}>
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id={`${item.name}-collapse`} className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                                    data-bs-parent={`#accordion-${item.name}`}>
                                                    <div className="accordion-body px-accordion-body">
                                                        <ul className="nav-treeview" >
                                                            {item.paths.map((path, index) => (
                                                                <>
                                                                    <li key={index} className={`${pathname === path ? 'active-sub-link' : ''} `}>
                                                                        <Link to={path}
                                                                            className="side-link " >
                                                                            <p className="side-text ">{path.split('/')[1] || item.name}</p>
                                                                        </Link>
                                                                    </li>
                                                                </>
                                                            ))}



                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </>

                            ))}

                            {/* <li className="side-drop-down ">
                                <div className="accordion " id="accordionExample">
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header  ">
                                            <button
                                                className={`accordion-button  side-link  text-capitalize  pe-2 ${activeItem === 'customers' ? 'px-blue-text' : ''} `}
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne"
                                                onClick={() => handleItemClick('customers')}
                                            >
                                                <div className="d-flex pt-2 pb-2 justify-content-center align-items-center ">
                                                    <div className={`icon pe-3  ${activeItem === 'customers' ? 'px-blue-text' : ''} `}>
                                                        <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.7285 11.25C20.0795 11.452 21.0225 11.925 21.0225 12.9C21.0225 13.571 20.5785 14.007 19.8605 14.281" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 11.6641C7.6727 11.6641 4.9277 12.1511 4.9277 14.0961C4.9277 16.0401 7.6557 16.5411 10.8867 16.5411C14.1007 16.5411 16.8447 16.0591 16.8447 14.1131C16.8447 12.1671 14.1177 11.6641 10.8867 11.6641Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8867 8.888C12.9957 8.888 14.7057 7.179 14.7057 5.069C14.7057 2.96 12.9957 1.25 10.8867 1.25C8.7777 1.25 7.0677 2.96 7.0677 5.069C7.0597 7.171 8.7567 8.881 10.8587 8.888H10.8867Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.8848 7.89673C3.4888 7.70073 2.4158 6.50473 2.4128 5.05573C2.4128 3.62773 3.4538 2.44373 4.8188 2.21973" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M3.0439 11.25C1.6929 11.452 0.749901 11.925 0.749901 12.9C0.749901 13.571 1.1939 14.007 1.9119 14.281" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>



                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''} ${activeItem === 'customers' ? "px-blue-text" : ''}`} onClick={() => handleItemClick('customers')}>
                                                        customers
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className="nav-treeview" >
                                                    <li className={`${activeItem === 'customers' ? 'active-sub-link' : ''}  `}>
                                                        <Link to="/"
                                                            className="side-link " onClick={() => handleItemClick('customers')}>
                                                            <p className="side-text ">customers</p>
                                                        </Link>
                                                    </li>
                                                    <li className={`${activeItem === 'cInvoice' ? 'active-sub-link' : ''} `}>
                                                        <Link to="/cInvoice"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('cInvoice')}
                                                        >
                                                            <p className="side-text ">customers invoices</p>
                                                        </Link>
                                                    </li>
                                                    <li className={`${activeItem === 'ReverseCustomerI' ? 'active-sub-link' : ''} `}>
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
                                                    <div className={`icon pe-3  ${activeItem === 'suppliers' ? 'px-blue-text' : ''}`}>
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5915 13.207C11.2805 13.207 14.4335 13.766 14.4335 15.999C14.4335 18.232 11.3015 18.807 7.5915 18.807C3.9015 18.807 0.749496 18.253 0.749496 16.019C0.749496 13.785 3.8805 13.207 7.5915 13.207Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.5915 10.02C5.1695 10.02 3.2055 8.057 3.2055 5.635C3.2055 3.213 5.1695 1.25 7.5915 1.25C10.0125 1.25 11.9765 3.213 11.9765 5.635C11.9855 8.048 10.0355 10.011 7.6225 10.02H7.5915Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M14.4831 8.88177C16.0841 8.65677 17.3171 7.28277 17.3201 5.61977C17.3201 3.98077 16.1251 2.62077 14.5581 2.36377" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5954 12.7324C18.1464 12.9634 19.2294 13.5074 19.2294 14.6274C19.2294 15.3984 18.7194 15.8984 17.8954 16.2114" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>




                                                    </div>
                                                    <span className={`side-text ${collapsed ? 'd-none' : ''}  ${activeItem === 'suppliers' ? "active-side-link" : ''} 
                                                    ${pathname === '/suppliers'
                                                            || pathname === '/suppliersInvoices'
                                                            || pathname === '/ReverseSupplierI'
                                                            || pathname === '/Supplies'
                                                            ? 'active-side-link' : ''}`} onClick={() => handleItemClick('suppliers')}>
                                                        suppliers
                                                    </span>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="suppliers" className={`accordion-collapse collapse ${collapsed ? 'd-none' : ''}`}
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-accordion-body">
                                                <ul className=" nav-treeview">
                                                    <li className={`${activeItem === 'suppliers' ? 'active-sub-link' : ''} ${pathname === '/suppliers' ? 'active-sub-link' : ''} `}>
                                                        <Link to="suppliers"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('suppliers')}
                                                        >

                                                            <p className="side-text ">suppliers</p>
                                                        </Link>
                                                    </li>
                                                    <li className={`${activeItem === 'suppliersInvoices' ? 'active-sub-link' : ''} ${pathname === '/suppliersInvoices' ? 'active-sub-link' : ''} `}>
                                                        <Link to="suppliersInvoices"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('suppliersInvoices')}
                                                        >

                                                            <p className="side-text ">suppliers invoices</p>
                                                        </Link>
                                                    </li>
                                                    <li className={`${activeItem === 'SuppliersReverseInvoices' ? 'active-sub-link' : ''}  ${pathname === '/ReverseSupplierI' ? 'active-sub-link' : ''}`}>
                                                        <Link to="ReverseSupplierI"
                                                            className="side-link"
                                                            onClick={() => handleItemClick('SuppliersReverseInvoices')}
                                                        >

                                                            <p className="side-text ">Suppliers Reverse Invoices</p>
                                                        </Link>
                                                    </li>
                                                    <li className={`${activeItem === 'Supplies' ? 'active-sub-link' : ''} ${pathname === '/Supplies' ? 'active-sub-link' : ''}  `}>
                                                        <Link to="Supplies"
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
                            </li> */}
                            <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
                                    <div className="icon pe-3 ">
                                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4189 14.732C20.4189 18.31 18.3099 20.419 14.7319 20.419H6.9499C3.3629 20.419 1.2499 18.31 1.2499 14.732V6.932C1.2499 3.359 2.5639 1.25 6.1429 1.25H8.1429C8.8609 1.251 9.5369 1.588 9.9669 2.163L10.8799 3.377C11.3119 3.951 11.9879 4.289 12.7059 4.29H15.5359C19.1229 4.29 20.4469 6.116 20.4469 9.767L20.4189 14.732Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.481 13.4629H15.216" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7162 16.2236H8.4962" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.7162 12.0371H8.4962" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.2513 7.86035H8.4963" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9086 2.75C15.9086 2.75 8.2316 2.754 8.2196 2.754C5.4596 2.771 3.7506 4.587 3.7506 7.357V16.553C3.7506 19.337 5.4726 21.16 8.2566 21.16C8.2566 21.16 15.9326 21.157 15.9456 21.157C18.7056 21.14 20.4156 19.323 20.4156 16.553V7.357C20.4156 4.573 18.6926 2.75 15.9086 2.75Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.456C4.422 2.77148 2.772 4.42148 2.772 6.45648V17.5865C2.772 19.6215 4.422 21.2715 6.456 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21.8095 12.0215H9.7685" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.8812 9.10645L21.8092 12.0214L18.8812 14.9374" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>




                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''} `}>
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
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.8066 7.62337L20.1842 6.54328C19.6576 5.62936 18.4907 5.31408 17.5755 5.83847V5.83847C17.1399 6.0951 16.6201 6.16791 16.1307 6.04084C15.6413 5.91378 15.2226 5.59727 14.9668 5.16113C14.8023 4.8839 14.7139 4.56815 14.7105 4.2458V4.2458C14.7254 3.72898 14.5304 3.22816 14.17 2.85743C13.8096 2.48669 13.3145 2.27762 12.7975 2.27783H11.5435C11.0369 2.27783 10.5513 2.47967 10.194 2.8387C9.83666 3.19773 9.63715 3.68435 9.63959 4.19088V4.19088C9.62457 5.23668 8.77246 6.07657 7.72654 6.07646C7.40419 6.07311 7.08843 5.9847 6.81121 5.82017V5.82017C5.89604 5.29577 4.72909 5.61105 4.20252 6.52497L3.53432 7.62337C3.00839 8.53615 3.31938 9.70236 4.22998 10.2321V10.2321C4.82188 10.5738 5.18651 11.2053 5.18651 11.8888C5.18651 12.5723 4.82188 13.2038 4.22998 13.5456V13.5456C3.32053 14.0717 3.0092 15.2351 3.53432 16.1451V16.1451L4.1659 17.2344C4.41262 17.6795 4.82658 18.0081 5.31617 18.1472C5.80576 18.2863 6.33062 18.2247 6.7746 17.9758V17.9758C7.21106 17.7211 7.73117 17.6513 8.21932 17.782C8.70747 17.9126 9.12321 18.2328 9.37414 18.6714C9.53867 18.9486 9.62709 19.2644 9.63043 19.5868V19.5868C9.63043 20.6433 10.4869 21.4998 11.5435 21.4998H12.7975C13.8505 21.4998 14.7055 20.6489 14.7105 19.5959V19.5959C14.7081 19.0878 14.9088 18.5998 15.2681 18.2405C15.6274 17.8812 16.1155 17.6804 16.6236 17.6829C16.9452 17.6915 17.2596 17.7795 17.5389 17.9392V17.9392C18.4517 18.4651 19.6179 18.1541 20.1476 17.2435V17.2435L20.8066 16.1451C21.0617 15.7073 21.1317 15.1858 21.0012 14.6961C20.8706 14.2065 20.5502 13.7891 20.111 13.5364V13.5364C19.6717 13.2837 19.3514 12.8663 19.2208 12.3767C19.0902 11.8871 19.1602 11.3656 19.4153 10.9277C19.5812 10.6381 19.8214 10.398 20.111 10.2321V10.2321C21.0161 9.70265 21.3264 8.54325 20.8066 7.63252V7.63252V7.62337Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12.1751" cy="11.8886" r="2.63616" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''} ${path === '/Settings' ? 'active-side-link' : ''}`}>
                                        <Link to="Settings"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Settings')}
                                        >
                                            <p className="side-text ">Settings</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                            <li className='side-link'>
                                <div className="d-flex pt-2 pb-2  align-items-center">
                                    <div className="icon pe-3 ">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.8066 7.62337L20.1842 6.54328C19.6576 5.62936 18.4907 5.31408 17.5755 5.83847V5.83847C17.1399 6.0951 16.6201 6.16791 16.1307 6.04084C15.6413 5.91378 15.2226 5.59727 14.9668 5.16113C14.8023 4.8839 14.7139 4.56815 14.7105 4.2458V4.2458C14.7254 3.72898 14.5304 3.22816 14.17 2.85743C13.8096 2.48669 13.3145 2.27762 12.7975 2.27783H11.5435C11.0369 2.27783 10.5513 2.47967 10.194 2.8387C9.83666 3.19773 9.63715 3.68435 9.63959 4.19088V4.19088C9.62457 5.23668 8.77246 6.07657 7.72654 6.07646C7.40419 6.07311 7.08843 5.9847 6.81121 5.82017V5.82017C5.89604 5.29577 4.72909 5.61105 4.20252 6.52497L3.53432 7.62337C3.00839 8.53615 3.31938 9.70236 4.22998 10.2321V10.2321C4.82188 10.5738 5.18651 11.2053 5.18651 11.8888C5.18651 12.5723 4.82188 13.2038 4.22998 13.5456V13.5456C3.32053 14.0717 3.0092 15.2351 3.53432 16.1451V16.1451L4.1659 17.2344C4.41262 17.6795 4.82658 18.0081 5.31617 18.1472C5.80576 18.2863 6.33062 18.2247 6.7746 17.9758V17.9758C7.21106 17.7211 7.73117 17.6513 8.21932 17.782C8.70747 17.9126 9.12321 18.2328 9.37414 18.6714C9.53867 18.9486 9.62709 19.2644 9.63043 19.5868V19.5868C9.63043 20.6433 10.4869 21.4998 11.5435 21.4998H12.7975C13.8505 21.4998 14.7055 20.6489 14.7105 19.5959V19.5959C14.7081 19.0878 14.9088 18.5998 15.2681 18.2405C15.6274 17.8812 16.1155 17.6804 16.6236 17.6829C16.9452 17.6915 17.2596 17.7795 17.5389 17.9392V17.9392C18.4517 18.4651 19.6179 18.1541 20.1476 17.2435V17.2435L20.8066 16.1451C21.0617 15.7073 21.1317 15.1858 21.0012 14.6961C20.8706 14.2065 20.5502 13.7891 20.111 13.5364V13.5364C19.6717 13.2837 19.3514 12.8663 19.2208 12.3767C19.0902 11.8871 19.1602 11.3656 19.4153 10.9277C19.5812 10.6381 19.8214 10.398 20.111 10.2321V10.2321C21.0161 9.70265 21.3264 8.54325 20.8066 7.63252V7.63252V7.62337Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12.1751" cy="11.8886" r="2.63616" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className={`side-text ${collapsed ? 'd-none' : ''} ${path === '/Countries' ? 'active-side-link' : ''}`}>
                                        <Link to="Countries"
                                            className="side-link px-gray-text"
                                            onClick={() => handleItemClick('Countries')}
                                        >
                                            <p className="side-text ">Countries</p>
                                        </Link>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>


        </>
    )
}

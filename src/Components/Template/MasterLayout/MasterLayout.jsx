import React, { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import CustomersTable from '../../Controls/Customers/CustomersTable'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
    const [collapsed, setCollapsed] = useState(false)


    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }
    return (
        <>


            <div className="px-wrapper text-capitalize ">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
                      
                      
                        <div className={`col-sm-12 col-md-10 col-lg-10  offset-md-1 offset-lg-0 gx-0 main-content-container ${collapsed?'flex-grow-1':'flex-grow-0'}`}>
                        <div className="px-main-content  d-flex flex-column justify-content-between">
                                <Header />
                                <Outlet/>
                             <Footer/>

                            </div>
                        </div>
                    </div>
             </div>
             </div>
        </>
    )
}

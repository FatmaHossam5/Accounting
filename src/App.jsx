import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import MasterLayout from './Components/Template/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CustomersTable from './Components/Controls/Customers/CustomersTable'
import CustomerInvoices from './Components/Controls/CustomersInvoice/CustomerInvoices'
import Supplier from './Components/Controls/Supplier/Supplier'
import AddCustomerInvoice from './Components/Controls/AddCustomerInvoice/AddCustomerInvoice'
import AddSupplierInvoice from './Components/Controls/AddSupplierInvoice/AddSupplierInvoice'
import SupplierInvoices from './Components/Controls/SupplierInvoices/SupplierInvoices'
import Products from './Components/Controls/Products/Products'
import Services from './Components/Controls/Services/Services'
import Taxs from './Components/Controls/Taxs/Taxs'
import Currencies from './Components/Controls/Currencies/Currencies'
import Countries from './Components/Controls/Countries/Countries.jsx'
import Companies from './Components/Controls/Companies/Companies.jsx'
import Branches from './Components/Controls/Branches/Branches.jsx'
import Departments from './Components/Controls/Departments/Departments.jsx'
import Categories from './Components/Controls/Categories/Categories.jsx'
import Dashboard from './Components/Controls/Dashboard/Dashboard.jsx'
import ReverseCustomer from './Components/Controls/ReverseCustomer/ReverseCustomer.jsx'
import PageNotFound from './Components/Template/PageNotFound/PageNotFound.jsx'

function App() {
 
const routes = createBrowserRouter([
  {
    path:'/',
    element:(
      <MasterLayout/>
    ),errorElement:(<PageNotFound/>),
    children:[
      {index:true, element:<CustomersTable/>},
      {path:"cInvoice",element:<CustomerInvoices/>},
      {path:"suppliers",element:<Supplier/>},
      {path:"suppliersInvoices",element:<SupplierInvoices/>},
      {path:'/Add',element:<AddCustomerInvoice/>},
      {path:'/AddSupplierInvoice',element:<AddSupplierInvoice/>},
      {path:'/Products',element:<Products/>},
      {path:'/Services',element:<Services/>},
      {path:'/Taxs',element:<Taxs/>},
      {path:'/Currencies',element:<Currencies/>},
      {path:'/Countries',element:<Countries/>},
      {path:'/Companies',element:<Companies/>},
      {path:'/Branches',element:<Branches/>},
      {path:'/Departments',element:<Departments/>},
      {path:'/Industries',element:<Departments/>},
      {path:'/Categories',element:<Categories/>},
      {path:'/Dashboard',element:<Dashboard/>},
      {path:'/ReverseCustomerI',element:<ReverseCustomer/>},
    ]
  },
  // {
  //   path: '/',
  //   element: <PageNotFound />, // New sibling layout for admin section
  //   children: [
  //     { path: '*', element: <PageNotFound /> },
  //   ],
  // },
])
  return (
    <>

   <RouterProvider router={routes}/>
    </>
  )
}

export default App

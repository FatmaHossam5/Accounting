import React from 'react'
import AddInvoice from '../../Shared/AddInvoice/AddInvoice'

export default function AddSupplierInvoice() {
  return (
    <>
    
    <AddInvoice
       pageTitle="Create Supplier’s Invoice"
       subTitle="Supplier Details"
       Id='createSupplierInvoice'
       optionName='select Supplier'
       labelName='supplier English Name'
       InvoiceType='Supplier Invoice'
     />
    
    
    </>
  )
}

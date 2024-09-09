import React from 'react'
import AddInvoice from '../../Shared/AddInvoice/AddInvoice'

export default function AddReverseInvoice() {
  return (
    <>
    
    
      
    <AddInvoice
       pageTitle="Create Customer Reverse Invoice"
       subTitle="Customer Details"
       Id='createReverseInvoice'
       optionName='Select Customer'
       labelName='customer English Name'
       InvoiceType='Customer Invoice'
     />
    </>
  )
}

import React from "react";
import AddInvoice from "../../Shared/AddInvoice/AddInvoice";

export default function AddCustomerInvoice() {
  return (
    <>
      <AddInvoice
        pageTitle="Create Customer’s Invoice"
        subTitle="Customer Details"
        Id='createCustomerInvoice'
        InvoiceType='Customer Invoice'
      />
    </>
  );
}

import React from 'react';
import { CreateInvoiceStyle } from '../style/createinvoice';

const CreateInvoice = (props) => {
  return (
    <CreateInvoiceStyle>
      <span className='section_label normal_18'>Generate invoice</span>
      <span className='prompt block normal_14'>ENTER INVOICE INFO</span>
    </CreateInvoiceStyle>
  )
}

export default CreateInvoice

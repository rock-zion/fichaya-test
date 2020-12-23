import React, { useState } from 'react';
import { GenerateInvoiceStyle } from '../style/generateinvoice';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import Select from '../components/Select';
import { Link, withRouter } from 'react-router-dom';

const GenerateInvoice = (props) => {
  const [input, setInput] = useState({});
  const [total] = useState(50000);

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSelectChange = () => {};

  return (
    <GenerateInvoiceStyle>
      <span className='section_label normal_18'>Generate invoice</span>
      <span className='prompt block normal_14'>ENTER INVOICE INFO</span>

      <div className='grid_1_1 invoice_info_wrapper'>
        <FormContainer>
          <Input
            handleChange={handleChange}
            type='text'
            label='Customer/ Company name'
            placeholder='Enter company name'
            name='companyName'
            disabled={false}
          />
          <div className='grid_1_1 input_wrapper'>
            <span>
              <Input
                handleChange={handleChange}
                type='email'
                label='Email'
                placeholder='Enter email address'
                name='email'
                disabled={false}
              />
            </span>
            <span>
              <Input
                handleChange={handleChange}
                type='tel'
                label='Phone number'
                e
                placeholder='Enter phone number'
                name='phoneNumber'
                disabled={false}
              />
            </span>
          </div>
          <Input
            handleChange={handleChange}
            type='text'
            label='Customer/ Company name'
            placeholder='Enter company name'
            name='companyName'
            disabled={false}
          />
        </FormContainer>
        <FormContainer>
          <div className='grid_1_1 input_wrapper'>
            <span>
              <Input
                handleChange={handleChange}
                type='date'
                label='Issue date'
                placeholder='Enter company name'
                name='issueDate'
                disabled={false}
              />
            </span>
            <span>
              <Input
                handleChange={handleChange}
                type='date'
                label='Due date'
                placeholder=''
                name='dueDate'
                disabled={false}
              />
            </span>
          </div>

          <div className='grid_1_1 input_wrapper'>
            <span>
              <Input
                handleChange={handleChange}
                type='number'
                label='Invoice number'
                placeholder='Enter invoice number'
                name='invoiceNumber'
                disabled={false}
              />
            </span>
            <span>
              <Select
                handleChange={handleSelectChange}
                type='numbeer'
                label='Vat %'
                name='vat'
                options={props.options}
                disabled={false}
              />
            </span>
          </div>

          <Input
            handleChange={handleChange}
            type='text'
            label='Service description'
            placeholder='Enter service description'
            name='serviceDescription'
            disabled={false}
          />

          <div className='grid_1_1 input_wrapper'>
            <span>
              <Input
                handleChange={handleChange}
                type='number'
                label='Service amount'
                placeholder='Enter service amount'
                name='serviceAmount'
                disabled={false}
              />
            </span>
            <span>
              <Input
                handleChange={handleChange}
                type='number'
                label='Total amount'
                placeholder=''
                value={total}
                name='totalAmount'
                disabled={true}
              />
            </span>
          </div>
        </FormContainer>
      </div>
      <div className='generate_invoice_btn_container grid_1_1'>
        <div className="width_100"></div>
        <div className="btn_wrapper grid_1_1">
          <button className="btn btn_secondary normal_16">CANCEL</button>
          <Link to={`${props.match.url}/createinvoice`} className="btn btn_primary normal_16 create_invoice_link">CREATE INVOICE</Link>
        </div>
      </div>
    </GenerateInvoiceStyle>
  );
};

export default withRouter(GenerateInvoice);

GenerateInvoice.defaultProps = {
  options: [7.5, 10.5],
};

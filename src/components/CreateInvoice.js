import React from 'react';
import { CreateInvoiceStyle } from '../style/createinvoice';
import logo from '../assets/icons/logo.svg';
import { withRouter } from 'react-router-dom';

const CreateInvoice = (props) => {
  return (
    <CreateInvoiceStyle>
      <span className='section_label normal_18'>Generate invoice</span>
      <span className='prompt block normal_14'>PREVIEW YOUR INVOICE</span>
      <section className='invoice'>
        <div className='heading'>
          <img src={logo} alt='' />
          <span className='title normal_16'>INVOICE</span>
        </div>
        {/* WRAPPER FOR SENDER & STATUS */}
        <div className='grid_1_1 sender_status_wrapper'>
          {/* FROM */}
          <div>
            <span className='sender_wrapper'>
              <span className=''>FROM</span>
              <span className='receiver'>FICHAYA</span>
              <span className='email'>finance@fichaya.com</span>
              <span className=''>+2348177141611</span>
            </span>

            {/* BILL TO */}
            <span className=''>
              <span className=''>BILL TO</span>
              <span className='receiver'>Spleet Nigeria Limited</span>
              <span className='email'>info@spleet.ng</span>
              <span className=''>51, Iwaya Road, Onike Yaba</span>
              <span className=''>+2348140564969</span>
            </span>
          </div>

          {/* STATUS */}
          <div className='receiver_wrapper'>
            <span className=''>STATUS</span>
            <span className='status unpaid spacing_bottom_20'>UNPAID</span>

            <span>CREATED</span>
            <span className='spacing_bottom_20'>October 8, 2020</span>

            <span>DUE</span>
            <span className='spacing_bottom_20'>October 11, 2020</span>

            <span>AMOUNT</span>
            <span>NGN 48,375</span>
          </div>
        </div>

        {/* TABLE */}
        <table className='normal_14'>
          <thead>
            <tr>
              <th>DESCRIPTION</th>
              <th>QTY</th>
              <th>UNIT PRICE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                5 Bedroom Duplex <br /> post-con cleaning
              </td>
              <td>1</td>
              <td>NGN 45,000</td>
              <td>NGN 45,000</td>
            </tr>
          </tbody>
        </table>

        <div className='total_wrapper grid_1_1'>
          <div></div>
          <div>
            <span className="row">
              <span className="medium_14">SUB-TOTAL</span>
              <span className="medium_14">NGN 45,000</span>
            </span>
            <span className="row">
              <span className="medium_14">VAT (7.5%)</span>
              <span className="medium_14">NGN 3,375</span>
            </span>
            <span className="row">
              <span className="medium_14">TOTAL</span>
              <span className="total medium_14">NGN 48,375</span>
            </span>
          </div>
        </div>
      </section>
      <div className='grid_1_1 btn_wrapper'>
        <button onClick={props.history.goBack} className='btn btn_secondary'>
          GO BACK
        </button>
        <button className='btn btn_primary'>SEND TO CUSTOMER</button>
      </div>
    </CreateInvoiceStyle>
  );
};

export default withRouter(CreateInvoice);

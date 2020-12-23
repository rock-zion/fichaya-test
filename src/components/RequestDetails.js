import React, { useState } from 'react';
import { RequestDetailsStyle } from '../style/requests';
import dropDown from '../assets/icons/chevron_down_bg.svg';
import { Link, withRouter } from 'react-router-dom';

const RequestDetails = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <RequestDetailsStyle>
      <span className='section_label normal_18'>Request Information</span>
      <section>
        <div className='details_wrapper'>
          <div>
            <div>
              <span className='label normal_14'>request type</span>
              <span className='content medium_18'>POST-CON</span>
            </div>
            <div>
              <span className='label normal_14'> INVOICE STATUS</span>
              <span className='content medium_18 ungenerated'>UNGENERATED</span>
            </div>
            <div>
              <span className='label normal_14'>Location</span>
              <span className='content medium_18'>
                8, Yovi Street, IWAYA, ONIKE, YABA.
              </span>
            </div>
          </div>

          <div>
            <div>
              <span className='label normal_14'>customer name</span>
              <span className='content medium_18'>PETER ABU-EKPESHIE</span>
            </div>
            <div>
              <span className='label normal_14'> REQUEST DATE</span>
              <span className='content medium_18'>06•10•2016</span>
            </div>
            <div>
              <span className='label normal_14'>HOUSE-TYPE</span>
              <span className='content medium_18'>5-BEDROOM DUPLEX</span>
            </div>
          </div>
          <div>
            <div>
              <span className='label normal_14'>cleaning date</span>
              <span className='content medium_18'>09•10•2019</span>
            </div>
            <div>
              <span className='label normal_14'> REQUEST TIME</span>
              <span className='content medium_18'>8:00 A.M</span>
            </div>
          </div>
        </div>
        <hr />
        <div className='actions_wrapper'>
          <span
            onClick={() => setShowDropDown(!showDropDown)}
            className='actions medium_18'
          >
            Actions
            <img src={dropDown} alt='' />
            <div
              className={` drop_down ${
                showDropDown ? 'show_drop_down' : 'hide_drop_down'
              }`}
            >
              <span className='normal_16'>Contact Customer</span>
              <Link
                className='normal_16'
                to={`${props.match.url}/generateinvoice`}
              >
                {' '}
                Generate invoice
              </Link>
              <span className='normal_16'>Reject request</span>
            </div>
          </span>
        </div>
      </section>
    </RequestDetailsStyle>
  );
};

export default withRouter(RequestDetails);

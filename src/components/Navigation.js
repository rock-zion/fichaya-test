import React from 'react';
import { NavigationStyle } from '../style/navigation';
import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import chevronDown from '../assets/icons/chevron_down.svg';
import notificationBell from '../assets/icons/notification_bell.svg';
import newNotification from '../assets/icons/dot.svg'
import profileIcon from '../assets/icons/profile_icon.svg';

export default function Navigation() {
  return (
    <NavigationStyle>
      <div className="nav_container">
        <img className='brand' src={logo} alt='' />
        <div className='nav_links'>
          <NavLink
            to='/dashboard'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to='/customers'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            CUSTOMERS
          </NavLink>
          <NavLink
            to='/associates'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            ASSOCIATES
          </NavLink>
          <NavLink
            to='/requests'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            REQUESTS
          </NavLink>
          <NavLink
            to='/schedules'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            SCHEDULES
          </NavLink>
          <NavLink
            to='/payments'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            PAYMENTS
          </NavLink>
          <NavLink
            to='/settings'
            className='nav_link'
            activeClassName='active_nav_link'
          >
            SETTINGS
          </NavLink>
        </div>
        <div className='notification_profile_wrapper'>
          <div className='notification_bell_wrapper'>
            <img className='notification_bell' src={notificationBell} alt='' />
            <img className='new_notification_indicator' src={newNotification} alt='' />
          </div>
          <div className='profile_wrapper'>
            <img src={profileIcon} alt='' />
            <img src={chevronDown} alt='' />
          </div>
        </div>
      </div>
    </NavigationStyle>
  );
}

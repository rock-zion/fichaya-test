import styled from 'styled-components'
import * as color from './color.json'

export const NavigationStyle = styled.nav`
  height: 70px;
  background-color: ${color.white};
  display: flex;
  padding: 0 8.33%;
  width: 100vw;
  align-items: center;

  .nav_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav_links{
    display: flex;
    gap: 38px;
    font-size: 16px;
    color: ${color.black}
  }

  .nav_link{
    color: ${color.black};
    padding: 20px 0;
  }

  .active_nav_link{
    color: ${color.altBlue};
    border-bottom: 2px solid ${color.altBlue};
    padding: 20px 0;
  }

  .notification_profile_wrapper{
    display: flex;
    gap: 5.6px;
  }

  .notification_bell_wrapper, .profile_wrapper {
    background-color: ${color.blue};
    width: auto;
    display: flex;
    border-radius: 4px;
  }

  .notification_bell_wrapper{
    padding: 12px;
  }

  .profile_wrapper{
    display: flex;
    gap: 10px;
    padding: 12px 16px;
  }

`
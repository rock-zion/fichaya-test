import styled from 'styled-components';
import * as color from './color.json';

export const RequestDetailsStyle = styled.div`
  section {
    background-color: ${color.white};
    border: 1px solid ${color.grey};
    border-radius: 10px;
    padding: 32px;
    min-height: 381px;
    width: 682px;
  }
  .details_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
  }

  .label {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .content {
    display: block;
    color: ${color.altBlue};
    margin-bottom: 36px;
    letter-spacing: 0.04em;
  }

  .generated {
  }

  .ungenerated {
    width: fit-content;
    font-weight: 500;
    font-size: 14px;
    color: ${color.orange};
    padding: 4px 13px;
    background-color: rgba(255, 153, 31, 0.15);
    border-radius: 4px;
  }

  hr {
    border: 1px solid ${color.grey};
    margin-bottom: 21px;
  }

  .actions_wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .actions {
    color: ${color.white};
    background-color: ${color.blue};
    display: flex;
    align-items: center;
    gap: 88px;
    padding: 10px 24px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
  }

  .hide_drop_down {
    opacity: 0;
    transform: translateY(10px)
  }

  .show_drop_down{
    opacity: 1;
  }

  .drop_down {
    width: 100%;
    position: absolute;
    right: 10px;
    bottom: 40px;
    background-color: ${color.white};
    color: ${color.black};
    border-radius: 4px;
    box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;

    span, a{
      display: block;
      border-bottom: 1px solid ${color.grey};
      padding-left: 17px;
      
    }

    span:last-child{
      border: none;
    }
  }
`;

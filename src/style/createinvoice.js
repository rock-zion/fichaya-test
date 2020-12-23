import styled from 'styled-components';
import * as color from './color.json';

export const CreateInvoiceStyle = styled.section`
  .invoice {
    width: 580px;
    background: ${color.white};
    border: 1px solid #ededed;
    border-radius: 10px;
    padding: 24px 40px;
    margin-bottom: 20px;
  }

  .heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .sender {
    margin-bottom: 27px;
  }


  .receiver_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .sender_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 27px;
  }

  .sender,
  .receiver {
    font-weight: 600;
    font-size: 16px;
    color: ${color.altGrey};
  }

  .unpaid{
    color: ${color.red}
  }

  .status{

  }

  .title {
    letter-spacing: 0.04em;
    color: ${color.black};
  }

  .sender_status_wrapper {
    margin-bottom: 40px;
  }

  .btn_wrapper {
    width: 580px;
    column-gap: 13px;
  }

  .row{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .total{
    color: ${color.altBlue}
  }
`;

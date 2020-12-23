import styled from 'styled-components';
import * as color from './color.json';

export const DashContainerStyle = styled.section`
  width: 100vw;
  padding: 54px 8.33%;
  background-color: ${color.background};
  min-height: calc(100vh - 70px);

  .section_label {
    background-color: ${color.blue};
    color: ${color.white};
    padding: 1px 8px;
    border-radius: 4px;
    margin-bottom: 26px;
    display: inline-block;
  }

  .prompt {
    line-height: 23px;
    letter-spacing: 0.04em;
    color: ${color.black};
    margin-bottom: 20px;
  }
`;

import styled from 'styled-components'
import * as color from './color.json'

export const FormContainerStyle = styled.div`

background: ${color.white};
border: 1px solid ${color.grey};
border-radius: 10px;
padding: 40px 40px 0 40px;
min-height: 488px;

.input_wrapper{
  column-gap: 20px;
}
`
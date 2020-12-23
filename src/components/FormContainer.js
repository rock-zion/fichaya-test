import React from 'react'
import {FormContainerStyle} from '../style/formcontainer'

const FormContainer = (props) => {
  return (
    <FormContainerStyle>
      {props.children}
    </FormContainerStyle>
  )
}

export default FormContainer

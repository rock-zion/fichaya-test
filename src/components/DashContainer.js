import React from 'react'
import {DashContainerStyle} from '../style/dashboard'
export default function DashContainer(props) {
  return (
    <DashContainerStyle>
      {props.children}
    </DashContainerStyle>
  )
}

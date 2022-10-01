import {  TextField } from '@mui/material'
import React from 'react'

export default function InputField(props) {

  const {inputType,fieldWidth,fieldBorder,fieldPadding,fieldBorderRadius,fieldOutline,placeholder,fieldBackGroundColor} = props

  return (
    <>
    <input type={inputType}  placeholder={placeholder} style={{
      width : fieldWidth,
      border : fieldBorder,
      padding : fieldPadding,
      borderRadius : fieldBorderRadius,
      outline : fieldOutline,
      backgroundColor : fieldBackGroundColor ,
    }} />
    </>
  )
}

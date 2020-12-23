import React from 'react'

const Select = (props) =>  {
  const { label, name, handleChange, options} = props;
  return (
    <>
    <label className='input_label normal_16' htmlFor={name}>
      {label}
    </label>
    <br />
    <select className="width_100" onChange={handleChange}>
      {options.map((option,index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </>
  )
}


export default Select

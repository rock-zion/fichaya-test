import React from 'react';

const Input = (props) => {
  const { label, placeholder, type, disabled, name, handleChange, value } = props;
  return (
    <>
      <label className='input_label normal_16' htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className="input_label normal_18 width_100 spacing_bottom_20"
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={disabled}
        defaultValue={value}
      />
    </>
  );
};

export default Input;

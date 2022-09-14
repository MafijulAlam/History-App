import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, name }) => {
  const style = {
    padding: '0.25rem',
    borderRadius: '0.1rem',
    border: '1px solid gray',
    outline: 'none',
    width: '100%',
  };
  return (
    <>
      <input
        style={style}
        type="number"
        value={value}
        name={name}
        onChange={onChange}
      />
    </>
  );
};
Input.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Input;

import React from 'react';
import Input from '../ul/Input';
import PropTypes from 'prop-types';

const InputSection = ({ inputs, inputHandelChange }) => {
  return (
    <div
      style={{
        backgroundColor: '#efefef',
        // width: '100%',
        padding: '0.5rem 1rem',
        borderRadius: '0.12rem',
      }}
    >
      <h3 style={{ textAlign: 'center', margin: '0px', marginBottom: '1rem' }}>
        Inputs Fields
      </h3>
      <div
        style={{
          display: 'flex',
          alignItem: 'center',
          justifyContent: 'space-around',
          gap: '1rem',
        }}
      >
        <Input value={inputs.a} onChange={inputHandelChange} name="a" />
        <Input value={inputs.b} onChange={inputHandelChange} name="b" />
      </div>
    </div>
  );
};
InputSection.propTypes = {
  inputs: PropTypes.object.isRequired,
  inputHandelChange: PropTypes.func.isRequired,
};
export default InputSection;

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
// const operationItem = [
//   { id: shortid.generate(), text: '+', onClick: () => operationHandler('+') },
//   { id: shortid.generate(), text: '-', onClick: () => operationHandler('-') },
//   { id: shortid.generate(), text: '*', onClick: () => operationHandler('*') },
//   { id: shortid.generate(), text: '/', onClick: () => operationHandler('/') },
//   { id: shortid.generate(), text: '%', onClick: () => operationHandler('%') },
//   { id: shortid.generate(), text: 'Reset', onClick: resethandler },
// ];

const Button = ({ text, onClick, disabled, custStyle }) => {
  const disaleStyle = {
    backgroundColor: '#ddd',
    color: '#9e9595',
    cursor: 'default',
  };
  const style = {
    padding: '0.25rem 1rem',
    backgroundColor: '#ddd',
    color: '#212121',
    borderRadius: '0.10rem',
    cursor: 'pointer',
    border: 'none',
    ...custStyle,
    ...(disabled && disaleStyle),
  };
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};
Button.proptypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  custStyle: PropTypes.object,
};
Button.defaultProps = {
  custStyle: {},
  disabled: false,
};
export default Button;

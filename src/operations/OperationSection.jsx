import React from 'react';
import shortid from 'shortid';
import Button from '../ul/Button';
import PropTypes from 'prop-types';

const OperationSection = ({ operationHandler, resethandler }) => {
  const operationItem = [
    { id: shortid.generate(), text: '+', onClick: () => operationHandler('+') },
    { id: shortid.generate(), text: '-', onClick: () => operationHandler('-') },
    { id: shortid.generate(), text: '*', onClick: () => operationHandler('*') },
    { id: shortid.generate(), text: '/', onClick: () => operationHandler('/') },
    { id: shortid.generate(), text: '%', onClick: () => operationHandler('%') },
    { id: shortid.generate(), text: 'Reset', onClick: resethandler },
  ];

  return (
    <div style={{ marginLeft: '1rem' }}>
      <h4 style={{ marginBottom: '0.9rem' }}>Operations</h4>
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        {operationItem.map((item) => (
          <Button key={item.id} text={item.text} onClick={item.onClick} />
        ))}
      </div>
    </div>
  );
};
OperationSection.propTypes = {
  operationHandler: PropTypes.func.isRequired,
  resethandler: PropTypes.func.isRequired,
};
export default OperationSection;

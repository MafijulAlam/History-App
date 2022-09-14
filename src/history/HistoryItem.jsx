import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ul/Button';

const HistoryItem = ({ item, disabled, restoreHandler }) => {
  return (
    <div>
      <li
        key={item.id}
        style={{
          marginBottom: '1rem',
          listStyle: 'none',
        }}
      >
        <p style={{ margin: '0px' }}>
          Operations: {item.inputs.a} {item.op} {item.inputs.b} Result:
          {item.result}
        </p>
        <small>{item.date.toLocaleString()}</small>
        <br />
        <Button
          text="Restore"
          onClick={() => restoreHandler(item)}
          disabled={disabled}
        />
      </li>
    </div>
  );
};
HistoryItem.propTypes = {
  item: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  restoreHandler: PropTypes.func.isRequired,
};
HistoryItem.defaultProps = {
  disabled: false,
};
export default HistoryItem;

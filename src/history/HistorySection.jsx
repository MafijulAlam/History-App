import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';

const HistorySection = ({ histories, restoreHistory, restoreHandler }) => {
  return (
    <div style={{ marginLeft: '1rem' }}>
      <div>
        <h4>Histories</h4>
        {histories.length === 0 ? (
          <p className="pp">There is no History</p>
        ) : (
          <ul>
            {histories.map((item) => (
              <HistoryItem
                key={item.id}
                item={item}
                disabled={restoreHistory.id === item.id}
                restoreHandler={restoreHandler}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
HistorySection.propTypes = {
  histories: PropTypes.array.isRequired,
  restoreHistory: PropTypes.object.isRequired,
  restoreHandler: PropTypes.func.isRequired,
};
export default HistorySection;

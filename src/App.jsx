import './App.css';
import React, { useState } from 'react';
import InputSection from './inputs/InputSection';
import OperationSection from './operations/OperationSection';
import HistorySection from './history/HistorySection';

const initialState = {
  a: 0,
  b: 0,
};
function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();
const App = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRstoreHistory] = useState({});

  const inputHandelChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const operationHandler = (op) => {
    if (!inputState.a || !inputState.b) {
      alert('Invalid data');
    }
    const f = new Function(
      'op',
      `return ${inputState.a} ${op} ${inputState.b}`
    );
    // setResult(eval(`${inputState.a} ${op} ${inputState.b}`));
    const result = f(op);
    setResult(result);

    const historyItem = {
      id: getId.next().value,
      op,
      inputs: inputState,
      date: new Date(),
      result,
    };
    setHistories([historyItem, ...histories]);
  };

  const resethandler = () => {
    setInputState({ ...initialState });
    setResult(0);
  };
  const restoreHandler = (historyitem) => {
    setInputState({ ...historyitem.inputs });
    setResult(historyitem.result);
    setRstoreHistory(historyitem);
  };

  return (
    <div className="main">
      <h1 className="appName">History App</h1>
      <h2 className="pp">Result:{result}</h2>
      <InputSection inputs={inputState} inputHandelChange={inputHandelChange} />
      <OperationSection
        operationHandler={operationHandler}
        resethandler={resethandler}
      />
      <HistorySection
        histories={histories}
        restoreHandler={restoreHandler}
        restoreHistory={restoreHistory}
      />
    </div>
  );
};

export default App;

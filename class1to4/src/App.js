import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  let countState = useState(0);
  // let [count, setCount] = useState(10);
  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent name="Abrar" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

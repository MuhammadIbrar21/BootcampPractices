import React, { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {

  let [isMorning, setMorning] = useState(true);
  let [count, setCount] = useState(0);

    return(
      <div className={`box ${isMorning ? 'dayLight' : ''}`}>
        <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
        {/* Counter Operator Start*/}
        <Message counter={count}/>
        <button onClick={()=> setCount(++count)}>
          Update Counter
        </button>
        {/* Counter Operator End*/}

        {/* Day Night operator button Start*/}
        <button onClick={()=> setMorning(!isMorning)}>
          Update Day
        </button>
        {/* Day Night operator button End*/}
        
      </div>
  );
}

export default App;

import React, { useContext } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';

const Child = () => {
    let CounterValue = useContext(CounterContext)
    return (
        <div>
            <h1>This is first Child using Context API</h1>
            <h4>Counter Value is: {CounterValue[0]}</h4>
            <button onClick={() => (CounterValue[1](++CounterValue[0]))}>
                INCREMENT CONTEXT
            </button>
        </div>
    )
}
export default Child;
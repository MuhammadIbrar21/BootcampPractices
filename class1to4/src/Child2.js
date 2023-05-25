import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h1>This is Second Child using REDUCER</h1>
            <h4>Value of Counter by REDUCER: {state}</h4>
            <button onClick={() => dispatch('INCREMENT')}>
                INCREMENT REDUCER
            </button>
        </div>
    )
}
export default Child2;
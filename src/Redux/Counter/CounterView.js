import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByValue } from './CounterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => { dispatch(reset()) }}>Reset</button>
      <h2>Counter : {count}</h2>
      <button onClick={() => { dispatch(decrement()) }}>Decrement</button> <button onClick={() => { dispatch(increment()) }}>Increment</button> <button onClick={() => { dispatch(incrementByValue(5)) }}>IncrementByValue</button>
    </div>
  );
};

export default CounterView;
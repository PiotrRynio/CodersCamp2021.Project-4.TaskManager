import React from 'react';
import { RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from 'store';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(incrementCounter())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrementCounter())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

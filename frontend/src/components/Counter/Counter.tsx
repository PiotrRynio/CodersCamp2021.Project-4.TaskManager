import { decrementCounter, incrementCounter } from 'states/slices';
import { useAppDispatch, useAppSelector } from 'states/hooks/hooks';

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

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

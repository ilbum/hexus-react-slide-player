// CounterComponent.tsx
import React from 'react';

type Props = {
  initialValue: number;
};

const CounterComponent = (props: Props) => {
  const [count, setCount] = React.useState(props.initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;

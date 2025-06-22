import React, { useState, useReducer } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment} style={styles.button}>
          Increment
        </button>
        <button onClick={decrement} style={styles.button}>
          Decrement
        </button>
        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
  },
};
///below is using usereducer
function counterReducer(state, action) {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 };
    case 'Decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}
const Counter2 = () => {
  const intialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, intialState);

  return (
    <div style={styles.container}>
      <h1>Counter2</h1>
      <h2>{state.count}</h2>
      <div>
        <button
          onClick={() => dispatch({ type: 'Increment' })}
          style={styles.button}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'Decrement' })}
          style={styles.button}
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
          style={styles.button}
        >
          reset
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Counter1 />
      <Counter2 />
    </>
  );
}

export default App;

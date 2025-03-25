import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>
        Decrease
      </button>
      <button onClick={() => setCount(count + 1)} style={{ padding: '0.5rem 1rem' }}>
        Increase
      </button>
    </div>
  );
}

export default App;

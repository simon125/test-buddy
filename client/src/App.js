import { useState, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(() => 0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <>
    <h1>HELLO </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {}

  return num * 2;
}

export default App;

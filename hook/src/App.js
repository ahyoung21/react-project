import React, { useState, useEffect } from 'react';

const App = () => {
  // const [count, setCount] = useState(0);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // cdm + cdu
  useEffect(() => {
    console.log('component');
  }, [username]);

  return (
    <div>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count + 1)}>increase</button> */}

      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  );
};

export default App;

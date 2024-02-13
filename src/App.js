import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleAddClick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log('State changed: ', count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default App;

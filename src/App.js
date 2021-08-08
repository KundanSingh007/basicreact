import './App.css';
import React, { useState } from 'react';

function App() {

  const [data, setData] = useState("kundan");
  const [hello, setHello] = useState("run");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData("singh")}>Update data</button>

      <h2>{hello}</h2>
      <button onClick={()=>setHello("byeeee")}>hello change</button>
    </div>
  );
}

export default App;

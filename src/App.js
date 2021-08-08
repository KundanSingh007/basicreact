import './App.css';
import React, { useState } from 'react';
import User from './User';


function App() {

  
  return (
    <div className="App">
       <h1>app components</h1>
       <User data={{name:'kundan singh', age:26}} />
    </div>
  );
}

export default App;

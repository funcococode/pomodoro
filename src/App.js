import './App.css';
import Timer from './Components/Timer';
import React, { useState, useEffect } from 'react'

function App() {
  let [minutes,setMinutes] = useState(5);
  return (
    <div className="App">
      <Timer minutes={minutes} />
    </div>
  );
}

export default App;

import './App.css';
import React, { useState,useEffect } from 'react';

function App() {
 const [clickCount,setClickCount] = useState(0) 
 useEffect(() => {
   if(clickCount <= 0) {
     setClickCount(0)
   } else {
document.title = `${clickCount}`
   }

 },[clickCount])
  return (
    <div className="App">
      <button onClick={() => setClickCount(clickCount + 1)}>Add Click</button>
  <p>You've Clicked {clickCount} Times</p>
  <button onClick={() => setClickCount(clickCount - 1)}>Remove click</button>
    </div>
  );
}

export default App;

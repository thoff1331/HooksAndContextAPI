import './App.css';
import React, { useState,useEffect } from 'react';

function App() {
 const [clickCount,setClickCount] = useState(0) 
 const [darkTheme,setdarkTheme] =  useState(false)
 useEffect(() => {
   if(clickCount <= 0) {

     setClickCount(0)
     document.title = `${clickCount}`

   } else {
document.title = `${clickCount}`
   }

 },[clickCount])
  return (
    <div className={`${darkTheme}`}>
      <div className='element-container'>
      <button onClick={() => setClickCount(clickCount + 1)}>Add Click</button>
  <p>You've Clicked {clickCount} Times</p>
  <button onClick={() => setClickCount(clickCount - 1)}>Remove click</button>
  <div>
  </div>  
    <button onClick={() => setdarkTheme( darkTheme => !darkTheme)}>{darkTheme ? "Dark Mode" : "Light Mode"}</button>
  </div>
    </div>
  );
}

export default App;

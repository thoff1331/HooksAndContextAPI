import './App.css';
import React from 'react';
import { HashRouter } from "react-router-dom";
import routes from './routes';


function App() {
 
  return (

      <HashRouter>
        {routes}
      </HashRouter>
    );
  
}

export default App;

import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './navbar.css'


function Navbar() {
return (
    <HashRouter>
    <div className='navbar-container'>
 <Link to='/'><h1>Click Count</h1></Link>
    <Link to='/clock' ><h1>Pomodoro Clock</h1></Link>
  <Link to='/todo'><h1>To Do List</h1></Link>
    </div>
     </HashRouter>
)

}


export default Navbar
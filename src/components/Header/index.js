import React from 'react';
import './Header.css'; // renamed App.css
import logo from './logo.svg';

/*  React makes heavy usage of new
 *  ES2015 and ES2016 language features.
 *  Components in React can be written 
 *  as a class or a function.
 */ 
const Header = () => { 
  return (
    <div> 
    {/* jsx and css for Header cut from App.js */}
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}
export default Header;
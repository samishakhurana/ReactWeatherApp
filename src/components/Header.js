import React from 'react';
import './components.scss'

function Header () {
  return (
    <div className="header-container">
      <p className="header-container__quote">
        Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather
      </p>
      <p className="header-container__location">
        Showing weather forecast for Panipat, Haryana
      </p>
      <div>
        <input type="radio" name="temp" value="celsius" defaultChecked /> Celsius
        <span> |</span>
        <input type="radio" name="temp" value="farenheit" /> Farenheit
      </div>
    </div>
  );
}

export default Header;
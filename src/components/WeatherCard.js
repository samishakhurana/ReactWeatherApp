import React from 'react'
import './components.scss'

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={`card-container`}>
        <h2>FRIDAY</h2>
        <span className="grey-text">March 1st, 1:00pm</span>
        <br />
        <img src="https://cdn0.iconfinder.com/data/icons/weaher-forecast/128/weatherForecast-27-512.png" />
        <h2>2&deg; C</h2>
        <p>Broken clouds</p>
      </div>
    );
  }
}

export default WeatherCard;

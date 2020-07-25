import React from 'react'
import constants from '../constants'
import './components.scss'

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
  }
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    return (
      <div className={`card-container ${this.props.selected ? `selected-card` : ''}`}>
        {/* <h2>{this.props.weatherInfo}</h2> */}
        {this.props.weatherInfo && Object.keys(this.props.weatherInfo).length > 0 &&
          <div>
            <h2>{constants.days[new Date(this.props.weatherInfo.dt*1000).getDay()].toUpperCase()}</h2>
            <span className="grey-text">{constants.months[new Date(this.props.weatherInfo.dt*1000).getMonth()]} {new Date(this.props.weatherInfo.dt*1000).getDate()}, {new Date(this.props.weatherInfo.dt*1000).getFullYear()}</span>
            <br />
            {/* <i className={`owf owf-${this.props.weatherInfo.weather[0].id} owf-5x`}></i> */}
            <img alt="weather representation" src="https://cdn0.iconfinder.com/data/icons/weaher-forecast/128/weatherForecast-27-512.png" />
            <h2>{this.props.weatherInfo.main.temp}&deg; {this.props.degreeType === 'celsius' ? 'C' : 'F'}</h2>
            <p>{this.props.weatherInfo.weather[0].description}</p>
          </div>
        }
      </div>
    );
  }
}

export default WeatherCard;

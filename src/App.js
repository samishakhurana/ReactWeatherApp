import React from 'react';
import Header from "./components/Header"
import WeatherCard from "./components/WeatherCard"
import MyChart from "./components/HourlyChart"
import apiKey from './apiKeys'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempType: 'celsius',
      selectedDay: 0,
      weatherData : []
    }
  }
  componentWillMount () {
    this.callWeatherInfoApi()
  }

  tempTypeChanged (value) {
    console.log(value)
    this.setState({tempType: value})
    this.callWeatherInfoApi()
  }

  callWeatherInfoApi () {
    var url=`http://api.openweathermap.org/data/2.5/forecast?zip=132103,in&units=${this.state.tempType === 'celsius' ? 'imperial' : 'metric'}&appid=${apiKey.key}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({weatherData: data.list})
      })
  }

  getWeatherInfo (index) {
    return this.state.weatherData[index*8]
  }

  render () {
    return (
      <div className="app-container">
        <Header text="abcd" degreeTypeChange={this.tempTypeChanged.bind(this)}/>
        <div className="app-container__card">
          {[1,2,3,4,5].map((day,index) => (
            <WeatherCard
              selected={index===this.state.selectedDay}
              weatherInfo={this.state.weatherData[index*8]}
              degreeType={this.state.tempType}
              />))}
        </div>
        <div className="app-container__chart">
          <MyChart />
        </div>
      </div>
    );
  }
}

export default App;

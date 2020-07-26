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
      weatherData : [],
      hourlyWeatherInfo: []
    }
  }
  componentDidMount () {
    this.callWeatherInfoApi()
  }

  tempTypeChanged (value) {
    console.log(value)
    this.setState({tempType: value}, this.callWeatherInfoApi)
  }

  callWeatherInfoApi () {
    var url=`http://api.openweathermap.org/data/2.5/forecast?zip=132103,in&units=${this.state.tempType === 'celsius' ? 'metric' : 'imperial'}&appid=${apiKey.key}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({weatherData: data.list})
      })
  }

  getWeatherInfo (index) {
    return this.state.weatherData[index*8]
  }

  selectedDayChange (index) {
    this.setState({selectedDay: index})
    var weatherObjIndex = index*8
    var hourlyWeatherInfo = []
    for(var i=weatherObjIndex; i < (weatherObjIndex + 8); i++) {
      var obj = []
      var time = new Date(this.state.weatherData[i].dt*1000).getHours()
      var temp = this.state.weatherData[i].main.temp
      obj.push(temp)
      obj.push(time)
      hourlyWeatherInfo.push(obj)
    }
    this.setState({hourlyWeatherInfo})
    console.log(hourlyWeatherInfo)
  }

  render () {
    return (
      <div className="app-container">
        <Header text="abcd" degreeTypeChange={this.tempTypeChanged.bind(this)}/>
        <div className="app-container__card">
          {[1,2,3,4,5].map((day,index) => (
            <WeatherCard
              key={index}
              selected={index===this.state.selectedDay}
              weatherInfo={this.state.weatherData[index*8]}
              degreeType={this.state.tempType}
              selectedDay={index}
              onSelectedDayChange={this.selectedDayChange.bind(this)}
              />))}
        </div>
        <div className="app-container__chart">
          {/* <MyChart hourlyWeatherInfo={this.state.hourlyWeatherInfo}/> */}
        </div>
      </div>
    );
  }
}

export default App;

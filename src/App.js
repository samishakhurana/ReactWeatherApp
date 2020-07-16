import React from 'react';
import Header from "./components/Header"
import WeatherCard from "./components/WeatherCard"
import apiKey from './apiKeys'
import './App.scss';

class App extends React.Component {
  componentDidMount () {
    var url=`http://api.openweathermap.org/data/2.5/forecast?zip=132103,in&appid=${apiKey.key}`
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render () {
    return (
      <div className="app-container">
        <Header text="abcd" />
        <div className="app-container__card">
          {[1,2,3,4,5].map(day => (<WeatherCard />))}
        </div>
      </div>
    );
  }
}

export default App;

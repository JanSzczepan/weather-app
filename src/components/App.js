import React, {Component} from 'react';
import './App.css';
import Details from './Details';
import Form from './Form';
import Result from './Result';

const API_KEY = 'f00a157958cfde0f24c05b9a0b456a37';

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    weather: '',
    temp: '',
    cloudy: '',
    humidity: '',
    wind: '',
    rain: '',
    snow: '',
    icon: '',
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleAPI = (API) => {
    fetch(API)
      .then(response => {
        if(response.ok) return response.json()
        else throw Error('Invalid API')
      })
      .then(data => {
        console.log(data);
        // What to do if data has empty array???
        if(!data.list.length) throw Error('Invalid request')
        //

        let rainV = null;
        let snowV = null;

        if(data.list[0].rain) 
          for (let prop in data.list[0].rain) {
            rainV = data.list[0].rain[prop];
            break;
          }
        if(data.list[0].snow) 
          for (let prop in data.list[0].snow) {
            snowV = data.list[0].snow[prop];
            break;
          }

        this.setState({
          city: data.list[0].name,
          weather: data.list[0].weather[0].main,
          temp: data.list[0].main.temp,
          cloudy: data.list[0].clouds.all,
          humidity: data.list[0].main.humidity,
          wind: data.list[0].wind.speed,
          rain: rainV,
          snow: snowV,
          err: false,
        });
  
        this.handleWeatherIcon(this.state.weather);
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          city: prevState.value,
          err: true,
        }))
      })
  }

  handleWeatherIcon = (weather) => {
    if(weather === 'Thunderstorm') 
      this.setState({icon: 'fas fa-poo-storm'});
    else if(weather === 'Drizzle' || weather === 'Rain') 
      this.setState({icon: 'fas fa-cloud-showers-heavy'});
    else if(weather === 'Snow') 
      this.setState({icon: 'fas fa-snowflake'});
    else if(weather === 'Mist' || weather === 'Smoke' || weather === 'Haze' || weather === 'Dust' || weather === 'Fog' || weather === 'Sand' || weather === 'Dust' || weather === 'Ash' || weather === 'Squall' || weather === 'Tornado')
      this.setState({icon: 'fas fa-smog'});
    else if(weather === 'Clear') 
      this.setState({icon: 'fas fa-sun'});
    else if(weather === 'Clouds') 
      this.setState({icon: 'fas fa-cloud'});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const API = `http://api.openweathermap.org/data/2.5/find?q=${this.state.value}&units=metric&lang=en&appid=${API_KEY}`;

    this.handleAPI(API);
  }

  render() {
    return (
      <div className="container">
        <main className="app">
          <section className="app__result">
            <Result weatherData={this.state}/>
          </section>
          <aside className="app__aside">
            <Form 
              value={this.state.value} 
              change={this.handleInputChange}
              submit={this.handleSubmit}
            />
            <Details weatherData={this.state}/>
          </aside>
        </main>
      </div>
    );
  }
}

export default App;

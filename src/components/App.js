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
    fall: '',
    err: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const API = `http://api.openweathermap.org/data/2.5/find?q=${this.state.value}&units=metric&lang=en&appid=${API_KEY}`;

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
        this.setState({
          city: data.list[0].name,
          weather: data.list[0].weather[0].main,
          temp: data.list[0].main.temp,
          cloudy: data.list[0].clouds.all,
          humidity: data.list[0].main.humidity,
          wind: data.list[0].wind.speed,
          fall: {rain: data.list[0].rain, snow: data.list[0].snow},
          err: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          city: prevState.value,
          err: true,
        }))
      })
  }

  render() {
    return (
      <div className="container">
        <main className="app">
          <section className="app__result">
            <Result />
          </section>
          <aside className="app__aside">
            <Form 
              value={this.state.value} 
              change={this.handleInputChange}
              submit={this.handleSubmit}
            />
            <Details />
          </aside>
        </main>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Details from './Details';
import Form from './Form';
import Result from './Result';

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
    err: '',
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const API = `http://api.openweathermap.org/data/2.5/find?q=${this.state.value}&units=metric&lang=en&appid=f00a157958cfde0f24c05b9a0b456a37`;

    fetch(API)
      .then(response => {
        if(response.ok) return response.json()
        else throw Error('Invalid API')
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
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

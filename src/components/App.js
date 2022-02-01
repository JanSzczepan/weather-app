import React, {Component} from 'react';
import './App.css';
import Details from './Details';
import Form from './Form';
import Result from './Result';

class App extends Component {
  state = {
    value: '',
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
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
            <Form value={this.state.value} change={this.handleInputChange}/>
            <Details />
          </aside>
        </main>
      </div>
    );
  }
}

export default App;

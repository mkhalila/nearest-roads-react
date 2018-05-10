import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      roads: {}
    }
  }

  componentDidMount() {
    fetch('/fromLocation?lat=51.42&lon=-0.148&distance=1000')
    .then(response => {
      return response.json();
    })
    .then(resRoads => {
      this.setState({ roads: resRoads.roads })
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <code>{ JSON.stringify(this.state.roads) }</code>
      </div>
    );
  }
}

export default App;

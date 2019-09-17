import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my React Blog</h2>
        </div>

        <div className="App-links">
          <dvi className="App-link">
            <a href="">
              Home
            </a>
          </dvi>

          <dvi className="App-link">
            <a href="">
              Blog Post 1
            </a>
          </dvi>

          <dvi className="App-link">
            <a href="">
              Blog Post 2
            </a>
          </dvi>
        </div>
      </div>
    );
  }
}

export default App;

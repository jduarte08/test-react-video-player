import React, { Component } from 'react';
import logo from './../images/logo.svg';
import './../styles/App.css';
import Video from "../components/Video"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Video Media Player</h1>
        </header>
        <Video/>
      </div>
    );
  }
}

export default App;

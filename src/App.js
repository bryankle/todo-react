import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './style/App.css';
import TaskContainer from './TaskContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <TaskContainer/>
      </div>
    );
  }
}

export default App;

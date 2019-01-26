import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>El chat de Terra</h1>
          <Chat/>      
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import  NewChat  from './components/NewChat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>El chat de Terra</h1>
          <NewChat/>      
        </header>
      </div>
    );
  }
}

export default App;

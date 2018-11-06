import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/"><p>test</p></Route>
      </div>
    );
  }
}

export default App;
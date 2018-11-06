import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import ProfileListContainer from './components/ProfileListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfileListContainer />
        <Route exact path="/"><p>test</p></Route>
      </div>
    );
  }
}

export default App;
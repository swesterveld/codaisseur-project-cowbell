import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import ProfileListContainer from './components/ProfileListContainer';
import SettingsContainer from './components/SettingsContainer';
import MatchesContainer from './components/MatchesContainer';
import HeaderContainer from './components/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={HeaderContainer} />
        <Route exact path="/" component={ProfileListContainer} />
        <Route exact path="/profile-list" component={ProfileListContainer} />
        <Route exact path="/settings" component={SettingsContainer} />
        <Route exact path="/matches" component={MatchesContainer} />
      </div>
    );
  }
}

export default App;
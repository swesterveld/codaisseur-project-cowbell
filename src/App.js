import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import ProfileBrowserContainer from './components/ProfileBrowserContainer';
import SettingsContainer from './components/SettingsContainer';
import MatchesContainer from './components/MatchesContainer';
import HeaderContainer from './components/HeaderContainer';
import ProfileCardContainer from './components/ProfileCardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={HeaderContainer} />
        <Route exact path="/" component={ProfileBrowserContainer} />
        <Route exact path="/profile-list" component={ProfileBrowserContainer} />
        <Route exact path="/settings" component={SettingsContainer} />
        <Route exact path="/matches" component={MatchesContainer} />
        <Route exact path="/matches/:userId" component={ProfileCardContainer} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react'
import SearchPreferences from './SearchPreferences';
import {connect} from 'react-redux';
import {addFilter} from '../actions/addFilter';
import {removeFilter} from '../actions/removeFilter';
import {changeFilter} from '../actions/changeFilter';
import {Profile} from '../Profile';

class SearchPreferencesContainer extends Component {
  state = {  }

  addFilter(name, filterFunction, extraArgument=null) {
    this.props.addFilter(this.props.currentUserId, name, filterFunction, extraArgument);
  }

  removeFilter(name, filterFunction, extraArgument=null) {
    this.props.removeFilter(this.props.currentUserId, name, filterFunction, extraArgument);
  }

  changeFilter(name, filterFunction, extraArgument=null) {
    this.props.changeFilter(this.props.currentUserId, name, filterFunction, extraArgument);
  }

  onChangeGenre = (event) => {
    const genreToChange = event.target.value;
    // oh en deze filterfunctie is ook niet meer in de oorspornkelijke vorm met dat 'genres' niet gebruikt wordt?
    const functionToChange = genres => eval(`genres.includes('${genreToChange}')`); // Template-probleem...  dit lijkt het te fixen maar vind het nog steeds vaag dat dit de enige manier lijkt te zijn lol
    // const functionToChange = new Function('genre', ``)
    // genres => genres.includes('Pop'); // Template-probleem...
    console.log(functionToChange);  
    
    if (event.target.checked) {
      this.addFilter('genres', functionToChange, genreToChange);
    }
    else {
      this.removeFilter('genres', functionToChange, genreToChange);
    }
  }

  onChangeLocation = (event) => {
    let locations = this.props.userFilters.find(filter => filter[0] === 'location')[2]
    const locationToChange = event.target.value;
    if (event.target.checked && !locations.includes(locationToChange)) {
      locations.push(locationToChange);
      console.log('adding');
    }
    else if (!event.target.checked && locations.includes(locationToChange)) { 
      const spliceIndex = locations.findIndex((item) => item === locationToChange);
      locations.splice(spliceIndex, 1);
      console.log('removing');
    }
    console.log(locations);
    const functionToChange = location => eval(`${JSON.stringify(locations)}.includes(location)`)
    this.changeFilter('location', functionToChange, locations);
  }

  componentDidMount() {
    this.addFilter('location', () => true, Profile.locations());
  }
  
  render() { 
    return ( <SearchPreferences onChangeGenre={this.onChangeGenre} onChangeLocation={this.onChangeLocation} userFilters={this.props.userFilters}/> );
  }
}
 
const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
    userFilters: state.profiles[state.currentUserId].filters
  }
}

export default connect(mapStateToProps, {addFilter, removeFilter, changeFilter})(SearchPreferencesContainer);
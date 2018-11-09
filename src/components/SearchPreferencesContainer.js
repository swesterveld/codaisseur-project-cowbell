import React, { Component } from 'react'
import SearchPreferences from './SearchPreferences';
import {connect} from 'react-redux';
import {addFilter} from '../actions/addFilter';
import {removeFilter} from '../actions/removeFilter';
import {changeFilter} from '../actions/changeFilter';

class SearchPreferencesContainer extends Component {
  state = {  }

  addFilter(name, filterFunction, extraArgument=null) {
    this.props.addFilter(this.props.currentUserId, name, filterFunction, extraArgument);
  }

  removeFilter(name, filterFunction, extraArgument=null) {
    this.props.removeFilter(this.props.currentUserId, name, filterFunction, extraArgument);
  }

  onChangeGenre = (event) => {
    const genreToChange = event.target.value
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
  
  render() { 
    return ( <SearchPreferences onChangeGenre={this.onChangeGenre} userFilters={this.props.userFilters}/> );
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
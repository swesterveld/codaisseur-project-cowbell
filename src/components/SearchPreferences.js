import React, { Component } from 'react';
import {Profile} from '../Profile';

const GENRES = Profile.genres();

class SearchPreferences extends Component {  
  state = {

  }

  updateFilters() {
    // Genres
    const genreFilters = this.props.userFilters.filter(filter => filter[0] === 'genres')
    genreFilters.forEach(filter => {this.setState({ 'Rock': true })}) // Weer zo'n template-probleem!
    this.setState()
  }

  componentDidMount() {
    this.updateFilters()
  }
  
  render() { 
    return ( <div>
      <div>
        <p>Genres (has to include all checked boxes)</p>
        <form>
          {GENRES.map(genre => <p key={genre}><input type="checkbox" value={genre} checked={this.state[genre] || false} onChange={this.props.onChangeGenre}/> {genre} </p>)}
        </form>
      </div>
    </div> );
  }
}
 
export default SearchPreferences;
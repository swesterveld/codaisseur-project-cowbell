import React, { Component } from 'react';
import {Profile} from '../Profile';

const GENRES = Profile.genres();

class SearchPreferences extends Component {  
  state = {

  }

  updateFilters() {
    // Genres, dit kan vast efficienter
    const genreFilters = this.props.userFilters.filter(filter => filter[0] === 'genres')
    console.log(genreFilters);
    GENRES.forEach(filter => {
      if (this.state[filter] && !genreFilters.find(filterArray => filterArray[2] === filter)) {
        this.setState({ [filter]: false })
      }
    })
    genreFilters.forEach(filterArray => {
      if (!this.state[filterArray[2]]) {
        this.setState({ [filterArray[2]]: true })
      }
    })
  }

  componentDidMount() {
    this.updateFilters()
  }

  handleGenreChange = (e) => {
    this.props.onChangeGenre(e);
    this.updateFilters();
  }
  
  render() { 
    return ( <div>
      <div>
        <p>Genres (has to include all checked boxes)</p>
        <form>
          {GENRES.map(genre => <p key={genre}><input type="checkbox" value={genre} checked={this.state[genre] || false} onChange={this.handleGenreChange}/> {genre} </p>)}
        </form>
      </div>
    </div> );
  }
}
 
export default SearchPreferences;

import React, { Component } from 'react';
import {Profile} from '../Profile';

const GENRES = Profile.genres();
const LOCATIONS = Profile.locations();

class SearchPreferences extends Component {  
  state = {  }

  updateFilters() {
    // Genres, dit kan vast efficienter
    const genreFilters = this.props.userFilters.filter(filter => filter[0] === 'genres')
    // console.log(genreFilters);
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

    // Locations
    LOCATIONS.forEach(location => {
      const filterIndex = this.props.userFilters.findIndex(filter => filter[0] === 'location');
      if (filterIndex === undefined || filterIndex < 0) {
        this.setState({[location]: true})
      }
      else {
        this.setState({[location]: this.filterIncludes('location', location)})
      }
    })
  }

  componentDidMount() {
    this.updateFilters();
    
  }

  handleGenreChange = (e) => {
    this.props.onChangeGenre(e);
    this.updateFilters();
  }

  handleLocationChange = (e) => {
    this.props.onChangeLocation(e);
    this.updateFilters();
  }

  filterIncludes = (filterName, string) => {
    const filterIndex = this.props.userFilters.findIndex(filter => filter[0] === filterName);
    if (filterIndex !== undefined) {
      if (this.props.userFilters[filterIndex][2]) {
        return this.props.userFilters[filterIndex][2].includes(string)
      }
      else return JSON.stringify(this.props.userFilters[filterName]).includes(string);
    }
    else return null;
  }
  
  render() { 
    return ( <div>
      <div>
        <p>Genres (AND logic)</p>
        <form>
          {GENRES.map(genre => <p key={genre}><input type="checkbox" value={genre} checked={this.state[genre] || false} onChange={this.handleGenreChange}/> {genre} </p>)}
        </form>
      </div>
      <div>
        <p>Locations (OR logic)</p>
        <form>
          {LOCATIONS.map(location => <p key={location}><input type="checkbox" 
                                                              value={location}
                                                              checked={this.state[location] || false}
                                                              onChange={this.handleLocationChange}/> {location} </p>)}
        </form>
      </div>
    </div> );
  }
}
 
export default SearchPreferences;
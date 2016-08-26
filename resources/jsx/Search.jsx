import jQuery from 'jquery';
import $ from 'jquery';
import React from 'react';
const Giphy = require('giphy-api')();

import SearchResults from './SearchResults';

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    event.preventDefault();
    let searchTerm = $('#searchInput').val();

    Giphy.search(searchTerm, (err, res) => {
      this.setState({data: res.data})
    })
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="searchInput" />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.searchHandler}>Search</button>
        </form>
        <SearchResults data={this.state.data} />
      </div>
    )
  }
}

export default Search;
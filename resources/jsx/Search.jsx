global.jQuery = require('jquery');
import $ from 'jquery';

import Bootstrap from 'bootstrap3';
import React from 'react';
const Giphy = require('giphy-api')();

import SearchResults from './SearchResults';

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      trending: []
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    Giphy.trending({limit: 5}, (err, res) => {
      this.setState({trending: res.data});
    })
  }

  searchHandler(event) {
    event.preventDefault();
    let searchTerm = $('#searchInput').val();

    Giphy.search(searchTerm, (err, res) => {
      this.setState({data: res.data});
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
        <SearchResults data={this.state.data} trending={this.state.trending} />
      </div>
    )
  }
}

export default Search;
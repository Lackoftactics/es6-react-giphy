import _ from 'lodash';
import React from 'react';

import Carousel from './Carousel';

class SearchResults extends React.Component {

  render() {
    let results = this.props.data;
    let random = this.props.random;
    return (
      <div>
        <h1>Results</h1>

        <ol>
        {
          _.map(results, function(result) {
            return (
              <img src={result.images.downsized.url} className="img-thumbnail"
                data-toggle="tooltip" data-placement="top" title="Tooltip"
                 />
            );
          })
        }
      </ol>

      {
        _.map(results, function(result) {
          return (
            <img src={result.images.downsized.url} className="img-thumbnail"
              data-toggle="tooltip" data-placement="top" title="Tooltip"
               />
          );
        })
      }

    </div>
    )
  }
}

export default SearchResults;
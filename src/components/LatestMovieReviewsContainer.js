import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'JvXHHyovKchPWe40WqE3bdzlQYsS03M1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
<<<<<<< HEAD
	constructor() {
		super();
		this.state = {
			reviews: []
		}
	};

	componentDidMount() {
		// console.log(URL);
		fetch(URL)
		.then(response => response.json())
		.then(data => {
			//console.log(data.results);
			this.setState({
				reviews: data.results
			})
		})
	}
=======
>>>>>>> cd982668c49d6df9712bb9d954535d7c6faabedb

  render(){
    return (
      <div className="latest-movie-reviews">
<<<<<<< HEAD
      	<h2> Movie Reviews </h2>
      		<MovieReviews reviews={this.state.reviews} />
=======
>>>>>>> cd982668c49d6df9712bb9d954535d7c6faabedb
      </div>
    )
  }
}
export default LatestMovieReviewsContainer;

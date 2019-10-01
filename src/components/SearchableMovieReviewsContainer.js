import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JvXHHyovKchPWe40WqE3bdzlQYsS03M1';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMoviewReviewContainer extends Component {
<<<<<<< HEAD
	constructor(){
		super();
		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}

	handleOnChange = e => {
		console.log(e.target.value);
		this.setState({
			searchTerm: e.target.value
		})
	}

	handleOnSubmit = e => {
		e.preventDefault();
		console.log(`${SEARCH_URL}${this.state.searchTerm}`);
		fetch(`${SEARCH_URL}${this.state.searchTerm}`)
		.then(response => response.json())
		.then(data => {
			this.setState({
				reviews: data.results
			})
		})
	}

=======
>>>>>>> cd982668c49d6df9712bb9d954535d7c6faabedb

    render(){
      return(
        <div className="searchable-movie-reviews">
<<<<<<< HEAD
        <form onSubmit={this.handleOnSubmit}>
        	<input type="text" name="searchTerm" value={this.state.searchTerm}
        		onChange={this.handleOnChange} />
        	<input type="submit" value="Search" />
        </form>
      	<h3>Search Term: {this.state.searchTerm}</h3>
      	<MovieReviews reviews={this.state.reviews} />
=======
>>>>>>> cd982668c49d6df9712bb9d954535d7c6faabedb
        </div>
      )
    }
}

export default SearchableMoviewReviewContainer;

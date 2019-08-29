import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JvXHHyovKchPWe40WqE3bdzlQYsS03M1';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMoviewReviewContainer extends Component {
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


    render(){
      return(
        <div className="searchable-movie-reviews">
        <form onSubmit={this.handleOnSubmit}>
        	<input type="text" name="searchTerm" value={this.state.searchTerm}
        		onChange={this.handleOnChange} />
        	<input type="submit" value="Search" />
        </form>
      	<h3>Search Term: {this.state.searchTerm}</h3>
      	<MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}

export default SearchableMoviewReviewContainer;

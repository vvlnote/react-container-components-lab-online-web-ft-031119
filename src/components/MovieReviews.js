// Code MovieReviews Here
import React from 'react';

const Review = (props) => {
	//console.log(props.review);
	return(
		<div className='review'>
		<h3>{props.review.display_title}</h3>
		Rating: {props.review.mpaa_rating}
		<br/>
		critics_pick: {props.review.critics_pick}
		<br/>
		review: {props.review.summary_short}
		<br/>
		</div>
	)
}

const MovieReviews = (props) => {
	let reviews = props.reviews.map((review, id) => {
		return (
			<Review key={id} review={review} />
		)
	})
	return (
	  <div className="review-list">
	  	<h4> total reviews: {reviews.length}</h4>
    	{reviews}
  	  </div>
		)

}

export default MovieReviews;
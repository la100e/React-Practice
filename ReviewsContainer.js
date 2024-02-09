import React from 'react'
import StyledReviews from '../styledComponents/StyledReviews'
import Review from './Review';

export default function ReviewsContainer(props) {

    let reviews = props.reviews;

    return (
    <StyledReviews class="review" id="review">
        
        <div class="box-container">
            {
                reviews.map(review => <Review infos={review}/>)
            }
        </div>
    </StyledReviews>
    )
}

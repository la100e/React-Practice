import React from 'react'
import StyledReview from '../styledComponents/StyledReview'

export default function Review(props) {

  let customer = props.infos;

  return (
    <StyledReview class="box">
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p>{customer.review}</p>
        <div class="user">
            <img src="wallpapers/user.png" alt=""/>
            <div class="user-info">
                <h3>{customer.fullname}</h3>
            </div>
        </div>
        <span class="fas fa-quote-right">''</span>
    </StyledReview>
  )
}

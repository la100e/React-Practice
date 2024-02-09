import React from 'react'
import StyledCard from '../styledComponents/StyledCard'

export default function Card(props) {
    let infos = props.infos;
  return (
    <StyledCard className='box'>
        <span className="discount">-{infos.discount}%</span>
        <div className="image">
            <img src={`wallpapers/${infos.path}`} alt=""/>
            <div className="icons">
                <a href="#" className="fas fa-heart">heart</a>
                <a href="#" className="cart-btn">add to cart</a>
                <a href="#" className="fas fa-share">share</a>
            </div>
        </div>
        <div className="content">
            <h3>{infos.card} pot</h3>
            <h6>from the family of <span>{infos.category}</span></h6>
            <div className="price"> ${infos.price} <span>$ {infos.price*(1+infos.discount/100)} </span></div>
        </div>
    </StyledCard>
  )
}

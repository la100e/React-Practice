import React from 'react'
import StyledHeader from '../styledComponents/StyledHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
        <input type="checkbox" name="" id="toggler"/>
        <label htmlFor="toggler" className="fas fa-bars"></label>
        <a href="#" className="logo" onClick={() => navigate('/')}>flower <span>.</span></a>
        <nav class="navbar">
            {/* <Link to={'/home'}>home</Link> */}
            <a href="#home">home</a>
            {/* <Link to={'/about'}>about</Link> */}
            <a href="#about">about</a>
            {/* <Link to={'/products'}>products</Link> */}
            <a href="#products">products</a>
            {/* <Link to={'/review'}>review</Link> */}
            <a href="#review">review</a>
            {/* <Link to={'/contact'}>contact</Link> */}
            <a href="#contact">contact</a>
        </nav>
        <div class="icons">
            <a><FontAwesomeIcon className="fas fa-heart" icon={faHeart}/></a>
            <a onClick={() => navigate('/products')}><FontAwesomeIcon className="fas fa-shopping-cart" icon={faCartShopping}/></a>
            <a onClick={() => navigate('/login')}><FontAwesomeIcon className="fas fa-user" icon={faUser}/></a>
        </div>
    </StyledHeader>
  )
}

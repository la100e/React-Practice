import React from 'react'
import StyledCardsContainer from '../styledComponents/StyledCardsContainer';
import Card from './Card';

export default function CardsContainer(props) {

    let products = props.products;

    return (
    <StyledCardsContainer className="products" id="products">
        <div className="box-container">
            {
                products.map(product => <Card infos={product}/>)
            }
        </div>
    </StyledCardsContainer>
    )
}

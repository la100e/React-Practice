import styled from 'styled-components';

const StyledCardsContainer = styled.section`

.box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.box-container .box:hover .image img{
    transform: scale(1.1);
}

.box-container .box:hover .image .icons{
    bottom: 0;
}
    
`;

export default StyledCardsContainer;
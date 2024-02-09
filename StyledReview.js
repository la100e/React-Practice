import styled from 'styled-components';

const StyledReview = styled.div`

    flex: 1 1 30rem;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .1);
    border-radius: .5rem;
    padding: 3rem 2rem;
    position: relative;

    .fa-quote-right{
        position: absolute;
        bottom: 3rem; right: 3rem;
        font-size: 6rem;
        color: #eee;
    }

    .user{
        display: flex;
        align-items: center;
        padding-top: 2rem;
    }

    .user img{
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1rem;
    }

    .user h3{
        font-size: 2rem;
        color: #333;
    }

    .stars i{
        color: var(--theme_color);
        font-size: 2rem;
    }

    p{
        color: #999;
        font-size: 1.5rem;
        line-height: 1.5;
        padding-top: 2rem;
    }
    
`;

export default StyledReview;
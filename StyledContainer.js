import styled from 'styled-components';

const StyleContainer = styled.section`

    background: #eee;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .icons{
        background: #fff;
        border: .1rem solid rgba(0, 0, 0, .1);
        padding: 2rem;
        display: flex;
        align-items: center;
        flex: 1 1 25rem;
    }

    .icons img{
        height: 5rem;
        margin-right: 2rem;
    }

    .icons h3{
        color: #333;
        padding-bottom: .5rem;
        font-size: 1.5rem;
    }

    .icons span{
        color: #555;
        padding-bottom: .5rem;
        font-size: 1.3rem;
    }

`;

export default StyleContainer;
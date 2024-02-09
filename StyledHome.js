import styled from 'styled-components';

const StyledHome = styled.section`

    display: flex;
    align-items: center;
    min-height: 100vh;
    background: url(wallpapers/5.jpg) no-repeat;
    background-size: cover;
    background-position: center;


    .content{
        max-width: 50rem;
    }

    .content h3{
        font-size: 6rem;
        color: #333;
    }

    .content span{
        font-size: 3.5rem;
        color: var(--theme_color);
        padding: 1rem 0;
        line-height: 1.5;
    }

    .content p{
        font-size: 1.5rem;
        color: #999;
        padding: 1rem 0;
        line-height: 1.5;
    }

`;

export default StyledHome;
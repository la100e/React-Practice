import styled from 'styled-components';

const StyledHeader = styled.header`

    position: fixed;
    top: 0; left: 0; right: 0;
    background: #fff;
    padding: 2rem 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);

    .logo{
        font-size: 3rem;
        color: #333;
        font-weight: bolder;
    }

    .logo span{
        color: var(--theme_color);
    }

    .navbar a{
        font-size: 2rem;
        padding: 0 1.5rem;
        color: #666;
    }

    .navbar a:hover, header .icons .fas:hover{
        cursor: pointer;
        color: var(--theme_color);
    }

    .fas:hover{
        cursor: pointer;
        color: #852991;
    }

    .icons .fas{
        font-size: 2.5rem;
        color: #333;
        margin-left: 1.5rem;
    }

    #toggler{
        display: none;
    }

    .fa-bars{
        font-size: 3rem;
        color: #333;
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        cursor: pointer;
        border: .1rem solid rgba(0, 0, 0, .3);
        display: none;
    }

`;

export default StyledHeader;
import styled from 'styled-components';

const StyledCard = styled.div`

    flex: 1 1 30rem;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .1);
    border-radius: .5rem;
    border: .1rem solid rgba(0, 0, 0, .1);
    position: relative;
    cursor: pointer;
    width: 30%;

    .discount{
        position: absolute;
        top: 1rem;
        left: 1rem;
        padding: .7rem 1rem;
        font-size: 2rem;
        color: #fbd8ff;
        background: #4f015a;
        z-index: 1;
        border-radius: .5rem;
    }

    .image{
        position: relative;
        text-align: center;
        padding-top: 2rem;
        overflow: hidden;
        /* mix-blend-mode: saturation; */
    }

    .image img{
        height: 25rem;
    }

    .image .icons{
        position: absolute;
        bottom: -7rem;
        left: 0;
        right: 0;
        display: flex;
    }

    .image .icons a{
        height: 5rem;
        line-height: 5rem;
        width: 50%;
        background: var(--theme_color);
        color: #fff;
    }

    .image .icons .cart-btn{
        border-left: .1rem solid #fff7;
        border-right: .1rem solid #fff7;
        width: 100%;
    }

    .image .icons a:hover{
        background: #333;
    }

    .content{
        padding: 2rem;
        text-align: center;
    }

    .content h3{
        font-size: 2.5rem;
        color: #333;
    }

    .content h6{
        font-size: 1rem;
        color: #333;
    }

    .content h6 span{
        font-size: 1.1rem;
        color: var(--theme_color);
    }

    .content .price{
        font-size: 2.5rem;
        color: var(--theme_color);
        font-weight: bolder;
        padding-top: 1rem;
    }

    .content .price span{
        font-size: 1.5rem;
        color: #999;
        font-weight: lighter;
        text-decoration: line-through;
    }
    
`;

export default StyledCard;
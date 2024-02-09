import styled from 'styled-components';

const StyledAbout = styled.section`

    .row{
        display: flex;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
        padding: 2rem 0;
        padding-bottom: 3rem;
    }

    .row .video-container{
        flex: 1 1 40rem;
        position: relative;
    }

    .row .video-container video{
        width: 100%;
        border: 1.5rem solid #fff;
        border-radius: .5rem;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        height: 100%;
        object-fit: cover;
    }

    .row .video-container h3{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 3rem;
        background: #fff;
        width: 100%;
        padding: 1rem 2rem;
        text-align: center;
        mix-blend-mode: screen;
    }

    .row .content{
        flex: 1 1 40rem;
    }

    .row .content h3{
        font-size: 3rem;
        color: #333;
    }

    .row .content p{
        font-size: 1.5rem;
        color: #999;
        padding: .5rem 0;
        padding-top: 1rem;
        line-height: 1.5;
    }

`;

export default StyledAbout;
import styled from 'styled-components';

const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    /* box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1); */
    box-shadow: 0 .5rem 1rem #c08fc6;
    padding: 5rem 3rem;
    margin-right: 10rem;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input[type='text'], input[type='email'], input[type='password'], textarea{
        border: .2rem solid var(--theme_color);
        border-radius: 4rem;
        width: 30rem;
        height: 5rem;
        margin-bottom: 1.5rem;
        padding: 2rem;
    }

    .rowx{
        margin-top: 2rem;
        font-size: 1.5rem;
    }

    .rowx a{
        color: var(--theme_color);
    }
    
`;

export default StyledForm;
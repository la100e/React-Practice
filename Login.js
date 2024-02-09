import React from 'react'
import StyledForm from '../styledComponents/StyledForm'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();
  return (
    <>
        <StyledForm id="login-form">
            <form id="login-form">
                <div class="row1">
                    <input type="text" id="login" name="login" placeholder="Login"/>
                    <div id="loginmsg" class="wmsg"></div>
                </div>
                <div class="row1">
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <div id="passwordmsg" class="wmsg"></div>
                </div>
                <input type="submit" value="Log In" class="btn"></input>
            </form>
            <div class="rowx">
                <span>Don't have an account? </span>
                <a style={{cursor: 'pointer'}} onClick={ () => navigate('/signin') }>Sign In</a>
            </div>
        </StyledForm>
    </>
  )
}

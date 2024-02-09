import React from 'react'
import StyledForm from '../styledComponents/StyledForm'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

    const navigate = useNavigate();
  return (
    <StyledForm>
        <form id="login-form">
            <div class="row1">
                <input type="text" id="fullname" name="fullname" placeholder="FullName"/>
                <div id="fullnamemsg" class="wmsg"></div>
            </div>
            <div class="row1">
                <input type="text" id="login" name="login" placeholder="Login"/>
                <div id="loginmsg" class="wmsg"></div>
            </div>
            <div class="row1">
                <input type="text" id="login" name="login" placeholder="Login"/>
                <div id="loginmsg" class="wmsg"></div>
            </div>
            <div class="row1">
                <input type="password" name="password" id="password" placeholder="Password"/>
                <div id="passwordmsg" class="wmsg"></div>
            </div>
            <div class="row1">
                <input type="password" name="password" id="password" placeholder="Confirm Password"/>
                <div id="passwordmsg" class="wmsg"></div>
            </div>
            <input type="submit" value="Log In" class="btn"></input>
            </form>
            <div class="rowx">
                <span>Already have an account? </span>
                <a style={{cursor: 'pointer'}} onClick={ () => navigate('/login') }>Log In</a>
            </div>
    </StyledForm>
  )
}

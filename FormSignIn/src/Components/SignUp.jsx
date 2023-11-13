import React, { useEffect, useState } from "react";
import Input from "./Input";
import userIcon from '../assets/user.png'
import passwordIcon from '../assets/lock.png'
import emailIcon from '../assets/email.png'
import Button from "./Button";
import './SignUp.css'

function SignUp() {

    // beginner 
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClickSignUp = () => {
        setEmail('')
        setUser('')
        setPassword('')
    }


  return (
    <form action="" >
    <div className="container">
      <div className="header">
        <div className="text"> Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input"><Input imgSrc={userIcon}/></div>
        <div className="input"><Input type='email' imgSrc={emailIcon}/></div>
        <div className="input"><Input type="password" imgSrc={passwordIcon} /></div>
      </div>
      <div className="forgot"> Forgot Password <span>Click Here</span></div>
      <div className="submit">
        <div className="signin"><Button text={'Sign Up'} handler = {handleClickSignUp}/></div>
        <div className="signup"><Button text={'Login'} handler = {handleClickSignUp}/></div>
      </div>
    </div>
    </form>
  );
}

export default SignUp;

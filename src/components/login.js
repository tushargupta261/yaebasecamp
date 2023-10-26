import React, { useEffect } from 'react'
import './login.css';
import { getUserList } from '../api';

function Login() {
 
  return (
    <div className='loginDiv'>
      <h1> check for login page </h1>

      <form >
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"></input>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email"></input>
        <label for="MobileNumber">Mobile Number:</label>
        <input type="text" id="MobileNumber" name="MobileNumber"></input>
        <input type="submit" value="Submit"></input>
      </form>

    </div>
  )
}

export default Login

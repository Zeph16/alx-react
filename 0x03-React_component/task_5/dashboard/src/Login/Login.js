import React, { Fragment } from 'react';
import './Login.css';


function Login() {
  return(
    <Fragment>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"/>
        <button>OK</button>
    </Fragment>
  );
}

export default Login;

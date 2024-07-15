import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { createRoot } from 'react-dom/client';

const Login = () => {

  const [loginData, setData] = useState({
    username: "",
    password: ""
})

//Submit Function

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log('Handling login submit...');

    try{
      const response = await axios.post('http://localhost:8000/login', loginData);
      const {success, message} = response.data;

      if(success){
        console.log('Login Successfully')
      } else{
        console.log(message);
      }
    }
    catch(error){
      console.log('login error', error);
    }
    setData({
      username: "",
      password: ""
    })
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleLoginSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
        <p>
          Not registered Yet ?
          <Link to ="/register">
             Register Here
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;


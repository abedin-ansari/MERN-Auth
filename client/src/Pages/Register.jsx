import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Register = () => {

  const [registerData, setRegisterData] = useState({
    username: "",
    password: ""
  })

  const handleRegistrationChange = (event) => {
    const {name, value} = event.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    try{
      // const response = await axios.post('http://localhost:8000/register', registerData);
      const response = await axios.post('http://localhost:8000/register', registerData);
      const {success, message} = response.data;

      if(success){
        console.log('Login Successfully')
      } else{
        console.log(message);
      }
    }
    catch(error){
      console.log(error)
    }
    setRegisterData({
      username: "",
      password: ""
    })
  }
  return (
    <div className="container">
      <h2>Registration from</h2>
      <form onSubmit={handleRegistrationSubmit}>
        <input
        type="text"
        name="username"
        placeholder='Username'
        onChange={handleRegistrationChange}
        value={registerData.username}
        required
         />
         <input
        type="password"
        name="password"
        placeholder='Password'
        onChange={handleRegistrationChange}
        value={registerData.password}
        required
         />
         <button type="submit">Submit</button>
         <p>Already Registered ? 
         <Link to="/login">Login</Link>
         </p>
      </form>
    </div>
  )
}

export default Register;

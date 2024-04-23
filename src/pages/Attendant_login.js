import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import nigcomsatlogo from '../media/nigcomsatlogo.png'
// import '../App.css'

const Attendant_login = () => {

  // initialize variables to hold user input, by default is set to an empty string
  const [user_id, setUserId] = useState('')
  const [password, setPassword] = useState('')
  
  // variable to hold server response when trying to login
  const [message, setMessage] = useState('');

  // initialize useNavigate() hook
  const navigate = useNavigate()

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // get the csrf token from the cookie
    const csrftoken = document.cookie.match(/csrftoken=([^;]+)/)[1];

    // make post request to django backend
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
      user_id: user_id,
      password: password
    },
    {
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
      }
  }
  );

  // server response and navigation
    if(response.data.status === "success") {
      setMessage('Login Successful!');
      navigate('/')
    }
    else {
      setMessage(response.data.message);
    }

    // localStorage.setItem('token', response.data.token);
    }
    
    catch(error) {
      console.error('Error signing in:', error);
      setMessage('An error occurred. Please try again.');
    }
    
  }

  return (
    <div className='attendant'>
      <div>
        <img src={nigcomsatlogo} alt='Nigcomsat Logo' />
      </div>
        <div>
            <p>Enter Staff Login</p>
        </div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='user-id' placeholder='Staff ID' onChange={(e) => setUserId(e.target.value)} value={user_id} required/> <br />
        <input type='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
        <input type='submit' value='Log in'/>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Attendant_login

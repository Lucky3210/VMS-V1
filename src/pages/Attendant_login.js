import React from 'react'
import nigcomsatlogo from '../media/nigcomsatlogo.png'
// import '../App.css'

const Attendant_login = () => {
  return (
    <div className='attendant'>
      <div>
        <img src={nigcomsatlogo} alt='Nigcomsat Logo' />
      </div>
        <div>
            <p>Enter Attendant Security Key</p>
        </div>
      <form>
        <input type='password' name='key' placeholder='security key'/> <br />
        <input type='submit' value='Log in'/>
      </form>
    </div>
  )
}

export default Attendant_login

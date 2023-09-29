import React from 'react'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import UK from '../../assets/UK.png'
import downArrow from '../../assets/downArrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='main'>
      <div className='right-side'>
        <img className='logo' src={logo} alt='logo' />
        <p className='btn'><FontAwesomeIcon icon={faSquareCaretRight} /></p>
      </div>
      <div className='left-side'>
        <h1 className='header'>Manage Booking</h1>
        <h1 className='header'>News</h1>
        <h1 className='header'>Tours</h1>
        <h1 className='header'>Help</h1>
        <div className='lang'>
          <img src={UK} alt='UK' />
          <img src={downArrow} alt='downArrow' />
        </div>
        <div className='login'>
          <button className='login-btn'> Login |</button>
          <button className='signup-btn'>Sign Up</button>
          <img src={user} alt='user' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
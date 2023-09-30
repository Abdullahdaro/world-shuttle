import React from 'react'
import './landingpage.css'
import mainPic from '../../assets/mainPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import plane1 from '../../assets/plane1.png'
import location from '../../assets/location.png'


const LandingPage = () => {
  return (
  <div className='main'>
    <img className='mainpic' src={mainPic} alt='mainpic' />
    <div className='booking'>
      <h1 className='booking-header'>Book your shuttle</h1>
      <div className='start'>
        <div className='booking-text'>
          <p>Enter the details of <span>Book now</span></p>
        </div>
      </div>
      <div className='booking-input'>
        <div className='input-group'>
          <div className='input-container'>
          <img className='plane1' src={plane1} alt='plane1' />
            <input className='input' type='text' placeholder='From' />
          </div>
        </div>
        <div className='input-group'>
          <div className='input-container'>
            <img className='location' src={location} alt='location' />
            <input className='input' type='text' placeholder='To' />
          </div>
        </div>
        <div className='input-group'>
          <input className='input' type='date' placeholder='Date' />
        </div>
      </div>
      <div className='booking-btn'>Search <FontAwesomeIcon icon={faCirclePlus} /></div>
    </div>
  </div>

  )
}

export default LandingPage
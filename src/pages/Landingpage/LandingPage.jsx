import React from 'react'
import './landingpage.css'
import mainPic from '../../assets/mainPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import plane1 from '../../assets/plane1.png'
import location from '../../assets/location.png'
import safety from '../../assets/safety.png'
import highQuality from '../../assets/highQuality.png'
import information from '../../assets/information.png'
import locationIcon from '../../assets/locationIcon.png'
import salary from '../../assets/salary.png'


const LandingPage = () => {
  return (
    <>
      <div className='main-bookingForm'>
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
                <img className='location' src={locationIcon} alt='location' />
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
      <div className='our-values'>
        <h1>Our Values</h1>
        <div className='values-contents'>
          <div className='first-value-content'>
          <div className='background-values'></div>
            <img src={safety} />
            <p>Secure and Reliable</p>
          </div>
          <div className='second-value-content'>
            <div className='background-values'></div>
            <img src={highQuality} />
            <p>Excellence in Every Detail</p>
          </div>
          <div className='third-value-content'>
            <div className='background-values'></div>
            <img src={information} />
            <p>24/7 Support Available</p>
          </div>
          <div className='fourth-value-content'>
            <div className='background-values'></div>
            <img src={salary} />
            <p>Savings Guaranteed</p>
          </div>
        </div>
      </div>
    </>


  )
}

export default LandingPage
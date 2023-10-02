import React, { useState } from 'react';
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
  const [message, setMessage] = useState('');
  const messageInputRef = React.createRef();

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    messageInputRef.current.focus();
  };


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
      <div className='who-we-are'>
        <h1>Who we are?</h1>
        <p>At <span>Turkey Shuttle,</span> we are not just providers of <span>transportation;</span> we are the architects of <span>unforgettable</span> <span>journeys</span>. Our mission is simple yet profound: to create experiences that transcend the ordinary, connecting you to your destination in the most <span>comfortable, convenient, and cost-effective way </span>possible.</p>
        <p>We are more than <span>service</span>; we are your companions on the road to adventure. Together, let's turn every trip into an extraordinary tale, and every traveler into a happy arrival. <span>Welcome to Turkey Shuttle,</span> where every journey is a <span>chapter</span> waiting to be written.</p>
      </div>
      <div className='comments'>
        <h1>Be Sure & Chat With Us</h1>
        <div className='information-comments'>
          <input className='input-comment' type='text' placeholder='Name' />
          <input className='input-comment' type='text' placeholder='Email' />
          <div className="input-container">
            <input
              ref={messageInputRef}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-comment-message"
              type="text"
            />
{/*             <div className="format-toolbar">
              <button onClick={() => formatText('bold')}>Bold</button>
              <button onClick={() => formatText('italic')}>Italic</button>
              <button onClick={() => formatText('strikethrough')}>Strikethrough</button>
              <button onClick={() => formatText('insertUnorderedList')}>Bulleted List</button>
              <button onClick={() => formatText('insertOrderedList')}>Numbered List</button>
              <button onClick={() => formatText('formatBlock', 'BLOCKQUOTE')}>Block Quote</button>
              <button onClick={() => formatText('formatBlock', 'PRE')}>Code</button>
            </div> */}
          </div>
        </div>
        <div className='btn-comment'><span>Send Message</span></div>
      </div>
    </>
  )
}

export default LandingPage
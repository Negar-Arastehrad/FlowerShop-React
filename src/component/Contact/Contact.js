import React from 'react';
import './ContactStyle.css';

import Img from '../../images/Flowers-pana.svg';

const Contact = () => {
  return (
    <div className="contact" id='contact'>
        <div className="container">
            <div className="heading">
                <h3><span>Contact</span> Us</h3>
            </div>

            <div className="row">
                <form>
                    <input type="text" placeholder='Name' className='input'/>
                    <input type="email" placeholder='Email' className='input'/>
                    <input type="number" placeholder='Number' className='input'/>
                    <textarea cols="30" rows="10" placeholder='Message' className='input'></textarea>
                    <input type="submit" value="Send Message" className='btn' />
                </form>

                <img src={Img}/>
            </div>
        </div>
    </div>
  )
}

export default Contact
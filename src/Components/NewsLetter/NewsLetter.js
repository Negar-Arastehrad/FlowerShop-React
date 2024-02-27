import React, { useState } from 'react'
import './NewsLetterStyle.css'
import Modal from '../Modal/Modal'

const NewsLetter = () => {

    const [openModal, setOpneModal] = useState(false)


  return (
    <div className="newsletter" id='newsletter'>
        <div className="container">
            <h1>Do You Wanna Know What's New With Us?</h1>
            <button onClick={() => setOpneModal(true)}>Just Click Here</button>
        </div>
        <Modal open={openModal} onClose={ () => setOpneModal(false)} />
    </div>
  )
}

export default NewsLetter
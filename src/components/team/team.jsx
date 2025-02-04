import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FaLinkedin as LinkedIn } from 'react-icons/fa';
import demo from '../../assets/demoperson.png';
import './team.css';

const team = () => {

    const [flippedState, setFlippedState]=useState({
        card1:false,
        card2:false,
        card3:false,
        card4:false,
    });

    const flipCard=(cardKey)=>{
        setFlippedState((prevState)=>({
         ...prevState,
         [cardKey]: !prevState[cardKey],
        }));
    };


  return (
    <div className='teams'>
        <div className='team'>
             <ReactCardFlip flipDirection='horizontal' isFlipped={flippedState.card1}>
                <div className='card'  onClick={() => flipCard('card1')}>
                    <img src={demo} alt='' />
                </div>
                <div className='card card-back'  onClick={() => flipCard('card1')}>
                    <h3>Shobha Motghare</h3>
                    <h4>Secretary</h4>
                    <a href='https://www.linkedin.com/in/shobha-motghare-0a6a57238/' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>

        <div className='team'>
             <ReactCardFlip flipDirection='horizontal'  isFlipped={flippedState.card2}>
                <div className='card' onClick={() => flipCard('card2')}>
                <img src={demo} alt='' />
                </div>
                <div className='card card-back' onClick={() => flipCard('card2')}>
                <h3>Payal Badhe</h3>
                <h4>President</h4>
                <a href='https://www.linkedin.com/in/shobha-motghare-0a6a57238/' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>

        <div className='team'>
             <ReactCardFlip flipDirection='horizontal' isFlipped={flippedState.card3}>
                <div className='card' onClick={() => flipCard('card3')}>
                <img src={demo} alt='' />
                </div>
                <div className='card card-back' onClick={() => flipCard('card3')}>
                <h3>Bharti Shendre</h3>
                <h4>Treasurer</h4>
                <a href='https://www.linkedin.com/in/shobha-motghare-0a6a57238/' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>

        <div className='team'>
             <ReactCardFlip flipDirection='horizontal' isFlipped={flippedState.card4}>
                <div className='card' onClick={() => flipCard('card4')}>
                <img src={demo} alt='' />
                </div>
                <div className='card card-back' onClick={() => flipCard('card4')}>
                <h3>Nilima Kalambe</h3>
                <h4>Advisor</h4>
                <a href='https://www.linkedin.com/in/shobha-motghare-0a6a57238/' target='_blank' rel='noopener noreferrer'>
              <LinkedIn className='linkedin-icon' />
            </a>
                </div>
             </ReactCardFlip>
        </div>
    </div>
  )
}

export default team;
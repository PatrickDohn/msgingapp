import React from 'react'
import Countdown from 'react-countdown';
import './timer.css'
import image from '../src/image/middlefinger.png'
import IconButton from '@material-ui/core/IconButton';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Timer() {

    const Completionist = () => <span style={{color: 'white'}}>🖕🖕🖕🖕🖕🖕</span>;
    let countDownDate = new Date("Jan 1, 2021 00:00:00")
    return (
        <div className="timer-container">
            <IconButton className='timer-btn' color="secondary" aria-label="add an alarm">
              <ThumbDownIcon />
            </IconButton>
            <div className="timer">
                <h3>2020 has been a b**** take your shot at her while you still can.</h3>
                <Countdown style={{color: 'white'}} date={countDownDate}>
                    <Completionist />
                </Countdown>
            </div>
        </div>
    )
}

export default Timer

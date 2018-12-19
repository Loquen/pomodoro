import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {

  constructor() {
    super();
    this.state = { time: {}, seconds: 1500 }; // Set intial timer to 1500s or 25min
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  // Converts the Time from seconds to H, M, S for display purposes
  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60)); // Seconds divided by 360

    let divisor_for_minutes = secs % (60 * 60); // Get the remainder of mins after hours
    let minutes = Math.floor(divisor_for_minutes / 60); // Remaining seconds divided by 60

    let divisor_for_seconds = divisor_for_minutes % 60; // Get the remainder of secs after minutes
    let seconds = Math.ceil(divisor_for_seconds); // Remaining seconds 

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj; 
  }


  // Initial setup of State, Passing in the converted seconds 
  // in the correct format to our state variable: time
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  // Begin countdown timer if the countdown should go 
  // to zero and there seconds on the clock
  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  // Stop the Timer at the current time 
  stopTimer() {
  	clearInterval(this.timer);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }

  render() {
    return(
      <div>
        
        <div className="Countdown">M:{this.state.time.m}  S:{this.state.time.s} </div>
        <div className="Button">
        	<button onClick={this.startTimer}>Start</button>
        	&nbsp;
        	&nbsp;
        	<button onClick={this.stopTimer}>Stop</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {

  constructor() {
    super();
    // Set intial timer to 1500s or 25min, break of 5min
    // and final break of 15min, with one cycle lasting 4 pomodoros
    this.state = { time: {}, 
    			   seconds: 1500,
    			   break: 300,
    			   finalBreak: 900, 
    			   pomodoro: 1,
    			   isRunning: false
    			 };  
    this.timer = 0;
    this.handleTimer = this.handleTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
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

  
  // Begin countdown timer if there are seconds on the clock
  startTimer() {
    if (this.state.seconds > 0) {
      this.setState({ isRunning: true });
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  // Stop the Timer at the current time 
  stopTimer() {
  	
  	clearInterval(this.timer);
  	this.setState({ isRunning: false });
  	// Once stopped we need to change the button to 'reset' 

  }

  handleTimer() {
  	if(this.state.isRunning) {
  		this.stopTimer();
  	} else {
  		this.startTimer();
  	}
  }


  // Reset the whole pomodoro to beginning
  resetTimer() {

  	// Change pomodoro to 1 again
  	// Reset timer to 25

  }

  // 
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
      //this.setState(pomodoros, 1)
      //pomodoroPhase();

      // For the next phase: instead of clearing the timer
      // at 0 we will call pomodoroPhase(). This will determine
      // what phase of the timer we're in. 
      // One full cycle: 1(25) > 2(5) > 3(25) > 4(5) > 
      //                 5(25) > 6(5) > 7(25) > 8(15) > end
    }
  }


  // Moving timer through all 8 segments of the Pomodoro cycle
  pomodoroPhase() {
  	// if the pomo is even then we are on break
  	if (this.pomodoro % 2 == 0  && this.pomodoro != 8) {
  		// reset clock to break time: 5min
  	} else if (this.pomodoro == 8) {
  		// final pomo has finished
  		// clearInterval(this.timer);
  	}
  	// Still need to add functionality to reset to pomo set
  	// and finally one more to finish the whole sequence
  }

  render() {
    return(
      <div>
        
        <div className="Countdown">M: {this.state.time.m} S: {this.state.time.s} </div>
        <div className="Button">
        	<button onClick={this.handleTimer}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        	&nbsp;
        	&nbsp;
        	<button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
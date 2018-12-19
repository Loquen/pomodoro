import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component{
	render(){
		return(
			<div className="DisplayBox">
				<div className="Timer">
					<div className="Time">25:00</div>
					&nbsp;
					&nbsp;
					<div className="Button">
						<button>Start</button>
						&nbsp;&nbsp;
						<button>Stop</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Timer;
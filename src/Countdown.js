import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {
	render(){
		return(
			<div className="Countdown">25:00
				
				<div className="Button">
					<button>Start</button>
					&nbsp;&nbsp;
					<button>Stop</button>
				</div>
			</div>
		);
	}
}

export default Countdown;
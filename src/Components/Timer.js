import React, { Component } from 'react'

export default class Timer extends Component {
	constructor(props){
		super(props);
		this.storedSeconds = props.minutes * 60;
		this.totalSeconds = props.minutes * 60;
		this.updateTimer = this.updateTimer.bind(this);
		
		this.state = {
			isActive : false,
			seconds : "00",
			minutes :this.totalSeconds / 60,

			currentState : <ion-icon name="play-outline"></ion-icon>
		}
	}

	handleClick = () =>{
		this.setState({isActive:!this.state.isActive},()=>{
			if(this.state.isActive){
				this.timerId = setInterval(
					()=> this.updateTimer(),
					1000
				);
			}
		})
	}

	resetTimer = () => {
		if(this.timerId){
			this.setState({
				isActive:false,
				currentState:<ion-icon name="play-outline"></ion-icon>,
				minutes : this.storedSeconds / 60,
				seconds : "00"

			},()=>{
				clearInterval(this.timerId);
			})
		}
	}
	
	componentWillUnmount(){
		clearInterval(this.timerId);
	}
	
	componentDidUpdate(){
		if(this.state.minutes === 0 && this.state.seconds === 0 && this.state.isActive){
			this.resetTimer();
		}
	}

	updateTimer(){
		if(this.state.isActive){
			this.totalSeconds--;
			this.setState({
				seconds : ~~(this.totalSeconds % 60),
				minutes : ~~(this.totalSeconds / 60),	
				currentState:<ion-icon name="pause-outline"></ion-icon>
			})

		}else{
			clearInterval(this.timerId)
			this.setState({currentState:<ion-icon name="play-outline"></ion-icon>})
		}
	}

	render() {
		return (
			<div className="container">
				<p className="timeDisplay">{this.state.minutes}:{this.state.seconds}</p>
				<div id='bottomContainer'>
					<button onClick={this.handleClick} id='btn'>{this.state.currentState}</button>
					<button onClick={this.resetTimer} id='resetBtn'><ion-icon name="refresh-outline"></ion-icon></button>
				</div>
			</div>
		)
	}
}
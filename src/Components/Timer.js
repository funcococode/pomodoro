import React, { Component } from 'react'

export default class Timer extends Component {
	constructor(props){
		super(props);
		this.updateTimer = this.updateTimer.bind(this);
		this.state = {
			isActive : false,
			storedSeconds : props.minutes * 60,
			totalSeconds : props.minutes * 60,
			seconds : "00",
			minutes :"00",

			currentState : <ion-icon name="play-outline"></ion-icon>
		}
	}

	componentDidMount(){

		this.setState({
			minutes : ~~(this.state.totalSeconds / 60)
		})
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
				minutes : this.state.storedSeconds / 60,
				seconds : "00"

			},()=>{
				clearInterval(this.timerId);
				document.title = "Pomodo!"
			})
		}
	}
	
	componentWillUnmount(){
		clearInterval(this.timerId);
	}
	
	componentDidUpdate(prevProps){
		if(prevProps.minutes !== this.props.minutes){
			console.log(prevProps,this.props.minutes)
			this.setState({
				totalSeconds: this.props.minutes * 60,
				minutes : ~~(this.props.minutes)
			});
		}

		if(this.state.minutes === 0 && this.state.seconds === 0 && this.state.isActive){

			this.resetTimer();
		}
			document.title = `${this.state.minutes}:${this.state.seconds} - Focus!`
	}

	updateTimer(){
		if(this.state.isActive){
			this.setState({totalSeconds: this.state.totalSeconds-1});
			this.setState({
				seconds : ~~(this.state.totalSeconds % 60),
				minutes : ~~(this.state.totalSeconds / 60),	
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
				<div id="lockUnlockIcon">
					{this.state.isActive ? <ion-icon name="lock-closed-outline"></ion-icon> : <ion-icon name="lock-open-outline"></ion-icon>}
				</div>
				<div id="timeScale"></div>
			</div>
		)
	}
}

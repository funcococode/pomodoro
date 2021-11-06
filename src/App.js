import './App.css';
import Timer from './Components/Timer';
import React, { useState} from 'react';
import bg1 from "./imgs/bg-1.svg";
import bg2 from "./imgs/bg-2.png";
import bg3 from "./imgs/bg-3.png";
import bg4 from "./imgs/bg-4.png";




function App() {
  	let [minutes,setMinutes] = useState(5);
	let [bgStyle,setBgStyle] = useState({
		backgroundImage :`url(${bg1})`,
	});
	return (
		<div className="App">
		<aside id="sideBar">
			<ul>
				<li className="sidebar-item"><ion-icon name="ellipse-outline"></ion-icon> Focus</li>
				<li className="sidebar-item"><ion-icon name="egg-outline"></ion-icon> Short Break</li>
				<li className="sidebar-item"><ion-icon name="balloon-outline"></ion-icon> Long Break</li>
				<li className="sidebar-item">
					<div className="bg-group">
						<figure className="bg-option currentBG">
							<img src={bg1} data-bg="1" alt="background-1" onClick={()=>setBgStyle({backgroundImage:`url(${bg1})`})}/>
						</figure>
						<figure className="bg-option">
							<img src={bg2} data-bg="2" alt="background-2" onClick={()=>setBgStyle({backgroundImage:`url(${bg2})`})}/>
						</figure>
						<figure className="bg-option">
							<img src={bg3} data-bg="3" alt="background-3" onClick={()=>setBgStyle({backgroundImage:`url(${bg3})`})}/>
						</figure>
						<figure className="bg-option">
							<img alt="background-4" src={bg4} data-bg="4" onClick={()=>setBgStyle({backgroundImage:`url(${bg4})`})}/>
						</figure>
					</div>
				</li>
			</ul>

		</aside>
		<div style={bgStyle}>
			<div id="rightTop">
				<button onClick={()=>setMinutes(5)}>5M</button>
				<button onClick={() => setMinutes(10)}>10M</button>
				<button onClick={()=>setMinutes(20)}>20M</button>
				<button onClick={()=>setMinutes(30)}>30M</button>
				<button onClick={()=>setMinutes(45)}>45M</button>
			</div>
			<div id="rightBottom">
				<Timer minutes={minutes} />
			</div>
		</div>
		</div>
	);
}

export default App;

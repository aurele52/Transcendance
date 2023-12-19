import React from "react";
export default class Home extends React.Component {
	render() {
			return (
				<div className="homePage">
					<div className="home-menu">
						<button className='mainButton'>List</button>
						<button className='mainButton'>Add Word</button>
						<button className='mainButton'>QCM</button>
						<button className='mainButton'>Pong</button>
						<button className='mainButton'>Chat</button>
					</div>
				</div>
			);
		}
};

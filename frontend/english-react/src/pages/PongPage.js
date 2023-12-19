import React from "react";
import Pong from './../components/p5-sketch.jsx';
export default class Pong2 extends React.Component {
	render() {
		return (
			<div className='pongPage' id='pongPage'>
				 <Pong />
			</div>
		);
	}
};

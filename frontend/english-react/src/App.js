// import Home from './pages/HomePage.js';
// import List from './pages/ListPage.js';
// import AddWord from './pages/AddWordPage.js';
// import ModifWord from './pages/ModifWordPage.js';
// import Pong2 from './pages/PongPage.js';
import './css/App.css';
import React from "react";
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket.js';
const WS_URL = 'ws://172.23.181.5/3001';
function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    }
  });

  return (
    <div>Hello WebSockets!</div>
  );
}

export default App;
// export default class App extends React.Component {
	// constructor(props) {
		// super(props);
		// this.state = {
	// 		homeDisplay: true,
	// 		listDisplay: false,
	// 		addWordDisplay: false,
	// 		modifWordDisplay: false,
	// 		pongDisplay: false,
	// 		wordList: [
	// 			{
	// 				eng: 'hello',
	// 				fr: 'bonjour',
	// 				hint: 'politesse',
	// 				level: 0
	// 			},
	// 			{
	// 				eng: 'egg',
	// 				fr: 'oeuf',
	// 				hint: 'deb',
	// 				level: 0
	// 			},
	// 			{
	// 				eng: 'bad',
	// 				fr: 'mauvais',
	// 				hint: 'negatif',
	// 				level: 0
	// 			}
	// 		]
		// }
	// 	this.toggleHomeDisplay = this.toggleHomeDisplay.bind(this);
	// 	this.toggleListDisplay = this.toggleListDisplay.bind(this);
	// 	this.toggleAddWordDisplay = this.toggleAddWordDisplay.bind(this);
	// 	this.toggleModifWordDisplay = this.toggleModifWordDisplay.bind(this);
	// 	this.togglePongDisplay = this.togglePongDisplay.bind(this);
	// 	this.hangleChange = this.hangleChange.bind(this);
	// }
	// hangleChange() {
	// 	const newWord = {
	// 		eng: 'fds',
	// 		fr: 'fds',
	// 		hint: 'fds',
	// 		level: 'fds'
	// 	}
	// 	this.setState({wordList: [...this.state.wordList, newWord]});
	// }
	// toggleHomeDisplay() {
	// 	this.setState({
	// 		homeDisplay: true,
	// 		listDisplay: false,
	// 		addWordDisplay: false,
	// 		modifWordDisplay: false,
	// 		pongWordDisplay: false
	// 	});
	// }
	// toggleAddWordDisplay() {
	// 	this.setState({
	// 		homeDisplay: false,
	// 		listDisplay: false,
	// 		addWordDisplay: true,
	// 		modifWordDisplay: false,
	// 		pongWordDisplay: false
	// 	});
	// }
	// toggleModifWordDisplay() {
	// 	this.setState({
	// 		homeDisplay: false,
	// 		listDisplay: false,
	// 		addWordDisplay: false,
	// 		modifWordDisplay: true,
	// 		pongWordDisplay: false
	// 	});
	// }
	// toggleListDisplay() {
	// 	this.setState({
	// 		homeDisplay: false,
	// 		listDisplay: true,
	// 		addWordDisplay: false,
	// 		modifWordDisplay: false,
	// 		pongWordDisplay: false
	// 	});
	// }
	// togglePongDisplay() {
	// 	this.setState({
	// 		homeDisplay: false,
	// 		listDisplay: false,
	// 		addWordDisplay: false,
	// 		modifWordDisplay: false,
	// 		pongDisplay: true
	// 	});
	// }
	// ws = new WebSocket('ws://172.23.181.5:3001')
	//
	// componentDidMount() {
	// 	this.ws.onopen = () => {
	// 		// on connecting, do nothing but log it to the console
	// 		console.log('connected')
	// 	}
	//
	// 	this.ws.onmessage = evt => {
	// 		// listen to data sent from the websocket server
	// 		const message = JSON.parse(evt.data)
	// 		this.setState({dataFromServer: message})
	// 		console.log(message)
	// 	}
	//
	// 	this.ws.onclose = () => {
	// 		console.log('disconnected')
	// 		// automatically try to reconnect on connection loss
	//
	// 	}
	//
	// }
	//
	// render() {
	// 	return (
			// <div>
			// 	<button onClick={this.toggleHomeDisplay}>Toggle Homepage Display</button>
			// 	<button onClick={this.toggleListDisplay}>Toggle List Display</button>
			// 	<button onClick={this.toggleAddWordDisplay}>Toggle AddWordpage Display</button>
			// 	<button onClick={this.toggleModifWordDisplay}>Toggle ModifWordpage Display</button>
			// 	<button onClick={this.togglePongDisplay}>Toggle Pong page Display</button>
			// 	<button onClick={this.hangleChange}>modif list</button>
			// 	{this.state.homeDisplay === true && <Home />}
			// 	{this.state.listDisplay === true && <List wordList={this.state.wordList}/>}
			// 	{this.state.modifWordDisplay === true && <ModifWord />}
			// 	{this.state.addWordDisplay === true && <AddWord />}
			// 	{this.state.pongDisplay === true && <Pong2 />}
			// </div>
			// <Home websocket={this.ws} />
		// );
	// }
// };

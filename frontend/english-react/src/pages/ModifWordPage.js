import React from "react";
export default class ModifWord extends React.Component {
	render() {
			return (
				<div className="modifWordPage">
					<label>Eng:</label>
					<input type="text"></input>
					<label>Fr:</label>
					<input type="text"></input>
					<label>Hint:</label>
					<input type="text"></input>
					<label>Level:</label>
					<input type="text"></input>
					<button>submit</button>
					<button>delete</button>
					<button>cancel</button>
				</div>
			);
		}
};

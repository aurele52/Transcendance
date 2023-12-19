import React from "react";
export default class List extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const wordlist = this.props.wordList.map(i=> <div className="row"><div className="listElement"><label className="listEng">Eng: {i.eng}</label> <label className="listFr">Fr: {i.fr}</label> <label className="listHint">Hint: {i.hint}</label> <label className="listLevel">Level: {i.level}</label> </div> <button className='modifieButton'>modifie</button></div>);
			return (
				<div className="listPage">
					{wordlist}
				</div>
			);
		}
};

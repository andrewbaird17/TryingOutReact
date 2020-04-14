import React from 'react';
import './App.css';

/*
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
      {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    ];
*/

const CardList = (props) => (
	<div>
		<Card />
	</div>
);

class Card extends React.Component {
	render() {
		return (
			<div className="github-profile">
				<img src="https://placehold.it/75" alt="" />
				<div className="info">
					<div className="name">Name here...</div>
					<div className="company">Company here...</div>
				</div>
			</div>
		);
	}
}
class App extends React.Component {
	render() {
		return (
			<div>
				<div className="header">{this.props.title}</div>
				<Card />
			</div>
		);
	}
}

export default App;

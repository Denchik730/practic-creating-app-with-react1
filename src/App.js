// import {Component, StrictMode} from 'react';
import './App.css';

// function WhoAmI (props) {
// 	return (
// 		<div>
// 			<h1>My name is {props.name}, surname - {props.surname}</h1>
// 			<a href={props.link}>My profile</a>
// 		</div>
// 	)
// }
function WhoAmI ({name, surname, link}) {
	return (
		<div>
			<h1>My name is {name()}, surname - {surname}</h1>
			<a href={link}>My profile</a>
		</div>
	)
}


function App() {
	return (
		<div className="App">
			{/* <WhoAmI name={{firstName: "John"}} surname="Smith" link="facebook.com"/>
			<WhoAmI name={{firstName: "Alex"}} surname="Shepard" link="facebook.com"/> */}
			<WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
			<WhoAmI name={() => {return 'John'}} surname="Shepard" link="facebook.com"/>

		</div>
	);
}

export default App;

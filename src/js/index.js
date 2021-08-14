//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//include your props file into the bundle
import PropTypes from "prop-types";

const SimpleCounter = props => {
	return (
		<div className="container-fluid">
			<div className="row bg-dark text-white text-center p-4 d-flex justify-content-center">
				<h1 className="">Simple Counter!</h1>
			</div>
			<div className="row text-center bg-dark d-flex justify-content-center">
				<div className="bigCounter text-center bg-dark text-white p-5 d-flex ">
					<div className="calendar">
						<i className="far fa-clock card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2"></i>
					</div>
					<div className="four card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2">
						{props.digitSix % 10}
					</div>
					<div className="four card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2">
						{props.digitFive % 10}
					</div>
					<div className="four card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2">
						{props.digitFour % 10}
					</div>
					<div className="three card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2">
						{props.digitThree % 10}
					</div>
					<div className="two card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2">
						{props.digitTwo % 10}
					</div>
					<div className="one card m-2 p-2 px-3 display-3 bg-dark text-white border border-2 rounded-2">
						{props.digitOne % 10}
					</div>
				</div>
			</div>
			<div className="row bg-dark text-white text-center p-3 d-flex justify-content-center">
				<p>
					Made by <a href="http://www.github.com/uxbel">Uxbel</a>,
					<i className="far fa-heart"></i> with love!
				</p>
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

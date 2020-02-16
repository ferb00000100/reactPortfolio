import React from 'react';
import profile from "./profile_pic.jpg"
import Body from "../Body/body"
import MyCard from "../Cards/mycard"
import Resume from "../Resume/Resume";

const Main = (props) => {
	return (
	<>
		<Resume/>
		<div className="d-flex flex-row m-2">
			<img src={profile} className="shadow ml-3 p-2 mb bg-white rounded heading" width="225" height="275" alt="profile picture"></img>
		</div>
		<Body />
		<div>
		<div className="mt-2">
		<h6 className="h6 shadow p-2 mb bg-dark rounded text-white text-center fix-heading-width"> FavoriteBands</h6>
		<ul className="fix-heading-width">
			<li className="home small">Young the Giant</li>
			<li className="home small">Big Head Todd and the Monsters</li>
			<li className="home small">Blues Traveler</li>
			<li className="home small">New Politics</li>
			<li className="home small">Leon Bridges</li>
			<li className="home small">U2</li>
			<li className="home small">Fitz and the Tantrums</li>
			<li className="home small">Cage the Elephant</li>
			<li className="home small">Weezer</li>
		</ul>
			</div>
			<div className="ml-2 mt-2">
		<h6 className="h6 shadow p-2 mb bg-dark rounded text-white text-center fix-heading-width"> Hobbies</h6>
		<ul className="fix-heading-width">
			<li className="home small">Cycling</li>
			<li className="home small">Snowboarding</li>
			<li className="home small">Crossfit</li>
			<li className="home small">Technology</li>
			<li className="home small">Camping</li>
			<li className="home small">Music</li>
		</ul>
			</div>
		</div>
		<div>

		</div>
		</>

	);
};

export default Main;
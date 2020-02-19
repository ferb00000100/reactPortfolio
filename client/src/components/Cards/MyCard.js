import React from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';
import mdp from "./images/mdp.png"
import pwdg from "./images/passwordGen.png"
import dp from "./images/dayPlanner.png"
import wdb from "./images/weather-dashboard.png"
import ss from "./images/sunnySide.png"
import burger from "./images/burger.png"
import AppBtn from "../AppBtn/AppBtn"



const MyCard = (props) => {

	function loadApp (app) {
		switch (app) {
			case "breweryFinder":
				window.open('https://ferb00000100.github.io/myDrinkingProblem/');
				break;
			case "passwordGenerator":
				window.open("https://ferb00000100.github.io/password-generator/");
				break;
			case "dayPlanner":
				window.open("https://ferb00000100.github.io/day-planner/");
				break;
			case "weatherDashboard":
				window.open("https://ferb00000100.github.io/weather-dashboard/");
				break;
			case "sunnySide":
				window.open("https://pacific-peak-82509.herokuapp.com/");
				break;
			case "burgerApp":
				window.open("https://hidden-reef-52945.herokuapp.com/");
				break;
			default:
				window.open("/");
		}
	}
		return (
	<>
		<div>
			<Card className="bg-dark text-light shadow m-2">
				<CardBody>
					<h4>My Drinking Problem Brewery Finder</h4>
					<CardSubtitle>Locate a brewery near you</CardSubtitle>
					<CardImg className="m-1" src={mdp} alt="app image" />
					<AppBtn
						onClick={() => loadApp("breweryFinder")}>My Drinking Problem</AppBtn>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card className="bg-dark text-light shadow m-2">
				<CardBody>
					<h4>Password Generator</h4>
					<CardSubtitle>Make your passwords secure</CardSubtitle>
					<CardImg className="m-1" src={pwdg} alt="app image" />
					<AppBtn
					    onClick={() => loadApp("passwordGenerator")}>Password Generator</AppBtn>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card className="bg-dark text-light shadow m-2">
				<CardBody>
					<h4>Day Planner</h4>
					<CardSubtitle>Keep yourself organized</CardSubtitle>
					<CardImg className="m-1" src={dp} alt="app image" />
					<AppBtn
					    onClick={() => loadApp("dayPlanner")}>Day Planner</AppBtn>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card className="bg-dark text-light shadow m-2">
				<CardBody>
					<h4>Weather Dashboard</h4>
					<CardSubtitle>Traveling? Always know the weather</CardSubtitle>
					<CardImg className="m-1" src={wdb} alt="app image" />
					<AppBtn
						onClick={() => loadApp("weatherDashboard")}>Weather Dashboard</AppBtn>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card className="bg-dark text-light shadow m-2">
				<CardBody>
					<h4>Sunny Side Middle School Sports App</h4>
					<CardSubtitle>Keep track of your students roster, teams and contact information</CardSubtitle>
					<CardImg className="m-1" src={ss} alt="app image" />
					<AppBtn
					    onClick={() => loadApp("sunnySide")}>Sunny Side</AppBtn>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card className="bg-dark text-light shadow m-2">
				<CardBody>
					<h4>Burger App</h4>
					<CardSubtitle>For those who love burgers</CardSubtitle>
					<CardImg className="m-1" src={burger} alt="app image" />
					<AppBtn
						onClick={() => loadApp("burgerApp")}>Burger App</AppBtn>
				</CardBody>
			</Card>
		</div>
	</>
	);
};

export default MyCard;
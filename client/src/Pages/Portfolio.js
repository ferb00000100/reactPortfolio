import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Nav from "../components/Navigation/Nav";
import MyCard from "../components/Cards/MyCard";

const Portfolio = () => {
	return (
		< Container className="about-container" >
			<Row>
				<Col>
					<Nav />
				</Col>
			</Row>
			<Row>
				<Col>
					<MyCard />
				</Col>
			</Row>
		</Container >
	);
}

export default Portfolio;
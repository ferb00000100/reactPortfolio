import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Nav from "../components/Navigation/Nav";
import MyCard from "../components/Project/MyCard";
import Footer from "../components/Footer/Footer";

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
				<Footer/>
		</Container >
	);
}

export default Portfolio;
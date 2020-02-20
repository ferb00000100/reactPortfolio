import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Main from "../components/Container/Main";
import Nav from "../components/Navigation/Nav"
import Footer from "../components/Footer/Footer";
const About = () => {
	return (
		< Container className="about-container" >
			<Row>
				<Col>
					<Nav />
					<Main />
				</Col>
			</Row>
				<Footer/>
		</Container >

	);
}

export default About;
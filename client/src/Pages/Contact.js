import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
import ContactMe from "../components/Contact/contact";


const Contact = () => {
	return (
		< Container className="about-container" >
			<Row>
				<Col>
					<Nav />
					<ContactMe/>
				</Col>
			</Row>
				<Footer/>
		</Container >

	);
}

export default Contact;
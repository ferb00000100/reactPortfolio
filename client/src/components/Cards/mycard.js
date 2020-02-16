import React from 'react';
import Resume from "../Resume/Resume";
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';


const MyCard = (props) => {
	return (
	<>
		<div>

			<Card className="shadow m-2">
				<CardImg top width="75%" src="/assets/318x180.svg" alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
		<div>
			<Card className="shadow m-2">
				<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
				<CardBody>
					<CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	</>
	);
};

export default MyCard;
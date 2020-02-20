import React, { useState } from 'react';
import image from "./cycling_pic.png"
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const NavComponent = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);


	return (
		<div>
			<Navbar color="light" light expand="md">
				<img src={image} alt="bicycle pic" height="55" width="42"></img>
				<NavbarBrand href="/"></NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/about/">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/portfolio/">Portfolio</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact/">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);


}

export default NavComponent;
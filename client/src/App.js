import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact"

const App = () => {
	return(
		<>
			<Router>
				<Switch>
					<Route exact path={['/','/about']}>
						<About />
					</Route>
					<Route exact path={'/portfolio'}>
						<Portfolio />
					</Route>
					<Route exact path={'/contact'}>
						<Contact />
					</Route>
				</Switch>
			</Router>
</>

	)

}

export default App;
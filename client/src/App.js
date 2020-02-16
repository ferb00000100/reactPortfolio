import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navigation/Nav"
import Container from "./components/Container/Main"

const App = () => {
	return(
		<>
		<div className="m-2">
		<Nav />
		<Container/>
		</div>
</>
	)

}

export default App;
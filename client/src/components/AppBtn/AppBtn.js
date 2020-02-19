import React from "react";


function AppBtn(props) {
	return (
		<button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
			{props.children}
		</button>
	);
}

export default AppBtn

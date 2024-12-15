import React from "react";
import { createRoot } from "react-dom/client";

class Clock extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {new Date().toLocaleTimeString(this.props.locale)}.</h2>
			</div>
		);
	}
}
createRoot(document.getElementById("root")).render(<Clock locale="bn-BD" />);

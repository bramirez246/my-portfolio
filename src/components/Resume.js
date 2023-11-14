import React from "react";
import Button from "react-bootstrap/Button";
import Reveal from "./Reveal,";

class Resume extends React.Component {
	render() {
		return (
			<div id="resume-btn" className="text-center">
				<Reveal>
					<Button variant="outline-primary" href="https://drive.google.com/uc?export=download&id=186tQJoY4rrC73Wv-IT7q0ZwgGwUlhiUK">
						Download Resume
					</Button>
				</Reveal>
				<div className="spacer bg-waves3 mt-3"></div>
			</div>
		);
	}
}

export default Resume;

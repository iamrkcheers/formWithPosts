import React from "react";
import { Link } from "react-router-dom";

const Login = props => {
	return (
		<>
			<ul>
				<li>
					<Link to="/form">Form</Link>
				</li>
				<li>
					<Link to="/posts">Posts</Link>
				</li>
			</ul>
		</>
	);
};

export default Login;

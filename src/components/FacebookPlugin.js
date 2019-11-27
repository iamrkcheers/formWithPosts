import React from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class FacebookPlugin extends React.Component {
	state = {
		facebookData: {
			isLoggedIn: false,
			userId: "",
			name: "",
			email: "",
			picture: "",
			token: ""
		}
	};

	componentDidMount = () => {
		if (sessionStorage.getItem("loginData")) {
			var loginData = JSON.parse(sessionStorage.getItem("loginData"));
			this.setState({
				...this.state,
				facebookData: {
					...loginData
				}
			});
		}
	};

	componentClicked = () => {};

	responseFacebook = response => {
		if (
			response.accessToken === undefined ||
			response.accessToken === null ||
			response.accessToken === ""
		)
			return true;
		this.setState(
			{
				...this.state,
				facebookData: {
					isLoggedIn: true,
					userId: response.userID,
					name: response.name,
					email: response.email,
					picture: response.picture,
					token: response.accessToken
				}
			},
			() => {
				sessionStorage.setItem("loginData", JSON.stringify(this.state.facebookData));
			}
		);
	};

	render() {
		let fbContent;
		if (this.state.facebookData.isLoggedIn) {
			fbContent = (
				<>
					<div>
						<img
							src={this.state.facebookData.picture.data.url}
							alt={this.state.facebookData.name}
						/>
						<p>Welcome, {this.state.facebookData.name}</p>
						<p>Email: {this.state.facebookData.email}</p>
					</div>
					<div>
						<>
							<Link to="/form">
								<Typography
									component="h4"
									variant="h5"
									align="center"
								>
									Form
								</Typography>
							</Link>
						</>
						<>
							<Link to="/posts">
								<Typography
									component="h4"
									variant="h5"
									align="center"
								>
									Posts
								</Typography>
							</Link>
						</>
					</div>
				</>
			);
		} else {
			fbContent = (
				<FacebookLogin
					appId="2130394487260965"
					fields="name,email,picture"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
					disableMobileRedirect={true}
				/>
			);
		}
		return (
			<>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div className="mainDiv mainDivForm">
						<Typography
							id="pageHeading"
							className="text-content-heading"
							component="h1"
							variant="h5"
							align="center"
						>
							USER LOGIN
						</Typography>
						{fbContent}
					</div>
				</Container>
			</>
		);
	}
}

export default FacebookPlugin;

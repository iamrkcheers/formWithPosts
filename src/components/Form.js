import React from "react";
import * as helper from "../scripts/helperFunctions";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
				name: "",
				email: "",
				mobile: "",
				url: ""
			}
		};
	}

	handleChange = e => {
		let formData = {
			...this.state.formData
		};
		formData[e.target.id] = e.target.value;
		this.setState({
			...this.state,
			formData
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (!helper.checkForErrors()) return true;
		alert('Form Submitted !');
	};

	render() {
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
							USER FORM
						</Typography>
						<form className="form" onSubmit={this.handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12}>
									<TextField
										autoComplete="name"
										name="name"
										variant="outlined"
										required
										fullWidth
										id="name"
										label="Name"
										type="text"
										onChange={this.handleChange}
										value={this.state.formData.name}
										onBlur={helper.validate}
										className="toBeValidated"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
										type="text"
										onChange={this.handleChange}
										value={this.state.formData.email}
										onBlur={helper.validate}
										className="toBeValidated"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="mobile"
										label="Mobile"
										type="text"
										id="mobile"
										autoComplete="mobile"
										onChange={this.handleChange}
										value={this.state.formData.mobile}
										onBlur={helper.validate}
										className="toBeValidated"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="url"
										label="URL"
										type="text"
										id="url"
										autoComplete="url"
										onChange={this.handleChange}
										value={this.state.formData.url}
										onBlur={helper.validate}
										className="toBeValidated"
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className="submitBtn"
							>
								Submit Form
							</Button>
						</form>
					</div>
				</Container>
			</>
		);
	}
}

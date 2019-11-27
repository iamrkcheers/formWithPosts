import React from "react";
import route from "../jsonObjects/routes";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export default class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postsData: []
		};
	}

	componentDidMount = () => {
		axios
			.get(route.fetchPosts)
			.then(res => {
				if (res.status === 200) {
					this.setState({
						...this.state,
						postsData: res.data
					});
				} else {
					alert('Error !');
				}
			})
			.catch(error => {
				alert('Error !');
			});
	};

	render() {
		var cards = this.state.postsData.map(post => {
			return (
				<Grid item xs={4} key={post.id}>
					<Card className="cards">
						<CardHeader
							avatar={<Avatar>R</Avatar>}
							title={post.title}
							subheader={`User ID : ${post.userId}`}
						/>
						<CardMedia image="/images/post.jpg" className="cardMedia" />
						<CardContent>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{post.body}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			);
		});
		return (
			<>
				<Grid container spacing={4}>
					<Grid container item xs={12} spacing={3}>
						{cards}
					</Grid>
				</Grid>
			</>
		);
	}
}

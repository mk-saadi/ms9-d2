import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
	const { id, body, title } = post;

	const navigate = useNavigate();

	const handleNavigation = () => {
		navigate(`/post/${id}`);
	};

	return (
		<div
			style={{
				textAlign: "start",
				backgroundColor: "salmon",
				borderRadius: "5px",
				padding: "5px 15px",
				margin: "15px 10px",
				borderLeft: "3px solid red",
				fontFamily: "space mono",
			}}>
			<h2>ID: {id}</h2>
			<hr />
			<h2>Title: {title}</h2>
			{/* <Link to={`/post/${id}`}>Show details</Link> */}
			<Link to={`/post/${id}`}>
				<button>Show more</button>
			</Link>
			<button
				style={{ marginLeft: "10px" }}
				onClick={handleNavigation}>
				Button Handler
			</button>
		</div>
	);
};

export default Post;

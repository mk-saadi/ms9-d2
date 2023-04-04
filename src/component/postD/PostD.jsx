import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostD = () => {
	// const post = useLoaderData();

	// {object}
	const [post, setPosts] = useState({});

	const dynamic = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${dynamic.postId}`)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	const navigate = useNavigate();
	const handleGoB = () => {
		navigate(-1);
	};
	return (
		<div
			style={{
				backgroundColor: "salmon",
				padding: "5px 0px",
				paddingLeft: "10px",
				textAlign: "start",
				marginTop: "20px",
				boxShadow: "rgb(14, 14, 14) 6px 6px 4px",
				borderRadius: "5px",
			}}>
			<h2>ID: {post.id}</h2>
			<h3>Title: {post.title}</h3>
			<h3>{post.body}</h3>
			<button onClick={handleGoB}>Go back</button>
		</div>
	);
};

export default PostD;

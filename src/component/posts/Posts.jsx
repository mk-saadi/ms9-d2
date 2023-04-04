import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
	// const posts = useLoaderData();

	// [array]
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);
	console.log(posts);
	return (
		<div>
			<h1>Number of posts: {posts.length}</h1>
			{posts.map((post) => (
				<Post
					key={post.id}
					post={post}></Post>
			))}
		</div>
	);
};

export default Posts;

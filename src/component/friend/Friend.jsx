import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
	// console.log(friend);
	const { name, id, phone, email, website } = friend;
	return (
		<div
			style={{
				backgroundColor: "salmon",
				margin: "5px",
				borderRadius: "5px",
				textAlign: "start",
				paddingLeft: "12px",
				paddingBottom: "8px",
				fontFamily: "fira code",
			}}>
			<h1>{name}</h1>
			<h3>Email address: {email}</h3>
			<h3>
				<Link to={`/friend/${id}`}>Show me details</Link>
			</h3>
		</div>
	);
};

export default Friend;

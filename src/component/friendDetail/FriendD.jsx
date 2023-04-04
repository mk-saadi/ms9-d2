import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendD = () => {
	const friend = useLoaderData();
	// console.log(friend);
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
			<h2>{friend.name}</h2>
			<h3>Phone number: {friend.phone}</h3>
			<h3>
				Website: <a href=''>{friend.website}</a>
			</h3>
			<h3>Phone number: {friend.phone}</h3>
			<h3>City: {friend.address.city}</h3>
		</div>
	);
};

export default FriendD;

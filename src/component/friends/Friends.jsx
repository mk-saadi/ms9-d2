import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../friend/Friend";

const Friends = () => {
	const friends = useLoaderData();
	// console.log(friends);
	return (
		<div>
			<h1>friends request: {friends.length}</h1>
			{friends.map((friend) => (
				<Friend
					key={friend.id}
					friend={friend}></Friend>
			))}
		</div>
	);
};

export default Friends;

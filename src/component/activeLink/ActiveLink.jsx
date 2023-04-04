import React from "react";
import "./active.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
	return (
		<NavLink
			// to={`contacts/${contact.id}`}
			to={to}
			className={({ isActive, isPending }) =>
				isActive ? "active" : isPending ? "pending" : ""
			}>
			{/* other code */}
			{children}
		</NavLink>
	);
};

export default ActiveLink;

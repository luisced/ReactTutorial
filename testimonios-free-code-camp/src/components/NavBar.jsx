import React from "react";
import "../styles/NavBar.css";

export const NavBar = () => {
	return (
		<nav>
			<div className="search_bar">
				<form>
					<input type="search" placeholder="Search..."></input>
				</form>
			</div>
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Contact</a>
		</nav>
	);
};

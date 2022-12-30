import React from "react";
import "../styles/Button.css";

export const Button = ({ text, isClickButton, handleClick }) => {
	return (
		<button
			className={isClickButton ? "clickButton" : "restartButton"}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

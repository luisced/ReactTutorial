// import styles from "./Button.module.css";

import "../styles/Button.css";

export function Button({ children }) {
	const isOperator = (val) => {
		return isNaN(val) || val === "." || val === "=";
	};

	return (
		<div
			className={`buttonContainer${isOperator(children) ? " operator" : ""}`}
		>
			{children}
		</div>
	);
}

import "../styles/Counter.css";

export function Counter({ countClicks }) {
	return (
		<div className="Counter">
			<span>{countClicks}</span>
		</div>
	);
}

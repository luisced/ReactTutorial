import "../styles/Task.css";

export function Task({ text }) {
	return (
		<div className="tasksContainer">
			<div className="taskText">{text}</div>
			<div className="taskIcon">Delete</div>
		</div>
	);
}

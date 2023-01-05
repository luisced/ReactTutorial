import "../styles/Form.css";

export function Form({}) {
	return (
		<form action="" className="taskForm">
			<input
				type="text"
				className="taskInput"
				placeholder="Write a task"
				name="text"
			/>
			<button className="taskButton">Add a task</button>
		</form>
	);
}

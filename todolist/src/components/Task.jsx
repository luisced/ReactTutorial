import "../styles/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function Task({ text, finished }) {
	return (
		<div className={finished ? "tasksContainer finished" : "tasksContainer"}>
			<div className="taskText">{text}</div>
			<div className="taskIconIconContainer">
				<AiOutlineCloseCircle className="taskIcon" />
			</div>
		</div>
	);
}

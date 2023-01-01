import "./App.css";
import { Task } from "./components/Task";

function App() {
	return (
		<div className="App">
			<div className="taskContainer">
				<div className="taskMainList">
					<h1>My tasks</h1>
					<Task text="Learn React" />
				</div>
			</div>
		</div>
	);
}

export default App;

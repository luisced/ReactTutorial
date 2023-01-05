import "./App.css";
import { Task } from "./components/Task";
import { Form } from "./components/Form";

function App() {
	return (
		<div className="App">
			<div className="taskContainer">
				<div className="taskMainList">
					<h1>My tasks</h1>
					<Form />
					<Task text="Learn React" />
				</div>
			</div>
		</div>
	);
}

export default App;

import "./App.css";
import { Testimony } from "./components/Testimony";

function App() {
	return (
		<div className="App">
			<div className="Main_Container">
				<h1>
					How I finished the entire freeCodeCamp curriculum in 9 months while
					working full time
				</h1>
			</div>
			<Testimony
				name="The Rock"
				country="USA"
				image="1"
				role="Software Engineer"
				enterprise="Spotify"
				testimony="I was able to finish the entire freeCodeCamp curriculum in 9 months while working full time. I was able to get a job as a software engineer at Spotify."
			/>
			<Testimony
				name="Chris"
				country="USA"
				image="2"
				role="Software Engineer"
				enterprise="Google"
				testimony="I was able to finish the entire freeCodeCamp curriculum in 9 months while working full time. I was able to get a job as a software engineer at Google."
			/>
			<Testimony
				name="Will"
				country="Mexico"
				image="3"
				role="Software Engineer"
				enterprise="Facebook"
				testimony="I was able to finish the entire freeCodeCamp curriculum in 9 months while working full time. I was able to get a job as a software engineer at Facebook."
			/>
		</div>
	);
}

export default App;

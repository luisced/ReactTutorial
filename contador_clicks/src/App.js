import "./App.css";
import freecodecamp from "./assets/images/freecodecamp.png";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
	const [contador, setContador] = useState(0);

	const handleClick = () => {
		return setContador(contador + 1);
	};

	const restartCounter = () => {
		return setContador(0);
	};

	return (
		<div className="App">
			<div className="mainContainer">
				<div className="freeCodeCampContainer">
					<img
						src={freecodecamp}
						alt="Logo de FreeCodeCampp"
						className="freeCodeCampLogo"
					/>
				</div>
				<Counter countClicks={contador} />
				<Button text="Click" isClickButton={true} handleClick={handleClick} />
				<Button
					text="Restart"
					isClickButton={false}
					handleClick={restartCounter}
				/>
			</div>
		</div>
	);
}

export default App;

import "./App.css";
import { Button } from "./components/Button";
import { Screen } from "./components/Screen";
import freecodecampLogo from "./images/freecodecamp.png";

function App() {
	return (
		<div className="App">
			<div className="freeCodeCampLogoContainer">
				<img src={freecodecampLogo} alt="" className="freeCodeCampLogo" />
			</div>
			<div className="calculatorContainer">
				<Screen />
				<div className="row">
					<Button>1</Button>
					<Button>2</Button>
					<Button>3</Button>
					<Button>+</Button>
				</div>
				<div className="row">
					<Button>4</Button>
					<Button>5</Button>
					<Button>6</Button>
					<Button>-</Button>
				</div>
				<div className="row">
					<Button>7</Button>
					<Button>8</Button>
					<Button>9</Button>
					<Button>x</Button>
				</div>
				<div className="row">
					<Button>=</Button>
					<Button>0</Button>
					<Button>.</Button>
					<Button>/</Button>
				</div>
				<div className="row"></div>
			</div>
		</div>
	);
}

export default App;

import { useState } from "react";
import uncpLogo from "./assets/images/uncp-logo.png";
import fisLogo from "./assets/images/fis-logo.png";
import Fetch from "./components/Fetch";
import ReactBasics from "./components/ReactBasics";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App m-10">
			<header className="App-header flex justify-between items-center">
				<img src={uncpLogo} width={100} className="uncp-logo" alt="logo" />
				<div className="text-center space-y-2">
					<strong className="text-3xl">
						Universidad Nacional Del Centro del Perú
					</strong>
					<h4 className="text-2xl">Facultad de Ingenieria de Sistemas</h4>
				</div>
				<img src={fisLogo} width={100} className="fis-logo" alt="logo" />
			</header>
			<main>

				<Fetch />
				<ReactBasics />
			</main>

		</div>
	);
}

export default App;

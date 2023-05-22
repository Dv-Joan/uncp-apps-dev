import { useState } from "react";
import uncpLogo from "./assets/images/uncp-logo.png";
import fisLogo from "./assets/images/fis-logo.png";
import Fetch from "./components/Fetch";
import ReactBasics from "./components/ReactBasics";
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="m-10 App font-noto-sans">
			<header className="flex items-center justify-between font-bold App-header">
				<img src={uncpLogo} width={100} className="uncp-logo" alt="logo" />
				<div className="space-y-2 text-center">
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

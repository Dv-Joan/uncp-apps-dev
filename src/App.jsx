import uncpLogo from "./assets/images/uncp-logo.png";
import fisLogo from "./assets/images/fis-logo.png";
import Fetch from "./components/Fetch";
import ReactBasics from "./components/ReactBasics";
import AlertColorChanger from "./components/course-tests/tasks/AlertColorChanger";
import NumbersArray from "./components/course-tests/tasks/NumbersArray"
import Operations from "./components/course-tests/tasks/Operations";
import BackgroundInputs from "./components/course-tests/tasks/BackgroundInputs";
import ListaEnumerada from "./components/course-tests/tasks/TagGenerator";
function App() {

	return (
		<div className="m-10 App font-noto-sans dark:text-white text-zinc-900">
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
				<div className="my-5">
					<div className="flex items-center justify-center gap-3">
						<hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
						<span className="px-3 mt-1 font-semibold rounded-full bg-red-200 border-[1px] border-red-700 text-red-600 text-md">week 7</span>
						<h1 className="my-10 text-3xl font-bold text-center">  Practice Nº 1</h1>
						<hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-500" />
					</div>
					<section >

						<AlertColorChanger />
						<div className="grid items-center justify-center grid-flow-row grid-cols-2 gap-2 mx-20">

							<NumbersArray />
							<Operations />
							<BackgroundInputs />
							<ListaEnumerada />
						</div>
					</section>
				</div>
			</main>

		</div>
	);
}

export default App;

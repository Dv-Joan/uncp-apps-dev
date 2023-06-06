import uncpLogo from "./assets/images/uncp-logo.png";
import fisLogo from "./assets/images/fis-logo.png";
import Header from "./components/header";
import FirstPartial from "./components/first-partial";
import SecondPartial from "./components/second-partial";
function App() {
  return (
    <div className="m-10 App font-noto-sans dark:text-white text-zinc-900">
      <header className="flex items-center justify-between font-bold App-header">
        <img src={uncpLogo} width={100} className="uncp-logo" alt="logo" />
        <div className="space-y-2 tracking-tight text-center">
          <strong className="text-3xl">
            Universidad Nacional Del Centro del Perú
          </strong>
          <h4 className="text-2xl">Facultad de Ingenieria de Sistemas</h4>
        </div>
        <img src={fisLogo} width={100} className="fis-logo" alt="logo" />
      </header>
      <Header />
      <main>
        <FirstPartial />
        <SecondPartial />
      </main>
    </div>
  );
}

export default App;

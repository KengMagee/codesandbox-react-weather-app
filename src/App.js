import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
      </header>
      <footer>
        Project by{" "}
        <a
          href="https://www.shecodes.io/graduates/102970-karen-felipe"
          target="blank"
        >
          Karen Felipe
        </a>
        , open sourced on{" "}
        <a
          href="https://github.com/KengMagee/codesandbox-react-weather-app"
          target="blank"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a href="/" target="blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

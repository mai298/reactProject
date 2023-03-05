import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          new branch
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul className="sub-ul sub-of-js">
          <li>
            <a href="">coming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="show-when-mobile">
    <h1>Courses 4 Arab</h1>
    <label className="absolute" htmlFor="burger">
      <i className="fas fa-bars" />
    </label>
    <input id="burger" type="checkbox" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fas fa-plus" />{" "}
        </label>
        <input id="html" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="">Full Course</a>
          </li>
          <li>
            <a href="">Crash Course</a>
          </li>
          <li>
            <a href="">learn in 1h</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fas fa-plus" />{" "}
        </label>
        <input id="css" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="">Full Course</a>
          </li>
          <li>
            <a href="">CSS Examples</a>
          </li>
          <li>
            <label className="mini-projects" htmlFor="mini">
              mini projects <i className="fas fa-plus" />{" "}
            </label>
            <input id="mini" type="checkbox" />
            <ul className="sub-sub-div">
              <li>
                <a href="">project 1</a>
              </li>
              <li>
                <a href="">project 2</a>
              </li>
              <li>
                <a href="">project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          JavaScript <i className="fas fa-plus" />{" "}
        </label>
        <input id="js" type="checkbox" />
        <ul className="sub-div">
          <li>
            <a href="">coming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    Respossive Drop-down <br />
    Menu Bar <br />
    HTML &amp; CSS only
  </main>
  <footer>
    Designed and developed by Courses4Arab.com
    <span>🧡</span>
  </footer>
</>

  );
}

export default App;

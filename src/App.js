import logo from './logo.svg';
import './App.css';



function App() {
  const users= ["a","b","c","d"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save! to reload.
          </p>
          <p>{users.map(u=><p>u<br/></p> )}</p>
               <p>
                 1<br/>
                 2
                 3
               </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!!!!!
        </a>
      </header>
    </div>
  );
}

export default App;

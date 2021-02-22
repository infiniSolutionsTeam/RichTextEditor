import logo from './logo.svg';
import './App.css';
import TextEditor from './componnent/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Editor</h1>
      </header>
      <div className="textEditor">
        <TextEditor/>
      </div>
      
    </div>
  );
}

export default App;

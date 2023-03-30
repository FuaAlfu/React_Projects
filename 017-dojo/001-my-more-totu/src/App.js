import './App.css';
import Note from './components/Note.js';
import Testing from './components/Testing.js';

function App() {
  return (
    <div className="App">
         <Note title = "random title"/>
         <Note title = "another random title" number={2}/>
    </div>
  );
}

export default App;

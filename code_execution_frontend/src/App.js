import './App.scss';
import CodeEditor from './components/Editor';

function App() {
  return (
    <div className="Platform">
      <div className="ScratchPad">
        <h1>Scratch Pad Component</h1>
      </div>
      <div className="CodeEditor">
        <CodeEditor />
      </div>
    </div>
  );
}

export default App;

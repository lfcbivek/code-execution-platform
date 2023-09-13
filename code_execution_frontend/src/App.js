import './App.scss';
import CodeEditor from './components/Editor';

function App() {
  return (
    <div className="Platform">
      <div className='VerticalOptions'>
        <div className="ScratchPad">
          <h1>Scratch Pad Component</h1>
        </div>
        <div className="CodeEditor">
          <CodeEditor />
        </div>
      </div>
      <div className="CodeDebugger">
        <h1>Code Debugger</h1>
      </div>
    </div>
  );
}

export default App;

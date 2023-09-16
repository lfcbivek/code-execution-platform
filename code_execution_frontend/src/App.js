import './App.scss';
import CodeEditor from './components/Editor';
import ScratchPad from './components/ScratchPad';
// import { ResizableBox } from 'react-resizable';

function App() {
  return (
    <div className="Platform">
      <div className='VerticalOptions'>
          <div className="ScratchPad">
              <ScratchPad />
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

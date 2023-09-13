import React from 'react';
import Editor from '@monaco-editor/react';
import './Editor.scss'

function CodeEditor() {
    return(
        <div className='CodeEditor'>
            <Editor 
                height="80vh"
                defaultLanguage="javascript" 
                defaultValue="// some comment" 
                theme="vs-dark"
            />
        </div>
    );
}

export default CodeEditor;
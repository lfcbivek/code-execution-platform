import React from 'react';
import Editor from '@monaco-editor/react';
import './Editor.scss'

const CodeEditor = () => {
    return(
        <div className='CodeEditor'>
            <Editor 
                height="75vh"
                defaultLanguage="javascript" 
                defaultValue="// some comment" 
                theme="vs-dark"
            />
        </div>
    );
}

export default CodeEditor;
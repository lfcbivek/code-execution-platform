import './ScratchPad.scss';
import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [
    StarterKit,
  ]
const content = '<p>Hello World!</p>' 
const ScratchPad = () => {
    return(
        <div className='DocsEditor'>
           <EditorProvider className ="TipTapEditor" extensions={extensions} content={content}>
            </EditorProvider> 
        </div>
    );
}

export default ScratchPad;